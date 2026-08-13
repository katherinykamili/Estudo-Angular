import { courseContent } from '../dist/content/index.js';
import { lessons } from '../dist/data.js';

const normalize = (text) => text.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const blocks = [];
const lessonTexts = new Map();

for (const lesson of lessons) {
  const content = courseContent[lesson.id];
  if (!content) throw new Error(`Aula sem conteúdo: ${lesson.id}`);
  const pedagogical = [content.centralQuestion, ...content.learningGoals, ...content.misconceptions, ...content.checklist];
  for (const section of content.sections) pedagogical.push(section.title, section.body, section.prompt, section.answer, section.explanation);
  const normalized = pedagogical.filter(Boolean).map(normalize).filter((text) => text.length >= 60);
  normalized.forEach((text) => blocks.push({ lesson: lesson.id, text }));
  lessonTexts.set(lesson.id, normalize(pedagogical.filter(Boolean).join(' ')));
}

const exact = [];
const exactMap = new Map();
for (const block of blocks) {
  const previous = exactMap.get(block.text);
  if (previous && previous !== block.lesson) exact.push(`${previous} ↔ ${block.lesson}`);
  else exactMap.set(block.text, block.lesson);
}
if (exact.length) throw new Error(`Blocos pedagógicos exatos duplicados: ${[...new Set(exact)].join(', ')}`);

const trigrams = (text) => { const words = text.split(' '); return new Set(words.slice(0, -2).map((_, i) => words.slice(i, i + 3).join(' '))); };
const similarity = (a, b) => { const aa = trigrams(a); const bb = trigrams(b); let intersection = 0; for (const item of aa) if (bb.has(item)) intersection++; return intersection / Math.max(1, aa.size + bb.size - intersection); };
const high = [];
for (let i = 0; i < lessons.length; i++) for (let j = i + 1; j < lessons.length; j++) {
  const score = similarity(lessonTexts.get(lessons[i].id), lessonTexts.get(lessons[j].id));
  if (score >= .35) high.push({ pair: `${lessons[i].id} ↔ ${lessons[j].id}`, score });
}
high.sort((a, b) => b.score - a.score);
console.log(`Auditoria textual aprovada: ${blocks.length} blocos longos, 0 duplicações exatas, ${high.length} pares com similaridade alta (limiar 35%).`);
for (const item of high.slice(0, 10)) console.log(`  ⚠ ${item.pair}: ${Math.round(item.score * 100)}%`);
