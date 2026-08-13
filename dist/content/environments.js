export const browserEnvironment = (expected) => ({
    id: 'browser', label: 'Apenas navegador / DevTools',
    purpose: 'Investigar a web sem alterar o código da Academy.',
    preparation: ['Abra Chrome, Edge ou Firefox.', 'Abra uma página pública e pressione F12.', 'Selecione a aba Network antes de atualizar a página.'],
    test: 'Atualize a página, selecione uma requisição e confira Method, Status e Response.', expected,
    troubleshooting: ['Network vazio: confirme que a gravação está ativa e atualize a página.', 'Painel fechado: use F12 ou Ctrl+Shift+I.'],
    continuation: 'Mantenha o DevTools aberto para comparar novas requisições.', undo: 'Nenhum arquivo foi alterado; basta fechar o DevTools.'
});
export const academyEnvironment = (files, expected) => ({
    id: 'academy', label: 'Repositório da Academy', purpose: 'Examinar ou melhorar a própria plataforma HTML + CSS + TypeScript.',
    preparation: ['Abra ou clone Estudo-Angular.', 'Abra a pasta no VS Code.', 'Abra Terminal → New Terminal.'],
    commands: 'npm install\nnpm run build\nnpm run dev', files,
    test: 'Salve, atualize http://localhost:4173 e execute npm test.', expected,
    troubleshooting: ['Não edite dist/: ele é gerado pelo build.', 'Se uma dependência faltar, execute npm install novamente.'],
    continuation: 'Faça uma mudança pequena por vez e valide antes da próxima.', undo: 'Use Ctrl+Z ou restaure somente o trecho editado; execute npm run build novamente.'
});
export const tsLabEnvironment = (file, expected) => ({
    id: 'typescript-lab', label: 'TypeScript Lab', purpose: 'Evoluir o laboratório contínuo de TypeScript, separado da Academy.',
    preparation: ['Crie uma pasta meus-estudos e, dentro dela, typescript-lab.', 'Abra typescript-lab no VS Code.', 'Confirme Node.js LTS com node --version.'],
    commands: 'npm init -y\nnpm install --save-dev typescript\nnpx tsc --init\n# crie a pasta src na primeira aula\nnpx tsc --noEmit', files: [file],
    test: 'Salve e execute npx tsc --noEmit. Quando houver console.log, compile com npx tsc e execute o JavaScript gerado conforme o outDir do tsconfig.', expected,
    troubleshooting: ['Arquivo não existe: crie-o dentro de src com o nome indicado.', 'Erro em outra aula: execute npx tsc --noEmit apontando para o arquivo atual ou corrija o exercício anterior.'],
    continuation: 'Guarde o arquivo: as próximas aulas reutilizam tipos e funções deste laboratório.', undo: 'Use Ctrl+Z ou remova somente o arquivo desta atividade; não apague o laboratório inteiro.'
});
export const angularLabEnvironment = (files, commands, expected) => ({
    id: 'angular-lab', label: 'Angular Lab — projeto separado', purpose: 'Evoluir o mesmo projeto Angular moderno ao longo do curso; nunca execute Angular CLI dentro da Academy.',
    preparation: ['Use Node.js compatível com a versão atual do Angular e instale Angular Language Service no VS Code.', 'Na primeira atividade prática Angular, crie angular-lab fora de Estudo-Angular.', 'Nas aulas seguintes, abra a pasta angular-lab já criada.'],
    commands, files,
    test: 'Salve, mantenha npm start em execução e abra http://localhost:4200. Verifique o terminal e o Console do navegador.', expected,
    troubleshooting: ['ng não reconhecido: execute npm install -g @angular/cli e reabra o terminal.', 'Nome de arquivo diferente: a CLI atual usa o estilo 2025, como perfil-card.ts; confirme o caminho no Explorer.', 'Tela vazia: confira imports do componente standalone e a rota ativa.'],
    continuation: 'Faça commit ou anote o estado funcional: a próxima aula parte deste mesmo angular-lab.', undo: 'Use Ctrl+Z ou reverta apenas os arquivos desta aula; pare o servidor com Ctrl+C.'
});
