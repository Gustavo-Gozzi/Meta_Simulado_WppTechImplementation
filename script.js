/* =========================================================
   Simulado – lógica do quiz
   Dados: dados/prova-pratica.js (QUESTOES_PROVA)
          dados/knowledge-checks.js (QUESTOES_KC)
   ========================================================= */

const LETRAS = ["A", "B", "C", "D", "E", "F"];

const PROVA = typeof QUESTOES_PROVA !== "undefined" ? QUESTOES_PROVA : [];
const KC = typeof QUESTOES_KC !== "undefined" ? QUESTOES_KC : [];

const MODOS = {
  prova: { nome: "Prova prática oficial", lista: () => PROVA },
  kc: { nome: "Knowledge checks dos cursos", lista: () => KC },
  tudo: { nome: "Tudo junto", lista: () => PROVA.concat(KC) }
};

/* =================== Estado =================== */
let modoAtual = "prova";
let rodada = [];           // questões da rodada atual (com alternativas na ordem exibida)
let respostas = {};        // id -> Set de índices (na ordem original) marcados
let resultadoAtual = [];   // [{q, certa, marcadas:Set}]
let rodadaCompleta = true; // false quando é "refazer só as erradas"

const $ = (sel) => document.querySelector(sel);
const telas = { inicio: $("#tela-inicio"), quiz: $("#tela-quiz"), resultado: $("#tela-resultado") };

