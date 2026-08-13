import { dedicatedExamples } from '../dist/lesson-examples.js';
import { lessons } from '../dist/data.js';

const guidedInMain = new Set([
  'ts-intro', 'types', 'functions', 'interfaces', 'classes', 'generics',
  'components', 'binding', 'inputs-outputs', 'services', 'routing', 'http',
  'rxjs', 'signals',
]);

const missing = lessons.filter(({ id }) => !guidedInMain.has(id) && !dedicatedExamples[id]);
if (missing.length) {
  throw new Error(`Aulas sem exemplo próprio: ${missing.map(({ id }) => id).join(', ')}`);
}

const snippets = new Map();
for (const [id, example] of Object.entries(dedicatedExamples)) {
  for (const [kind, code] of Object.entries({ minimum: example.minimum, real: example.real })) {
    const normalized = code.replace(/\s+/g, ' ').trim();
    const previous = snippets.get(normalized);
    if (previous) throw new Error(`Exemplo duplicado: ${previous} e ${id}:${kind}`);
    snippets.set(normalized, `${id}:${kind}`);
  }
}

console.log(`Auditoria aprovada: ${lessons.length} aulas possuem conteúdo dedicado; ${snippets.size} exemplos catalogados são únicos.`);
