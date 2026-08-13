import { academyEnvironment, browserEnvironment, tsLabEnvironment } from './environments.js';
export const typescriptLessons = {
    web: {
        centralQuestion: 'O que acontece entre digitar uma URL e ver uma página?', prerequisites: ['Saber abrir um navegador'],
        learningGoals: ['Reconhecer cliente, servidor, request e response', 'Inspecionar Method, Status e Response no Network'],
        misconceptions: ['A internet e a web são exatamente a mesma coisa', 'HTML, CSS e JavaScript chegam sempre em uma única resposta'], skills: ['DevTools', 'HTTP básico'],
        environment: browserEnvironment('Uma requisição selecionada com método, status e corpo de resposta identificados.'),
        sections: [
            { kind: 'diagram', title: 'A viagem de uma URL', body: 'DNS ajuda a localizar o servidor; HTTP organiza a conversa. O navegador pede recursos e monta a tela.', items: ['Usuário digita a URL', 'Navegador consulta o endereço', 'Navegador envia request', 'Servidor devolve response', 'Navegador interpreta HTML, CSS e JavaScript'] },
            { kind: 'timeline', title: 'Uma página raramente é uma única requisição', items: ['document: HTML', 'stylesheet: aparência', 'script: comportamento', 'fetch/XHR: dados posteriores'] },
            { kind: 'lab', title: 'Expedição pela aba Network', steps: ['Abra DevTools → Network.', 'Atualize a página.', 'Escolha o request do tipo document.', 'Anote Request Method e Status Code.', 'Abra Response e identifique o HTML recebido.'] },
            { kind: 'prediction', title: 'Prediga antes de recarregar', prompt: 'Ao desativar o cache e atualizar, você espera ver mais, menos ou a mesma quantidade de transferências?', answer: 'Em geral, mais recursos são transferidos novamente porque o navegador deixa de reutilizar cópias armazenadas.', explanation: 'A quantidade exata depende dos cabeçalhos de cache do site.' }
        ], checklist: ['Consigo narrar request e response', 'Localizo Status e Method', 'Distingo HTML, CSS e JavaScript na rede'], resources: [{ title: 'MDN — Visão geral do HTTP', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview', source: 'MDN' }], connection: 'Na próxima aula, você prepara as ferramentas que criarão e verificarão esses recursos.'
    },
    setup: {
        centralQuestion: 'Quais ferramentas transformam uma pasta de arquivos em um projeto reproduzível?', prerequisites: ['Saber criar uma pasta'],
        learningGoals: ['Diferenciar editor, terminal, runtime e gerenciador de pacotes', 'Ler scripts de package.json', 'Verificar Node, npm e Git'],
        misconceptions: ['npm é uma linguagem', 'node_modules deve ser editado manualmente'], skills: ['terminal', 'VS Code', 'npm', 'Git'],
        environment: academyEnvironment(['package.json', 'tsconfig.json', 'README.md'], 'A Academy abre em localhost:4173 e os três comandos de versão retornam valores.'),
        sections: [
            { kind: 'comparison', title: 'Cada ferramenta tem um trabalho', items: ['VS Code → editar e navegar', 'Terminal → executar comandos', 'Node.js → executar JavaScript fora do navegador', 'npm → instalar pacotes e executar scripts', 'Git → registrar versões'] },
            { kind: 'lab', title: 'Diagnóstico da estação', code: 'node --version\nnpm --version\ngit --version', language: 'bash', steps: ['Execute uma linha por vez.', 'Anote cada versão.', 'Abra package.json e associe npm run build ao script build.', 'Execute npm run build e leia a saída.'] },
            { kind: 'debugging', title: 'Comando não reconhecido', prompt: 'node --version retorna “node não é reconhecido”. O problema está no código do site?', solution: 'Não. Instale Node.js LTS, feche e reabra o terminal para atualizar PATH e repita o comando.', explanation: 'O terminal nem chegou a executar o projeto.' }
        ], checklist: ['Sei abrir terminal integrado', 'Sei explicar package.json', 'Não edito node_modules ou dist'], resources: [{ title: 'TypeScript — instalação e ferramentas', url: 'https://www.typescriptlang.org/download/', source: 'TypeScript' }], connection: 'Com o ambiente verificado, o curso inicia o TypeScript Lab separado da Academy.'
    },
    'ts-intro': {
        centralQuestion: 'Que erro a tipagem consegue impedir antes de o programa executar?', prerequisites: ['Variáveis JavaScript', 'Terminal básico'],
        learningGoals: ['Entender type checking', 'Usar tsc sem emitir arquivos', 'Distinguir TypeScript fonte de JavaScript gerado'],
        misconceptions: ['O navegador executa TypeScript diretamente', 'TypeScript altera o comportamento do JavaScript em runtime'], skills: ['tsc', 'anotação de tipo'],
        environment: tsLabEnvironment('src/01-javascript-vs-typescript.ts', 'O compilador rejeita a atribuição de texto a number; após corrigir, não há erros.'),
        sections: [
            { kind: 'comparison', title: 'JavaScript executa; TypeScript verifica', items: ['JavaScript: o erro pode aparecer somente durante a execução', 'TypeScript: o editor e tsc analisam tipos antes da execução', 'tsc: remove tipos e produz JavaScript'] },
            { kind: 'prediction', title: 'Qual linha o compilador recusará?', code: "let total: number = 120;\ntotal = 'cento e vinte';\nconsole.log(total);", language: 'ts', prompt: 'O console chega a ser necessário para descobrir o problema?', answer: 'Não. tsc aponta que string não pode ser atribuída a number antes da execução.' },
            { kind: 'debugging', title: 'Corrija sem usar any', prompt: 'Faça total continuar numérico e represente a descrição em outra variável.', solution: "let total = 120;\nconst descricao = 'cento e vinte';", explanation: 'Separar grandezas preserva o contrato; any apenas desligaria a verificação.' }
        ], checklist: ['Explico o papel de tsc', 'Distingo fonte .ts de saída .js', 'Não uso any para esconder o erro'], resources: [{ title: 'TypeScript — The Basics', url: 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html', source: 'TypeScript' }], connection: 'Agora que a verificação está visível, a próxima aula amplia o vocabulário de tipos.'
    },
    types: {
        centralQuestion: 'Como representar dados simples, coleções e estruturas sem perder seu significado?', prerequisites: ['Type checking', 'let e const'],
        learningGoals: ['Classificar primitivos, arrays, tuplas e objetos', 'Modelar uma música sem interface', 'Reconhecer null e undefined'],
        misconceptions: ['number distingue inteiro de decimal', 'Uma tupla é igual a qualquer array'], skills: ['modelagem de dados', 'inferência'],
        environment: tsLabEnvironment('src/02-tipos.ts', 'A música possui título, duração, disponibilidade e gêneros com tipos coerentes.'),
        sections: [
            { kind: 'comparison', title: 'Três famílias', items: ['Primitivos → string, number, boolean, null, undefined', 'Coleções → string[], number[], tuple', 'Estruturas → objetos com propriedades'] },
            { kind: 'code', title: 'Exemplo resolvido: dados de uma música', code: "const musica = {\n  titulo: 'Horizonte',\n  duracaoSegundos: 214,\n  publicada: true,\n  generos: ['indie', 'pop'],\n};", language: 'ts', explanation: 'Cada valor comunica uma dimensão diferente; não foi necessário criar interface ainda.' },
            { kind: 'prediction', title: 'Classifique antes de testar', prompt: 'Qual tipo você escolheria para coordenadas fixas [latitude, longitude]?', answer: 'Uma tupla [number, number], pois posição e quantidade de elementos têm significado fixo.' },
            { kind: 'practice', title: 'Modele um livro', prompt: 'Crie um objeto com título, páginas, disponível, autores e edição opcional. Depois tente trocar páginas por texto.', solution: "const livro: { titulo: string; paginas: number; disponivel: boolean; autores: string[]; edicao?: number } = {\n  titulo: 'Código Limpo', paginas: 464, disponivel: true, autores: ['Robert C. Martin']\n};", explanation: 'A propriedade opcional usa ?, enquanto páginas continua obrigatoriamente numérica.' }
        ], checklist: ['Classifico um valor em sua família', 'Sei quando uma tupla ajuda', 'Modelo um objeto sem confundi-lo com interface'], resources: [{ title: 'TypeScript — Everyday Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html', source: 'TypeScript' }], connection: 'Funções usarão esses tipos para declarar entradas e saídas.'
    },
    functions: {
        centralQuestion: 'Como tornar explícito o que entra, o que acontece e o que sai de uma operação?', prerequisites: ['Tipos primitivos', 'Operadores'],
        learningGoals: ['Distinguir parâmetro de argumento', 'Declarar retorno, void, opcional e padrão', 'Ler arrow functions'],
        misconceptions: ['console.log equivale a return', 'Parâmetro opcional pode vir antes de um obrigatório'], skills: ['funções tipadas', 'fading'],
        environment: tsLabEnvironment('src/03-funcoes.ts', 'Os testes manuais imprimem 20, 15 e o desconto calculado.'),
        sections: [
            { kind: 'diagram', title: 'Entrada → transformação → saída', items: ['argumentos 10 e 2', 'parâmetros preco e quantidade', 'corpo multiplica', 'return entrega 20'] },
            { kind: 'code', title: 'Etapa A — exemplo resolvido', code: 'function dobro(numero: number): number {\n  return numero * 2;\n}', language: 'ts', explanation: 'numero é parâmetro; 4 em dobro(4) seria argumento; o segundo number é o retorno.' },
            { kind: 'practice', title: 'Etapa B — complete o triplo', code: 'function triplo(numero: number): number {\n  return ______;\n}', language: 'ts', solution: 'return numero * 3;', explanation: 'return entrega o valor; console.log apenas o exibe.' },
            { kind: 'practice', title: 'Etapas C e D — reduza a ajuda', prompt: 'Com a dica “base × base”, crie quadrado(). Depois, sem modelo, crie calcularDesconto(valor, percentual = 10).', solution: 'function quadrado(base: number) { return base * base; }\nfunction calcularDesconto(valor: number, percentual = 10) { return valor * (1 - percentual / 100); }', explanation: 'O valor padrão torna o segundo argumento dispensável sem transformar o resultado em void.' }
        ], checklist: ['Diferencio parâmetro e argumento', 'Sei quando usar void', 'Não confundo log com retorno', 'Escrevo função com valor padrão'], resources: [{ title: 'TypeScript — More on Functions', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html', source: 'TypeScript' }], connection: 'Unions limitarão quais argumentos algumas funções podem aceitar.'
    },
    unions: {
        centralQuestion: 'Como representar um conjunto limitado de estados válidos?', prerequisites: ['Tipos', 'Funções'],
        learningGoals: ['Criar union literal e alias', 'Comparar string livre, union e enum', 'Modelar status de pedido'],
        misconceptions: ['Union significa aceitar qualquer valor', 'Enum é sempre a melhor opção'], skills: ['domínio fechado', 'type alias'],
        environment: tsLabEnvironment('src/04-unions.ts', 'O status inválido é recusado e os três estados permitidos são aceitos.'),
        sections: [
            { kind: 'comparison', title: 'string livre x domínio fechado', code: "let fraco: string = 'qualquer-coisa';\ntype StatusPedido = 'pendente' | 'pago' | 'cancelado';\nlet seguro: StatusPedido = 'pendente';", language: 'ts', items: ['string livre aceita erro de digitação', 'union oferece autocomplete e rejeita estados desconhecidos', 'enum gera valor em JavaScript; union literal pode existir só no tipo'] },
            { kind: 'debugging', title: 'Encontre o estado impossível', code: "type StatusPedido = 'pendente' | 'pago' | 'cancelado';\nconst status: StatusPedido = 'enviado';", language: 'ts', prompt: 'O domínio permite enviado?', solution: "Adicione 'enviado' ao tipo somente se for uma regra real; caso contrário use um dos três estados.", explanation: 'O erro protege o vocabulário do negócio.' },
            { kind: 'practice', title: 'Projete transições', prompt: 'Escreva podeCancelar(status): só pendente pode ser cancelado.', solution: "function podeCancelar(status: StatusPedido): boolean { return status === 'pendente'; }", explanation: 'A função recebe apenas estados válidos; a regra decide qual deles permite a ação.' }
        ], checklist: ['Explico por que string é ampla demais', 'Crio union literal', 'Escolho conscientemente entre union e enum'], resources: [{ title: 'TypeScript — Literal Types e Unions', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types', source: 'TypeScript' }], connection: 'Interfaces usarão esses aliases dentro de contratos maiores.'
    },
    interfaces: {
        centralQuestion: 'Como garantir que valores vindos de lugares diferentes respeitem o mesmo formato?', prerequisites: ['Objetos', 'Unions', 'Funções'],
        learningGoals: ['Declarar optional, readonly e extends', 'Distinguir objeto de interface', 'Comparar type e interface'],
        misconceptions: ['Interface cria um objeto em runtime', 'readonly congela profundamente o objeto'], skills: ['contratos', 'modelagem de API'],
        environment: tsLabEnvironment('src/05-interfaces.ts', 'Respostas de API compatíveis passam; objetos sem campos obrigatórios falham.'),
        sections: [
            { kind: 'retrieval', title: 'Lembre sem olhar', prompt: 'Na aula anterior, como limitamos um status a três textos?', answer: 'Com uma union literal nomeada por um type alias.' },
            { kind: 'code', title: 'Contrato para uma resposta de API', code: "interface Entidade { readonly id: number; }\ninterface Usuario extends Entidade {\n  nome: string;\n  avatarUrl?: string;\n}\nconst resposta: Usuario = { id: 7, nome: 'Lia' };", language: 'ts', explanation: 'A interface descreve a forma esperada; resposta é o objeto concreto.' },
            { kind: 'comparison', title: 'type x interface', items: ['Ambos nomeiam formatos de objeto', 'interface pode ser estendida e reaberta', 'type também representa unions, tuplas e tipos calculados', 'Escolha consistência; não existe vencedor universal'] },
            { kind: 'debugging', title: 'Resposta incompleta', code: 'const usuario: Usuario = { id: 7 };', language: 'ts', prompt: 'Qual contrato não foi cumprido?', solution: "const usuario: Usuario = { id: 7, nome: 'Lia' };", explanation: 'nome é obrigatório; avatarUrl não é.' }
        ], checklist: ['Diferencio valor e contrato', 'Uso ? e readonly com intenção', 'Sei quando extends conecta contratos'], resources: [{ title: 'TypeScript — Object Types', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html', source: 'TypeScript' }], connection: 'Classes também criam tipos, mas acrescentam instâncias e comportamento em runtime.'
    },
    classes: {
        centralQuestion: 'Quando estado e comportamento pertencem à mesma entidade?', prerequisites: ['Interfaces', 'Funções', 'Objetos'],
        learningGoals: ['Criar instâncias com new', 'Aplicar encapsulamento', 'Reconhecer herança e membros static'],
        misconceptions: ['Classe é apenas uma interface com constructor', 'private é proteção de segurança contra ataques'], skills: ['OOP', 'encapsulamento'],
        environment: tsLabEnvironment('src/06-classes.ts', 'Uma conta deposita e saca sem permitir alteração direta do saldo.'),
        sections: [
            { kind: 'comparison', title: 'Interface x classe', items: ['interface: contrato removido na compilação', 'class: valor em runtime capaz de criar instâncias', 'interface descreve; classe também executa comportamento'] },
            { kind: 'code', title: 'Conta com saldo protegido', code: "class Conta {\n  static banco = 'Academy Bank';\n  constructor(public titular: string, private saldo = 0) {}\n  depositar(valor: number): void { if (valor > 0) this.saldo += valor; }\n  get saldoAtual(): number { return this.saldo; }\n}\nconst conta = new Conta('Ana');", language: 'ts', explanation: 'new cria a instância; private concentra a alteração; getter oferece leitura controlada; static pertence à classe.' },
            { kind: 'debugging', title: 'Quebre o encapsulamento — e repare', prompt: 'Tente conta.saldo = -500. Por que falha e onde a regra correta deve ficar?', solution: 'Falha porque saldo é private. Crie métodos como depositar e sacar que validem valores antes de alterar o estado.', explanation: 'Encapsular reduz estados inválidos; não substitui segurança no servidor.' },
            { kind: 'deep-dive', title: 'Herança com parcimônia', body: 'ContaPremium extends Conta só faz sentido se preservar o contrato da classe base. Muitas aplicações preferem composição quando comportamentos variam independentemente.' }
        ], checklist: ['Distingo classe e instância', 'Uso private para proteger invariantes', 'Sei a diferença entre membro de instância e static'], resources: [{ title: 'TypeScript — Classes', url: 'https://www.typescriptlang.org/docs/handbook/2/classes.html', source: 'TypeScript' }], connection: 'Narrowing permitirá trabalhar com valores que podem assumir mais de uma forma.'
    },
    narrowing: {
        centralQuestion: 'Como provar ao TypeScript qual possibilidade existe em cada ramo do código?', prerequisites: ['Unions', 'Classes', 'Interfaces'],
        learningGoals: ['Usar typeof, in e instanceof', 'Escrever type guard customizado', 'Entender análise de fluxo'],
        misconceptions: ['Type assertion valida dados em runtime', 'typeof null retorna null'], skills: ['type guards', 'controle de fluxo'],
        environment: tsLabEnvironment('src/07-narrowing.ts', 'Cada formato é tratado somente depois de uma verificação válida.'),
        sections: [
            { kind: 'debugging', title: 'O método ainda não é seguro', code: "function formatar(valor: string | number) {\n  return valor.toUpperCase();\n}", language: 'ts', prompt: 'Por que o método pode não existir?', solution: "if (typeof valor === 'string') return valor.toUpperCase();\nreturn valor.toFixed(2);", explanation: 'O guard reduz a union em cada ramo.' },
            { kind: 'comparison', title: 'Quatro provas diferentes', items: ['typeof → primitivos', 'in → propriedade presente', 'instanceof → cadeia de protótipos', 'predicado valor is Tipo → regra reutilizável'] },
            { kind: 'practice', title: 'Guarda para resposta desconhecida', prompt: 'Crie ehUsuario(valor: unknown): valor is Usuario verificando objeto não nulo e propriedade nome.', solution: "function ehUsuario(valor: unknown): valor is Usuario {\n  return typeof valor === 'object' && valor !== null && 'nome' in valor;\n}", explanation: 'unknown obriga a prova; uma assertion apenas mandaria o compilador confiar.' },
            { kind: 'prediction', title: 'Armadilha histórica', prompt: 'O que typeof null devolve?', answer: '"object". Por isso uma guarda de objeto costuma verificar valor !== null.' }
        ], checklist: ['Escolho o guard adequado', 'Não substituo validação por assertion', 'Lembro da exceção de null'], resources: [{ title: 'TypeScript — Narrowing', url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html', source: 'TypeScript' }], connection: 'Generics preservarão relações entre tipos sem precisar escolher uma union enorme.'
    },
    generics: {
        centralQuestion: 'Como reutilizar uma operação preservando a relação entre entrada e saída?', prerequisites: ['Funções', 'Interfaces', 'Arrays'],
        learningGoals: ['Entender T como parâmetro de tipo', 'Criar função e interface genéricas', 'Aplicar constraints quando a operação exige capacidades'],
        misconceptions: ['Generic significa any', 'Toda função precisa de um parâmetro de tipo'], skills: ['reutilização tipada', 'constraints'],
        environment: tsLabEnvironment('src/08-generics.ts', 'primeiro mantém string como string e number como number; a constraint rejeita valores sem id.'),
        sections: [
            { kind: 'comparison', title: 'A duplicação revela o problema', code: 'function primeiroNumero(lista: number[]): number { return lista[0]; }\nfunction primeiroTexto(lista: string[]): string { return lista[0]; }', language: 'ts', items: ['A regra é idêntica', 'any perderia a relação', 'T representa o tipo escolhido em cada chamada'] },
            { kind: 'code', title: 'Uma regra, tipos preservados', code: 'function primeiro<T>(lista: T[]): T | undefined {\n  return lista[0];\n}\nconst nome = primeiro(["Ana", "Bia"]);\nconst nota = primeiro([8, 9]);', language: 'ts', explanation: 'O retorno inclui undefined porque a lista pode estar vazia.' },
            { kind: 'practice', title: 'Constraint necessária', prompt: 'Crie localizarPorId<T extends { id: number }>(itens, id).', solution: 'function localizarPorId<T extends { id: number }>(itens: T[], id: number): T | undefined {\n  return itens.find(item => item.id === id);\n}', explanation: 'A constraint garante a propriedade usada sem restringir os demais campos.' },
            { kind: 'debugging', title: 'Generic decorativo', code: 'function tamanho<T>(valor: T) { return valor.length; }', language: 'ts', prompt: 'Por que T não garante length?', solution: 'function tamanho<T extends { length: number }>(valor: T) { return valor.length; }', explanation: 'Um tipo arbitrário poderia ser number.' }
        ], checklist: ['Explico a relação entrada-saída', 'Não troco generic por any', 'Adiciono constraint só quando necessária'], resources: [{ title: 'TypeScript — Generics', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html', source: 'TypeScript' }], connection: 'Tipos avançados derivarão contratos novos a partir dos que já existem.'
    },
    'advanced-types': {
        centralQuestion: 'Como criar tipos novos a partir de contratos existentes sem duplicá-los?', prerequisites: ['Interfaces', 'Generics', 'keyof básico'],
        learningGoals: ['Derivar tipos com keyof, typeof e indexed access', 'Usar utility e mapped types', 'Ler um conditional type simples'],
        misconceptions: ['Partial valida quais campos podem ser atualizados em runtime', 'Pick copia valores'], skills: ['type transformations', 'utility types'],
        environment: tsLabEnvironment('src/09-tipos-derivados.ts', 'Os contratos de leitura, criação e atualização permanecem sincronizados com Usuario.'),
        sections: [
            { kind: 'diagram', title: 'Uma fonte, várias projeções', items: ['Usuario → Pick → UsuarioPublico', 'Usuario → Omit → CriarUsuario', 'Usuario → Partial → AtualizacaoUsuario', 'union de chaves → Record → permissões'] },
            { kind: 'code', title: 'Derive em vez de copiar', code: "interface Usuario { id: number; nome: string; email: string; senhaHash: string; }\ntype UsuarioPublico = Omit<Usuario, 'senhaHash'>;\ntype AtualizacaoUsuario = Partial<Pick<Usuario, 'nome' | 'email'>>;\ntype Campo = keyof Usuario;", language: 'ts', explanation: 'Mudanças em Usuario propagam para tipos derivados conforme cada transformação.' },
            { kind: 'practice', title: 'Mapa de permissões', prompt: "Crie Permissoes com Record para as ações 'ler' | 'editar' | 'excluir'.", solution: "type Acao = 'ler' | 'editar' | 'excluir';\ntype Permissoes = Record<Acao, boolean>;", explanation: 'Record exige uma decisão para cada chave da union.' },
            { kind: 'deep-dive', title: 'Condicional sem bloquear a aula', code: 'type Elemento<T> = T extends (infer Item)[] ? Item : T;', language: 'ts', body: 'Leia como uma pergunta: se T for array, extraia Item; senão preserve T. Mapped e conditional types são úteis em bibliotecas, mas não precisam dominar modelos simples.' }
        ], checklist: ['Derivo tipos de uma fonte única', 'Escolho Pick, Omit, Partial ou Record pelo problema', 'Sei que tipos não validam JSON em runtime'], resources: [{ title: 'TypeScript — Utility Types', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html', source: 'TypeScript' }, { title: 'TypeScript — Creating Types from Types', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html', source: 'TypeScript' }], connection: 'Assincronismo mostrará quando esses contratos descrevem dados que chegam depois.'
    },
    async: {
        centralQuestion: 'Como representar uma operação cujo resultado chegará no futuro e pode falhar?', prerequisites: ['Funções', 'Interfaces', 'try/catch'],
        learningGoals: ['Ler uma Promise na linha do tempo', 'Usar async/await', 'Tratar falhas sem esconder o erro'],
        misconceptions: ['await bloqueia todo o navegador', 'try/catch transforma qualquer falha em sucesso'], skills: ['Promises', 'fetch', 'tratamento de erro'],
        environment: tsLabEnvironment('src/10-assincrono.ts', 'A sequência mostra início antes da resposta e apresenta sucesso ou mensagem de falha.'),
        sections: [
            { kind: 'timeline', title: 'A resposta chega depois', items: ['chamada inicia', 'Promise fica pendente', 'outras tarefas continuam', 'Promise resolve ou rejeita', 'await libera o valor dentro da função async'] },
            { kind: 'prediction', title: 'Ordem do console', code: "console.log('A');\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');", language: 'ts', prompt: 'Qual é a ordem?', answer: 'A, C, B. O callback da Promise roda depois da pilha síncrona atual.' },
            { kind: 'code', title: 'Fetch com falha explícita', code: "async function buscarUsuario(id: number): Promise<Usuario> {\n  const resposta = await fetch(`https://api.exemplo.dev/usuarios/${id}`);\n  if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);\n  return resposta.json() as Promise<Usuario>;\n}", language: 'ts', explanation: 'fetch não rejeita automaticamente todo status HTTP; resposta.ok torna a regra visível.' },
            { kind: 'debugging', title: 'Catch silencioso', prompt: 'Por que catch {} dificulta suporte?', solution: 'Registre contexto ou converta a falha em mensagem útil, preservando o erro quando outra camada precisar tratá-lo.', explanation: 'Engolir a falha faz o programa parecer parado sem explicar a causa.' }
        ], checklist: ['Explico estados de Promise', 'Sei que await vive em função async', 'Verifico resposta.ok', 'Trato erro com contexto'], resources: [{ title: 'MDN — Usando Promises', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises', source: 'MDN' }, { title: 'MDN — Fetch API', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch', source: 'MDN' }], connection: 'O projeto de tarefas combinará modelagem, funções, filtros e persistência.'
    },
    'todo-project': {
        centralQuestion: 'Como transformar conceitos isolados em um programa tipado que mantém estado?', prerequisites: ['Interfaces', 'Arrays', 'Funções', 'Unions'],
        learningGoals: ['Entregar tarefas por milestones', 'Separar modelo, operações e persistência', 'Verificar comportamento observável'],
        misconceptions: ['Projeto significa copiar uma solução inteira', 'localStorage aceita objetos diretamente'], skills: ['integração', 'refatoração', 'persistência'],
        environment: tsLabEnvironment('src/projeto-tarefas.ts', 'Adicionar, concluir, filtrar e recarregar tarefas produz resultados verificáveis no console.'),
        sections: [
            { kind: 'milestones', title: 'Construção em seis entregas', items: ['1. Modelo: id, titulo, status', '2. Coleção: Tarefa[]', '3. adicionar(titulo)', '4. concluir(id)', '5. filtrar(status)', '6. persistir e carregar JSON'] },
            { kind: 'code', title: 'Contrato inicial — só o ponto de partida', code: "type StatusTarefa = 'pendente' | 'concluida';\ninterface Tarefa { readonly id: number; titulo: string; status: StatusTarefa; }\nconst tarefas: Tarefa[] = [];", language: 'ts', explanation: 'As funções serão escritas por você; o contrato impede estados fora do domínio.' },
            { kind: 'practice', title: 'Teste funcional manual', prompt: 'Adicione duas tarefas, conclua apenas a primeira e imprima o filtro de pendentes.', solution: 'O resultado deve conter somente a segunda tarefa. Se ambas aparecerem, revise concluir ou filtrar.', explanation: 'O teste descreve comportamento, não detalhes internos.' },
            { kind: 'debugging', title: 'Persistência quebrada', code: 'localStorage.setItem("tarefas", tarefas);', language: 'ts', prompt: 'Por que o tipo e o navegador recusam?', solution: 'localStorage.setItem("tarefas", JSON.stringify(tarefas));', explanation: 'Storage armazena texto; JSON.parse reconstrói os dados na leitura.' }
        ], checklist: ['Modelo criado', 'Adicionar funciona', 'Concluir altera só o alvo', 'Filtro retorna o subconjunto correto', 'Persistência sobrevive ao recarregamento'], resources: [{ title: 'MDN — Window.localStorage', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage', source: 'MDN' }, { title: 'TypeScript — Modules', url: 'https://www.typescriptlang.org/docs/handbook/2/modules.html', source: 'TypeScript' }], connection: 'O mesmo raciocínio de dividir responsabilidades será levado ao catálogo do Angular Lab.'
    }
};
