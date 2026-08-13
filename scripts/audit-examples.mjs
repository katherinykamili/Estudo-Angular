import { courseContent } from '../dist/content/index.js';
import { lessons } from '../dist/data.js';

const seen = new Map();
let count = 0;
for (const lesson of lessons) {
  const content = courseContent[lesson.id];
  if (!content) throw new Error(`Aula sem conteúdo: ${lesson.id}`);
  const local = new Map();
  for (const [index, section] of content.sections.entries()) {
    for (const field of ['code', 'solution']) {
      const snippet = section[field]?.replace(/\s+/g, ' ').trim();
      if (!snippet || snippet.length < 20) continue;
      count++;
      if (local.has(snippet)) throw new Error(`Snippet repetido na aula ${lesson.id}: seções ${local.get(snippet)} e ${index}`);
      local.set(snippet, index);
      const previous = seen.get(snippet);
      if (previous) throw new Error(`Snippet duplicado entre aulas: ${previous} e ${lesson.id}:${index}:${field}`);
      seen.set(snippet, `${lesson.id}:${index}:${field}`);
    }
  }
}

console.log(`Auditoria de exemplos aprovada: ${lessons.length} aulas e ${count} snippets pedagógicos únicos.`);
