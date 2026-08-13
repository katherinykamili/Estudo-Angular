import { angularLessons } from './angular-lessons.js';
import { typescriptLessons } from './typescript-lessons.js';
export const courseContent = { ...typescriptLessons, ...angularLessons };
export const moduleReviews = {
    0: { questions: [
            { prompt: 'Qual parte inicia uma conversa HTTP?', answer: 'O cliente envia um request.' },
            { prompt: 'O que Status 200 comunica?', answer: 'A requisição foi atendida com sucesso.' },
            { prompt: 'Qual ferramenta executa JavaScript fora do navegador?', answer: 'Node.js.' },
            { prompt: 'Onde npm encontra os scripts do projeto?', answer: 'Em package.json.' },
            { prompt: 'Qual painel mostra requests do navegador?', answer: 'Network no DevTools.' }
        ], mixedExercise: 'Abra a Academy, encontre no Network o document principal e associe a execução local ao script dev de package.json.', debugging: 'npm run dev falha com dependência ausente: identifique por que npm install vem antes.', miniProject: 'Produza uma ficha do ambiente com versões de Node, npm, Git, URL local e um request inspecionado.' },
    1: { questions: [
            { prompt: 'TypeScript roda diretamente no navegador?', answer: 'Não; tsc produz JavaScript.' },
            { prompt: 'Qual a diferença entre parâmetro e argumento?', answer: 'Parâmetro está na declaração; argumento, na chamada.' },
            { prompt: 'O que return faz?', answer: 'Entrega um valor a quem chamou a função.' },
            { prompt: 'Por que uma union literal supera string em status?', answer: 'Limita estados e fornece autocomplete.' },
            { prompt: 'Tuple e array são sempre equivalentes?', answer: 'Não; tupla fixa posição e tipos.' }
        ], mixedExercise: 'Modele Pedido com objeto, status limitado e função calcularTotal.', debugging: "Corrija let total: number = '30' sem usar any.", miniProject: 'Crie o núcleo tipado de uma lista de compras com itens, total e estado.' },
    2: { questions: [
            { prompt: 'Interface existe em runtime?', answer: 'Não; descreve forma durante a verificação.' },
            { prompt: 'O que readonly impede?', answer: 'Reatribuição daquela propriedade pelo TypeScript.' },
            { prompt: 'O que new produz?', answer: 'Uma instância da classe.' },
            { prompt: 'Quando typeof ajuda?', answer: 'Ao estreitar primitivos em uma union.' },
            { prompt: 'Por que assertion não valida JSON?', answer: 'Ela só instrui o compilador; não executa checagem.' }
        ], mixedExercise: 'Modele uma resposta Usuario | ErroApi e trate cada formato com guard.', debugging: 'Encontre o acesso inseguro a método de string em string | number.', miniProject: 'Crie um pequeno cadastro com contrato, classe de regra e validação de entrada unknown.' },
    3: { questions: [
            { prompt: 'Que relação um generic preserva?', answer: 'A relação entre tipos como entrada e saída.' },
            { prompt: 'Quando usar constraint?', answer: 'Quando a implementação exige uma capacidade/propriedade.' },
            { prompt: 'O que Partial faz?', answer: 'Torna propriedades opcionais no tipo derivado.' },
            { prompt: 'fetch rejeita automaticamente HTTP 404?', answer: 'Não; verifique response.ok.' },
            { prompt: 'Como localStorage guarda objetos?', answer: 'Como texto, normalmente via JSON.stringify.' }
        ], mixedExercise: 'Crie Repository<T extends { id: number }> com busca assíncrona simulada.', debugging: 'Corrija acesso a length em T irrestrito e catch silencioso.', miniProject: 'Conclua tarefas tipadas com filtros e persistência.' },
    4: { questions: [
            { prompt: 'Qual problema central componentes resolvem?', answer: 'Dividem a interface em partes coesas e reutilizáveis.' },
            { prompt: 'Qual arquivo chama bootstrapApplication?', answer: 'src/main.ts.' },
            { prompt: 'Onde ficam providers globais no standalone?', answer: 'Em app.config.ts.' },
            { prompt: 'Qual é o padrão moderno: standalone ou NgModule?', answer: 'Standalone.' },
            { prompt: 'A Academy é workspace Angular?', answer: 'Não; Angular Lab é separado.' }
        ], mixedExercise: 'Associe component, router, service, forms e HttpClient a cinco necessidades.', debugging: 'Explique por que app.module.ts ausente não é erro no laboratório atual.', miniProject: 'Crie e documente angular-lab, sem funcionalidade adicional.' },
    5: { questions: [
            { prompt: 'Quais três partes mínimas formam um componente?', answer: 'Classe, template e selector.' },
            { prompt: 'Como o pai envia dado?', answer: 'Com property binding para um input.' },
            { prompt: 'Como o filho comunica intenção?', answer: 'Emitindo output.' },
            { prompt: 'Como se lê um signal input?', answer: 'Chamando-o com ().' },
            { prompt: 'Onde importar filho standalone?', answer: 'No imports do @Component pai.' }
        ], mixedExercise: 'Faça ProdutoCard receber produto e emitir adicionar.', debugging: 'Corrija colchetes e parênteses invertidos.', miniProject: 'Entregue catálogo com três cards acessíveis.' },
    6: { questions: [
            { prompt: 'Qual binding mostra texto?', answer: 'Interpolação.' },
            { prompt: 'Qual binding escuta clique?', answer: 'Event binding com parênteses.' },
            { prompt: 'O que [(ngModel)] expressa?', answer: 'Two-way binding.' },
            { prompt: 'Para que serve track?', answer: 'Identificar itens entre renderizações.' },
            { prompt: 'Qual bloco atende lista vazia?', answer: '@empty associado a @for.' }
        ], mixedExercise: 'Crie filtro digitável e quatro estados de catálogo.', debugging: 'Corrija [click] e um track instável.', miniProject: 'Monte vitrine pesquisável com loading, erro e vazio.' },
    7: { questions: [
            { prompt: 'Service e DI são iguais?', answer: 'Não; classe de responsabilidade e mecanismo de fornecimento.' },
            { prompt: 'Como pedir dependência modernamente?', answer: 'Com inject().' },
            { prompt: 'Qual elemento recebe a rota ativa?', answer: 'router-outlet.' },
            { prompt: 'Por que wildcard fica por último?', answer: 'O router usa a primeira correspondência.' },
            { prompt: 'Guard protege a API?', answer: 'Não.' }
        ], mixedExercise: 'Centralize catálogo e crie rotas de lista/detalhe.', debugging: 'Localize instância criada com new e wildcard antecipado.', miniProject: 'Catálogo roteado com service compartilhado e 404.' },
    8: { questions: [
            { prompt: 'FormControl representa o quê?', answer: 'Valor e estado de um campo.' },
            { prompt: 'Quando touched fica true?', answer: 'Após foco e saída do controle.' },
            { prompt: 'Como configurar HttpClient em standalone?', answer: 'Com provideHttpClient().' },
            { prompt: 'Qual verbo atualiza parcialmente?', answer: 'PATCH.' },
            { prompt: 'CORS é corrigido no template?', answer: 'Não.' }
        ], mixedExercise: 'Cadastre produto via form e POST, exibindo estados.', debugging: 'Corrija erro exibido cedo demais e resposta any.', miniProject: 'Tela CRUD acessível ligada a uma API.' },
    9: { questions: [
            { prompt: 'Observable representa o quê?', answer: 'Sequência de valores ao longo do tempo.' },
            { prompt: 'Quando switchMap ajuda?', answer: 'Quando só o trabalho mais recente importa.' },
            { prompt: 'Como ler signal?', answer: 'Com ().' },
            { prompt: 'Para que serve computed?', answer: 'Estado derivado somente leitura.' },
            { prompt: 'O que precisa de cleanup?', answer: 'Recursos que continuam ativos após destruição.' }
        ], mixedExercise: 'Busca RxJS alimenta lista e signal/computed resume seleção.', debugging: 'Encontre subtotal duplicado e interval sem limpeza.', miniProject: 'Busca reativa com contador derivado e lifecycle correto.' },
    10: { questions: [
            { prompt: 'O que orienta pasta de feature?', answer: 'Arquivos que mudam juntos por domínio.' },
            { prompt: 'Autenticação e autorização diferem como?', answer: 'Identidade versus permissão.' },
            { prompt: 'Quem valida permissão real?', answer: 'Backend.' },
            { prompt: 'Qual runner é padrão em projetos Angular atuais?', answer: 'Vitest.' },
            { prompt: 'Qual é a primeira etapa de otimização?', answer: 'Medir o problema.' }
        ], mixedExercise: 'Revise arquitetura, segurança, desempenho e testes do painel.', debugging: 'Encontre falsa segurança baseada apenas em guard e teste acoplado a private.', miniProject: 'Finalize e documente o painel administrativo.' }
};