function mostrarTela(nome) {
  Object.entries(telas).forEach(([k, el]) => (el.hidden = k !== nome));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const qtdCorretas = (q) => q.alternativas.filter((a) => a.c).length;

function escapar(txt) {
  return String(txt).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* =================== Armazenamento (opcional) =================== */
const CHAVE = "simulado_whatsapp_melhores_notas";
function lerNotas() {
  try { return JSON.parse(localStorage.getItem(CHAVE)) || {}; } catch (e) { return {}; }
}
function salvarMelhorNota(modo, acertos, total) {
  try {
    const notas = lerNotas();
    const atual = notas[modo];
    if (!atual || acertos / total > atual.acertos / atual.total) {
      notas[modo] = { acertos, total, data: new Date().toLocaleDateString("pt-BR") };
      localStorage.setItem(CHAVE, JSON.stringify(notas));
    }
  } catch (e) { /* sem armazenamento: tudo bem */ }
}
function exibirMelhorNota() {
  const m = lerNotas()[modoAtual];
  const el = $("#melhor-nota");
  if (m) {
    el.textContent = `Sua melhor nota neste modo: ${m.acertos}/${m.total} (${Math.round((m.acertos / m.total) * 100)}%) em ${m.data}.`;
    el.hidden = false;
  } else {
    el.hidden = true;
  }
}

/* =================== Tela inicial =================== */
function prepararModos() {
  document.querySelectorAll("[data-qtd]").forEach((el) => {
    el.textContent = MODOS[el.dataset.qtd].lista().length;
  });
  document.querySelectorAll('input[name="modo"]').forEach((r) => {
    if (MODOS[r.value].lista().length === 0) r.closest("label").hidden = true;
    r.addEventListener("change", () => {
      modoAtual = r.value;
      exibirMelhorNota();
    });
  });
  const marcado = document.querySelector('input[name="modo"]:checked');
  modoAtual = marcado ? marcado.value : "prova";
  exibirMelhorNota();
}

/* =================== Montagem do quiz =================== */
function iniciar(listaQuestoes, completa = true) {
  rodadaCompleta = completa;
  const embaralha = $("#cfg-embaralhar").checked;
  const base = embaralha ? embaralhar(listaQuestoes) : listaQuestoes.slice();
  rodada = base.map((q) => {
    const ordem = q.alternativas.map((_, i) => i);
    return { ...q, ordem: embaralha ? embaralhar(ordem) : ordem };
  });
  respostas = {};
  rodada.forEach((q) => (respostas[q.id] = new Set()));
  renderizarQuiz();
  mostrarTela("quiz");
}

function seloOrigem(q) {
  return q.curso
    ? `<span class="origem origem--kc">Knowledge check · ${escapar(q.curso)}</span>`
    : `<span class="origem">Prova prática</span>`;
}

function renderizarQuiz() {
  const form = $("#form-quiz");
  form.innerHTML = "";
  rodada.forEach((q, pos) => {
    const multipla = qtdCorretas(q) > 1;
    const tipo = multipla ? "checkbox" : "radio";
    const div = document.createElement("fieldset");
    div.className = "questao";
    div.dataset.id = q.id;
    div.innerHTML = `
      <legend class="questao__num">Questão ${pos + 1} de ${rodada.length}</legend>
      ${seloOrigem(q)}
      <p class="questao__enunciado">${escapar(q.enunciado)}</p>
      ${q.codigo ? `<pre>${escapar(q.codigo)}</pre>` : ""}
      <p class="questao__dica">${multipla ? `Selecione ${qtdCorretas(q)} respostas.` : "Selecione 1 resposta."}</p>
      ${q.ordem.map((iOrig, k) => `
        <label class="alternativa">
          <input type="${tipo}" name="q${q.id}" value="${iOrig}">
          <span><strong>${LETRAS[k]})</strong> ${q.alternativas[iOrig].t}</span>
        </label>`).join("")}
    `;
    div.addEventListener("change", (ev) => aoMarcar(ev, q, div));
    form.appendChild(div);
  });
  $("#contador").textContent = `${MODOS[modoAtual].nome}${rodadaCompleta ? "" : " · refazendo as erradas"}`;
  atualizarProgresso();
}

function aoMarcar(ev, q, div) {
  const input = ev.target;
  const set = respostas[q.id];
  const limite = qtdCorretas(q);
  const idx = Number(input.value);
  if (input.type === "radio") {
    set.clear();
    set.add(idx);
  } else if (input.checked) {
    if (set.size >= limite) {
      input.checked = false;
      alert(`Esta questão aceita apenas ${limite} respostas. Desmarque uma antes de escolher outra.`);
      return;
    }
    set.add(idx);
  } else {
    set.delete(idx);
  }
  div.querySelectorAll(".alternativa").forEach((lab) => {
    lab.classList.toggle("alternativa--marcada", lab.querySelector("input").checked);
  });
  if (respondidaCompleta(q)) div.classList.remove("questao--pendente");
  atualizarProgresso();
}

function respondidaCompleta(q) {
  return respostas[q.id].size === qtdCorretas(q);
}

function atualizarProgresso() {
  const total = rodada.length;
  const feitas = rodada.filter(respondidaCompleta).length;
  $("#progresso").style.width = `${(feitas / total) * 100}%`;
  $("#resumo-respondidas").textContent = `${feitas} de ${total} respondidas`;
}

/* =================== Correção =================== */
function finalizar() {
  const pendentes = rodada.filter((q) => !respondidaCompleta(q));
  const cards = [...document.querySelectorAll("#form-quiz .questao")];
  cards.forEach((card) => card.classList.remove("questao--pendente"));
  if (pendentes.length > 0) {
    const idsPendentes = new Set(pendentes.map((q) => String(q.id)));
    const marcados = cards.filter((card) => idsPendentes.has(card.dataset.id));
    marcados.forEach((card) => card.classList.add("questao--pendente"));
    const qtd = marcados.length;
    $("#resumo-respondidas").textContent =
      `Falta${qtd === 1 ? "" : "m"} ${qtd} ${qtd === 1 ? "questão" : "questões"} para responder`;
    marcados[0].scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  resultadoAtual = rodada.map((q) => {
    const marcadas = respostas[q.id];
    const corretas = new Set(q.alternativas.map((a, i) => (a.c ? i : -1)).filter((i) => i >= 0));
    const certa = marcadas.size === corretas.size && [...marcadas].every((i) => corretas.has(i));
    return { q, certa, marcadas };
  });
  const acertos = resultadoAtual.filter((r) => r.certa).length;
  const total = resultadoAtual.length;
  const pct = Math.round((acertos / total) * 100);
  if (rodadaCompleta) salvarMelhorNota(modoAtual, acertos, total);

  const circulo = $("#nota-circulo");
  circulo.style.background = `conic-gradient(${pct >= 70 ? "var(--verde)" : "var(--vermelho)"} ${pct * 3.6}deg, var(--borda) 0deg)`;
  circulo.classList.toggle("nota-circulo--reprovado", pct < 70);
  $("#nota-percentual").textContent = `${pct}%`;
  $("#nota-titulo").textContent = pct >= 70 ? "Mandou bem!" : "Vale revisar e tentar de novo";
  const erros = total - acertos;
  $("#nota-texto").textContent = `Você acertou ${acertos} de ${total} ${total === 1 ? "questão" : "questões"} (${erros} ${erros === 1 ? "errada" : "erradas"}). Referência usada aqui: 70% de acertos.`;
  $("#btn-refazer-erradas").disabled = acertos === total;

  document.querySelectorAll(".filtro").forEach((b) => b.classList.toggle("filtro--ativo", b.dataset.filtro === "todas"));
  renderizarRevisao("todas");
  mostrarTela("resultado");
}

function htmlFontes(q) {
  if (!q.fontes || !q.fontes.length) return "";
  return `<div class="fontes"><strong>Para saber mais:</strong><ul>${q.fontes
    .map((f) => `<li><a href="${escapar(f.url)}" target="_blank" rel="noopener noreferrer">${escapar(f.titulo)}</a></li>`)
    .join("")}</ul></div>`;
}

function renderizarRevisao(filtro) {
  const cont = $("#revisao");
  cont.innerHTML = "";
  resultadoAtual.forEach((r, pos) => {
    if (filtro === "erradas" && r.certa) return;
    if (filtro === "certas" && !r.certa) return;
    const { q } = r;
    const div = document.createElement("article");
    div.className = `questao ${r.certa ? "questao--certa" : "questao--errada"}`;
    div.innerHTML = `
      <div class="questao__num">Questão ${pos + 1}
        <span class="selo ${r.certa ? "selo--certa" : "selo--errada"}">${r.certa ? "Acertou" : "Errou"}</span>
      </div>
      ${seloOrigem(q)}
      <p class="questao__enunciado">${escapar(q.enunciado)}</p>
      ${q.codigo ? `<pre>${escapar(q.codigo)}</pre>` : ""}
      ${q.ordem.map((iOrig, k) => {
        const alt = q.alternativas[iOrig];
        const marcou = r.marcadas.has(iOrig);
        let cls = "revisao-alt";
        let tag = "";
        if (alt.c) { cls += " revisao-alt--correta"; tag = marcou ? "✔ Correta (você marcou)" : "✔ Correta"; }
        else if (marcou) { cls += " revisao-alt--errada"; tag = "✘ Sua resposta"; }
        return `<div class="${cls}"><strong>${LETRAS[k]})</strong> ${alt.t}${tag ? `<span class="revisao-alt__tag">${tag}</span>` : ""}</div>`;
      }).join("")}
      <div class="explicacao"><strong>Explicação:</strong> ${escapar(q.explicacao)}${htmlFontes(q)}</div>
    `;
    cont.appendChild(div);
  });
  if (!cont.children.length) {
    cont.innerHTML = `<div class="cartao">Nenhuma questão neste filtro.</div>`;
  }
}

/* =================== Eventos =================== */
$("#btn-comecar").addEventListener("click", () => iniciar(MODOS[modoAtual].lista()));
$("#btn-finalizar").addEventListener("click", finalizar);
$("#btn-refazer").addEventListener("click", () => iniciar(MODOS[modoAtual].lista()));
$("#btn-refazer-erradas").addEventListener("click", () => {
  const todas = MODOS[modoAtual].lista();
  const erradas = resultadoAtual.filter((r) => !r.certa).map((r) => todas.find((q) => q.id === r.q.id));
  if (erradas.length) iniciar(erradas, false);
});
$("#btn-voltar-inicio").addEventListener("click", () => {
  exibirMelhorNota();
  mostrarTela("inicio");
});
document.querySelectorAll(".filtro").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filtro").forEach((b) => b.classList.remove("filtro--ativo"));
    btn.classList.add("filtro--ativo");
    renderizarRevisao(btn.dataset.filtro);
  })
);

prepararModos();
