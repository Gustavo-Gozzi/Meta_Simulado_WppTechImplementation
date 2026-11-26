/* =========================================================
   Material de Estudos – monta o menu e o conteúdo a partir
   de dados/material.js (MATERIAL)
   ========================================================= */

const CURSOS = typeof MATERIAL !== "undefined" ? MATERIAL : [];
const menu = document.querySelector("#menu");
const conteudo = document.querySelector("#conteudo");
const busca = document.querySelector("#busca");

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const idLicao = (c, l, i) => `licao-${c.path}-${l.ancora || l.activity}-${i}`;

function montar() {
  if (!CURSOS.length) {
    conteudo.innerHTML = `<p class="material__vazio">Material ainda não disponível.</p>`;
    return;
  }
  menu.innerHTML = CURSOS.map((c) => `
    <div class="menu-curso">
      <p class="menu-curso__titulo">${esc(c.titulo_pt)}</p>
      <ul>${c.licoes.map((l, i) => `<li><a href="#${idLicao(c, l, i)}" data-alvo="${idLicao(c, l, i)}">${esc(l.titulo_pt)}</a></li>`).join("")}</ul>
    </div>`).join("");

  conteudo.innerHTML = CURSOS.map((c) => `
    <section class="curso-bloco" id="curso-${c.path}">
      <h2>${esc(c.titulo_pt)}</h2>
      ${c.licoes.map((l, i) => `
        <article class="cartao licao" id="${idLicao(c, l, i)}">
          <h3>${esc(l.titulo_pt)}</h3>
          <a class="licao__link" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">Abrir a lição oficial na Meta Blueprint ↗</a>
          <div class="licao__texto">${l.resumo_html}</div>
          ${l.qtd_questoes ? `<p class="licao__quiz">Esta lição tem ${l.qtd_questoes} ${l.qtd_questoes === 1 ? "questão" : "questões"} de knowledge check no simulado.</p>` : ""}
        </article>`).join("")}
    </section>`).join("");
}

/* Destaca no menu a lição visível */
function observarLeitura() {
  const links = new Map([...menu.querySelectorAll("a")].map((a) => [a.dataset.alvo, a]));
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((a) => a.classList.remove("ativo"));
        const a = links.get(e.target.id);
        if (a) a.classList.add("ativo");
      }
    });
  }, { rootMargin: "0px 0px -70% 0px" });
  document.querySelectorAll(".licao").forEach((el) => obs.observe(el));
}

/* Busca simples por texto */
function filtrar(termo) {
  const t = termo.trim().toLowerCase();
  let visiveis = 0;
  document.querySelectorAll(".licao").forEach((el) => {
    const ok = !t || el.textContent.toLowerCase().includes(t);
    el.classList.toggle("licao--oculta", !ok);
    const link = menu.querySelector(`a[data-alvo="${el.id}"]`);
    if (link) link.parentElement.hidden = !ok;
    if (ok) visiveis++;
  });
  document.querySelectorAll(".curso-bloco").forEach((sec) => {
    sec.hidden = !sec.querySelector(".licao:not(.licao--oculta)");
  });
  document.querySelectorAll(".menu-curso").forEach((m) => {
    m.hidden = ![...m.querySelectorAll("li")].some((li) => !li.hidden);
  });
  let aviso = document.querySelector("#sem-resultado");
  if (!visiveis) {
    if (!aviso) {
      aviso = document.createElement("p");
      aviso.id = "sem-resultado";
      aviso.className = "material__vazio";
      conteudo.prepend(aviso);
    }
    aviso.textContent = `Nada encontrado para "${termo}".`;
  } else if (aviso) {
    aviso.remove();
  }
}

montar();
observarLeitura();
busca.addEventListener("input", () => filtrar(busca.value));
