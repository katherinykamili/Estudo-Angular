import { lessons, modules } from './data.js';
import { courseContent, moduleReviews } from './content/index.js';
const app = document.querySelector('#app');
if (!app)
    throw new Error('Elemento da aplicação não encontrado.');
const root = app;
const storageKey = 'academy-progress-v1';
const checklistKey = 'academy-checklists-v1';
let completed = new Set(read(storageKey, []));
let checks = read(checklistKey, {});
let current = location.hash.replace('#', '') || 'home';
function read(key, fallback) { try {
    return JSON.parse(localStorage.getItem(key) ?? '');
}
catch {
    return fallback;
} }
function save() { localStorage.setItem(storageKey, JSON.stringify([...completed])); localStorage.setItem(checklistKey, JSON.stringify(checks)); }
function percent() { return Math.round((completed.size / lessons.length) * 100); }
function esc(value) { const node = document.createElement('span'); node.textContent = value; return node.innerHTML; }
function sidebar() {
    const groups = modules.map((module) => {
        const entries = lessons.filter((item) => item.module === module.id);
        return `<div class="nav-label">${module.id.toString().padStart(2, '0')} · ${esc(module.title)}</div>${entries.map((item) => `<button class="nav-item ${current === item.id ? 'active' : ''}" data-go="${item.id}"><span class="num">${item.project ? '◆' : item.id.slice(0, 2).toUpperCase()}</span><span>${esc(item.title)}</span>${completed.has(item.id) ? '<span class="done">✓</span>' : ''}</button>`).join('')}`;
    }).join('');
    return `<aside class="sidebar" id="sidebar"><div class="brand"><span class="brand-mark">Academy</span><h1>Angular <span>&</span><br>TypeScript</h1><p>Experiências conectadas, sem conteúdo genérico</p></div><button class="nav-item ${current === 'home' ? 'active' : ''}" data-go="home"><span class="num">⌂</span><span>Início</span></button>${groups}<div class="sidebar-progress"><strong>${percent()}% concluído</strong><div class="bar"><span style="width:${percent()}%"></span></div><span>${completed.size} de ${lessons.length} aulas</span></div></aside>`;
}
function topbar() { return `<header class="topbar"><button class="menu" id="menu" aria-label="Abrir navegação">☰</button><div class="search"><input id="search" type="search" aria-label="Buscar conteúdo" placeholder="Buscar pergunta, habilidade ou aula..." autocomplete="off"><div class="search-results" id="results" hidden></div></div><div class="top-progress">Seu progresso: ${percent()}%</div></header>`; }
function home() {
    const next = lessons.find((item) => !completed.has(item.id)) ?? lessons[0];
    return `<main class="page" id="main-content"><section class="hero"><span class="eyebrow">Aprenda construindo</span><h2>Angular + TypeScript,<br>com propósito em cada aula.</h2><p>Do Network do navegador ao painel Angular: perguntas centrais, laboratórios contínuos, debugging, previsão, projetos incrementais e revisões de módulo.</p><div class="actions"><button class="btn" data-go="${next.id}">${completed.size ? 'Continuar estudando' : 'Começar do zero'} →</button><button class="btn secondary" data-scroll="trail">Ver trilha completa</button></div></section><section class="stats" aria-label="Resumo do curso"><div class="stat"><strong>${modules.length}</strong><span>módulos conectados</span></div><div class="stat"><strong>${lessons.length}</strong><span>experiências próprias</span></div><div class="stat"><strong>2</strong><span>laboratórios contínuos</span></div><div class="stat"><strong>11</strong><span>revisões de módulo</span></div></section><section class="section environment-explainer"><h2>Dois projetos, papéis diferentes</h2><div class="environment-grid"><div><strong>Academy</strong><p>Este repositório é HTML + CSS + TypeScript e apresenta o curso.</p></div><div><strong>TypeScript Lab</strong><p>Pasta separada para exercícios progressivos de TypeScript.</p></div><div><strong>Angular Lab</strong><p>Projeto Angular CLI separado, criado uma vez e evoluído até o projeto final.</p></div></div></section><section class="section" id="trail"><h2 class="section-title">Trilha completa</h2><div class="grid">${modules.map((module) => { const first = lessons.find((l) => l.module === module.id); const count = lessons.filter((l) => l.module === module.id).length; return `<article class="card module-card ${module.color}"><span class="meta">Módulo ${module.id.toString().padStart(2, '0')} · ${count} aula${count > 1 ? 's' : ''}</span><h3>${esc(module.title)}</h3><p>${first ? esc(courseContent[first.id].centralQuestion) : ''}</p><button class="link" data-go="${first?.id}">Explorar módulo →</button></article>`; }).join('')}</div></section></main>`;
}
function codeBlock(code, language = 'texto') { return `<div class="code"><header><span>${esc(language)}</span><button data-copy="${encodeURIComponent(code)}">Copiar código</button></header><pre><code>${esc(code)}</code></pre></div>`; }
const labels = {
    concept: 'Conceito', diagram: 'Mapa visual', timeline: 'Linha do tempo', comparison: 'Comparação', code: 'Exemplo resolvido', prediction: 'Prediga antes de executar', debugging: 'Encontre e corrija', lab: 'Laboratório', practice: 'Prática', milestones: 'Projeto incremental', retrieval: 'Lembre sem olhar', reflection: 'Reflexão', 'deep-dive': 'Aprofundamento opcional'
};
function sectionMarkup(section, index) {
    const answer = section.answer ?? section.solution;
    return `<section class="learning-section kind-${section.kind}" data-section="${index}"><span class="eyebrow">${labels[section.kind]}</span><h3>${esc(section.title)}</h3>${section.body ? `<p>${esc(section.body)}</p>` : ''}${section.code ? codeBlock(section.code, section.language ?? 'TypeScript') : ''}${section.items ? `<ul>${section.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}${section.steps ? `<ol>${section.steps.map((step) => `<li>${esc(step)}</li>`).join('')}</ol>` : ''}${section.prompt ? `<div class="prompt"><strong>Pergunta ou tarefa</strong><p>${esc(section.prompt)}</p></div>` : ''}${answer ? `<details class="answer"><summary>${section.kind === 'retrieval' || section.kind === 'prediction' ? 'Mostrar resposta' : 'Ver solução explicada'}</summary>${section.answer ? `<p>${esc(section.answer)}</p>` : section.solution ? codeBlock(section.solution, section.language ?? 'TypeScript') : ''}${section.explanation ? `<p><strong>Por que funciona:</strong> ${esc(section.explanation)}</p>` : ''}</details>` : section.explanation ? `<p class="explanation">${esc(section.explanation)}</p>` : ''}</section>`;
}
function environmentMarkup(environment) {
    return `<section class="environment-card environment-${environment.id}"><span class="environment-label">📍 Ambiente desta atividade</span><h3>${esc(environment.label)}</h3><p>${esc(environment.purpose)}</p><h4>Preparação inicial</h4><ol>${environment.preparation.map((step) => `<li>${esc(step)}</li>`).join('')}</ol>${environment.commands ? `<h4>Comandos</h4>${codeBlock(environment.commands, 'Terminal')}` : ''}${environment.files?.length ? `<h4>Arquivos reais a abrir</h4><ul class="file-list">${environment.files.map((file) => `<li><code>${esc(file)}</code></li>`).join('')}</ul>` : ''}<div class="environment-test"><h4>Como testar</h4><p>${esc(environment.test)}</p><h4>Resultado esperado</h4><p>${esc(environment.expected)}</p></div><details><summary>Erros comuns e como corrigir</summary><ul>${environment.troubleshooting.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></details><details><summary>Como continuar ou desfazer</summary><p>${esc(environment.continuation)}</p><p>${esc(environment.undo)}</p></details></section>`;
}
function reviewMarkup(review, module) {
    return `<section class="module-review"><span class="eyebrow">Revisão do módulo ${module.toString().padStart(2, '0')}</span><h3>Recupere, misture e construa</h3><div class="review-questions">${review.questions.map((question, i) => `<details><summary>${i + 1}. ${esc(question.prompt)}</summary><p>${esc(question.answer)}</p></details>`).join('')}</div><div class="review-grid"><div><strong>Exercício misto</strong><p>${esc(review.mixedExercise)}</p></div><div><strong>Debugging</strong><p>${esc(review.debugging)}</p></div><div><strong>Mini projeto</strong><p>${esc(review.miniProject)}</p></div></div></section>`;
}
function lessonPage(lesson) {
    const content = courseContent[lesson.id];
    if (!content)
        throw new Error(`Conteúdo explícito ausente para ${lesson.id}.`);
    const module = modules.find((item) => item.id === lesson.module);
    const index = lessons.indexOf(lesson);
    const next = lessons[index + 1];
    const isLastInModule = !next || next.module !== lesson.module;
    return `<main class="page" id="main-content"><section class="lesson-header"><div class="breadcrumb">Início / ${esc(module?.label ?? '')} / Módulo ${lesson.module.toString().padStart(2, '0')}</div><h2>${esc(lesson.title)}</h2><p>${esc(lesson.summary)}</p><div class="badges"><span class="badge ${lesson.level}">${lesson.level}</span><span class="badge">◷ ${lesson.duration}</span><span class="badge">${lesson.project ? '◆ Projeto guiado' : '▣ Aula prática'}</span></div></section><div class="lesson-layout"><article class="lesson-body"><section class="central-question"><span>Pergunta central</span><h3>${esc(content.centralQuestion)}</h3></section><section class="lesson-orientation"><div><h3>O que você já precisa saber</h3><ul>${content.prerequisites.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div><div><h3>Ao final, você consegue</h3><ul>${content.learningGoals.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div></section>${environmentMarkup(content.environment)}${content.sections.map(sectionMarkup).join('')}<section class="section misconceptions"><span class="eyebrow">Armadilhas conceituais</span><ul>${content.misconceptions.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section><section class="section"><span class="eyebrow">Checklist específico</span><h3>Verifique o que esta aula desenvolveu</h3>${content.checklist.map((label, i) => `<label class="check"><input type="checkbox" data-check="${lesson.id}-${i}" ${checks[`${lesson.id}-${i}`] ? 'checked' : ''}><span>${esc(label)}</span></label>`).join('')}</section>${isLastInModule ? reviewMarkup(moduleReviews[lesson.module], lesson.module) : ''}<section class="section resources"><h3>Referências exatas</h3>${content.resources.map((resource) => `<a class="resource" href="${resource.url}" target="_blank" rel="noopener noreferrer"><span>${esc(resource.source)}</span>${esc(resource.title)} ↗</a>`).join('')}<div class="connection"><strong>Conexão com a trilha</strong><p>${esc(content.connection)}</p></div><p>Próxima aula: ${next ? `<button class="link" data-go="${next.id}">${esc(next.title)} →</button>` : 'você concluiu a trilha!'}</p></section></article><aside class="lesson-aside"><div class="card"><span class="meta">Habilidades desta aula</span><p>${content.skills.map(esc).join(' · ')}</p><button class="btn complete ${completed.has(lesson.id) ? 'done' : ''}" data-complete="${lesson.id}">${completed.has(lesson.id) ? '✓ Aula concluída' : 'Marcar como concluída'}</button></div><div class="card"><strong>${esc(content.environment.label)}</strong><p>${esc(content.environment.purpose)}</p></div></aside></div></main>`;
}
function render() {
    const selected = lessons.find((item) => item.id === current);
    root.innerHTML = `<div class="app">${sidebar()}<div class="content">${topbar()}${current === 'home' ? home() : lessonPage(selected ?? lessons[0])}</div></div>`;
    bind();
}
function go(id) { current = id; location.hash = id === 'home' ? '' : id; render(); window.scrollTo({ top: 0 }); }
function bind() {
    document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => go(button.dataset.go ?? 'home')));
    document.querySelector('#menu')?.addEventListener('click', () => document.querySelector('#sidebar')?.classList.toggle('open'));
    document.querySelectorAll('[data-complete]').forEach((button) => button.addEventListener('click', () => { const id = button.dataset.complete; if (!id)
        return; completed.has(id) ? completed.delete(id) : completed.add(id); save(); render(); }));
    document.querySelectorAll('[data-check]').forEach((input) => input.addEventListener('change', () => { if (input.dataset.check) {
        checks[input.dataset.check] = input.checked;
        save();
    } }));
    document.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', async () => { await navigator.clipboard?.writeText(decodeURIComponent(button.dataset.copy ?? '')); const previous = button.textContent; button.textContent = '✓ Copiado'; setTimeout(() => { button.textContent = previous; }, 1400); }));
    document.querySelector('[data-scroll]')?.addEventListener('click', () => document.querySelector('#trail')?.scrollIntoView({ behavior: 'smooth' }));
    const search = document.querySelector('#search');
    const results = document.querySelector('#results');
    search?.addEventListener('input', () => {
        if (!results)
            return;
        const term = search.value.toLocaleLowerCase('pt-BR').trim();
        const found = term ? lessons.filter((lesson) => { const content = courseContent[lesson.id]; return [lesson.title, lesson.summary, ...lesson.topics, content.centralQuestion, ...content.skills].join(' ').toLocaleLowerCase('pt-BR').includes(term); }).slice(0, 8) : [];
        results.innerHTML = found.map((lesson) => `<button data-result="${lesson.id}">${esc(lesson.title)}<small>${esc(courseContent[lesson.id].centralQuestion)}</small></button>`).join('') || '<p class="empty">Nenhuma aula encontrada.</p>';
        results.hidden = !term;
        results.querySelectorAll('[data-result]').forEach((button) => button.addEventListener('click', () => go(button.dataset.result ?? 'home')));
    });
}
const missing = lessons.filter((lesson) => !courseContent[lesson.id]);
if (missing.length)
    throw new Error(`Aulas sem conteúdo: ${missing.map((lesson) => lesson.id).join(', ')}`);
render();
window.addEventListener('hashchange', () => { current = location.hash.replace('#', '') || 'home'; render(); });
