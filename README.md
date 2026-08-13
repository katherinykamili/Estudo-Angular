# Angular & TypeScript Academy

Plataforma educacional em português para estudar TypeScript e Angular do zero ao nível profissional. A experiência foi inspirada na metodologia do material de referência: **estudo → demonstração → prática guiada → experimente → desafio → reflexão**.

## O que a plataforma oferece

- 11 módulos e 31 aulas progressivas, de fundamentos web a arquitetura Angular;
- trilhas de TypeScript, Angular, RxJS, Signals, testes, performance e autenticação;
- projetos de tarefas tipadas, card de produto e painel administrativo;
- desafios com solução expansível, checklist e code review;
- quizzes de módulo, snippets copiáveis e pequenas demonstrações interativas;
- busca por assunto, filtros visuais por nível e navegação lateral;
- progresso e checklists persistidos no `localStorage` do navegador;
- interface responsiva, semântica e navegável por teclado.

## Tecnologias

- HTML5 e CSS3;
- TypeScript com modo estrito;
- sem dependências de interface: o projeto mantém uma base leve e fácil de estudar.

## Estrutura

```text
src/
├── data.ts       # módulos, aulas e quizzes
├── main.ts       # renderização, navegação e interações
├── styles.css    # design system responsivo
└── types.ts      # contratos TypeScript
```

## Executar

Requer Node.js 18 ou superior.

```bash
npm install
npm run build
npm run dev
```

Abra `http://localhost:4173`. O build gera os módulos JavaScript em `dist/`.

## Adicionar uma aula

1. Cadastre o módulo em `src/data.ts` caso ele ainda não exista.
2. Adicione uma `lesson(...)` com título, nível, duração, resumo e tópicos.
3. Para uma explicação especial, crie uma condição em `exampleFor` de `src/main.ts`.
4. Execute `npm run build`.

O conteúdo genérico de aula já inclui objetivo, teoria, demonstração, prática, experimento, desafio, solução, checklist e recursos; cada aula nova passa a participar automaticamente da busca, navegação e progresso.

## Progresso

As aulas concluídas são gravadas em `localStorage` na chave `academy-progress-v1`; checklists usam `academy-checklists-v1`. Para reiniciar, remova essas chaves nas ferramentas de desenvolvimento do navegador.

## Deploy

Por ser estático, publique a pasta do projeto em GitHub Pages, Netlify ou Vercel após executar o build. Mantenha `index.html`, `src/styles.css` e a pasta `dist/` no artefato publicado.
