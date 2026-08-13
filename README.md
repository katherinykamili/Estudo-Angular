# Angular & TypeScript Academy

Plataforma estática em português para estudar web, TypeScript e Angular. A Academy é construída com HTML, CSS e TypeScript; ela ensina Angular, mas não é um workspace Angular CLI.

## Ambientes de aprendizagem

- **Navegador / DevTools:** investigações de HTTP e Network sem alterar código.
- **Repositório da Academy:** manutenção da própria plataforma estática.
- **TypeScript Lab:** projeto separado e contínuo para exercícios TypeScript.
- **Angular Lab:** projeto Angular standalone separado, criado uma vez e evoluído até o projeto final.

Nunca execute `ng generate` dentro deste repositório. Os comandos Angular exibidos nas aulas pertencem ao `angular-lab` do estudante.

## Arquitetura

```text
src/
├── content/
│   ├── environments.ts       # roteiros operacionais dos quatro ambientes
│   ├── typescript-lessons.ts # conteúdo explícito das aulas 00–03
│   ├── angular-lessons.ts    # conteúdo explícito das aulas 04–10
│   └── index.ts              # catálogo e revisões de módulo
├── data.ts                   # metadados de módulos e aulas
├── main.ts                   # renderização, navegação e interações
├── types.ts                  # modelo pedagógico declarativo
├── styles.css                # identidade visual e layout base
├── learning.css              # estilos didáticos legados preservados
└── workshop.css              # seções, ambientes e revisões atuais
```

`main.ts` não inventa explicações, analogias, desafios ou soluções. Ele renderiza os blocos declarados em `courseContent`. Cada aula possui pergunta central, pré-requisitos, objetivos, misconceptions, habilidades, ambiente, composição própria, checklist específico, recursos exatos e conexão com a trilha.

## Estrutura de uma aula

O contrato `LessonContent` aceita seções de tipos diferentes:

```ts
type SectionKind =
  | 'concept' | 'diagram' | 'timeline' | 'comparison' | 'code'
  | 'prediction' | 'debugging' | 'lab' | 'practice' | 'milestones'
  | 'retrieval' | 'reflection' | 'deep-dive';
```

Uma aula usa apenas os blocos adequados ao tema. Web prioriza Network; funções usam worked example com fading; routing usa mapa de URLs e milestones; RxJS usa timeline; arquitetura usa classificação e refatoração.

## Adicionar uma aula

1. Cadastre seus metadados em `src/data.ts`.
2. Crie uma entrada com a mesma `id` em `src/content/typescript-lessons.ts` ou `src/content/angular-lessons.ts`.
3. Declare `centralQuestion`, `prerequisites`, `learningGoals`, `misconceptions`, `skills`, `environment`, `sections`, `checklist`, `resources` e `connection`.
4. Escolha seções pela tarefa cognitiva; não copie a composição de outra aula automaticamente.
5. Adicione a revisão em `moduleReviews` somente se a aula encerrar um módulo novo.
6. Execute `npm test`.

### Adicionar seção ou exercício

Adicione um objeto a `sections`. Use `prompt` para a tarefa, `answer` para retrieval/prediction e `solution` + `explanation` para implementação ou debugging. A explicação deve justificar a solução específica.

### Adicionar recurso

Inclua em `resources` a página exata da documentação, não apenas sua home:

```ts
{ title: 'Angular — Define routes', url: 'https://angular.dev/guide/routing/define-routes', source: 'Angular' }
```

### Adicionar revisão ou quiz

Revisões ficam em `moduleReviews`, possuem cinco perguntas de recuperação, exercício misto, debugging e mini projeto, e são renderizadas apenas na última aula do módulo.

## Executar

Requer Node.js compatível com a versão de TypeScript instalada.

```bash
npm install
npm run build
npm run dev
```

Abra `http://localhost:4173`. O build gera JavaScript em `dist/`.

## Qualidade e auditorias

```bash
npm run build
npm run audit:examples
npm run audit:content
npm test
```

- `audit:examples` exige conteúdo para todas as aulas e rejeita snippets repetidos dentro da mesma aula ou entre aulas.
- `audit:content` procura blocos pedagógicos exatos e calcula similaridade por trigramas/Jaccard entre aulas.
- `npm test` executa build e as duas auditorias.

## Funcionalidades preservadas

Sidebar, busca, progresso e checklists em `localStorage`, navegação por hash, layout responsivo, atalhos de teclado, snippets copiáveis e compatibilidade com GitHub Pages permanecem disponíveis.

## Referências editoriais

O conteúdo foi sintetizado a partir da documentação oficial do TypeScript, Angular e MDN, com links específicos em cada aula. APIs modernas são priorizadas: standalone components, `input()`, `output()`, `inject()`, `@if`, `@for`, signals, functional guards/interceptors, `provideHttpClient()`, lazy routes e Vitest. APIs legadas são mencionadas somente quando ajudam a interpretar projetos existentes.
