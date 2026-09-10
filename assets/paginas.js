/* ==========================================================================
   Comportamento compartilhado das PÁGINAS INTERNAS. A home não usa este arquivo.
   O Consent Mode, o GTM e o GA4 ficam inline no <head> de cada página, porque
   precisam rodar ANTES de qualquer biblioteca — este arquivo carrega no fim.
   ========================================================================== */
(function () {
  /* ---- Ano do rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- Menu mobile ---- */
  var botaoMenu = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileNav');
  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botaoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  /* ---- Aviso de cookies (mesma chave da home: a escolha vale para o site todo) ---- */
  var CHAVE = 'ec-consent';
  function ler() { try { return localStorage.getItem(CHAVE); } catch (e) { return null; } }
  function gravar(v) { try { localStorage.setItem(CHAVE, v); } catch (e) {} }

  if (!ler()) {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Aviso sobre cookies');
    banner.innerHTML =
      '<p class="cookie-titulo">Um aviso rápido sobre cookies</p>' +
      '<p>Uso cookies de medição para entender quais partes do site ajudam quem procura um visagista — ' +
      'nada de anúncios nem venda de dados. Você escolhe. ' +
      '<a href="/politica-de-privacidade.html">Ver política de privacidade</a>.</p>' +
      '<div class="cookie-acoes">' +
      '<button type="button" class="cookie-btn cookie-btn-aceitar">Aceitar</button>' +
      '<button type="button" class="cookie-btn cookie-btn-recusar">Só o essencial</button>' +
      '</div>';
    document.body.appendChild(banner);

    var decidir = function (aceitou) {
      gravar(aceitou ? 'aceito' : 'recusado');
      if (aceitou && typeof gtag === 'function') {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted'
        });
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'consentimento_cookies', decisao: aceitou ? 'aceito' : 'recusado' });
      banner.classList.remove('entrou');
      setTimeout(function () { banner.classList.remove('visivel'); }, 450);
    };
    banner.querySelector('.cookie-btn-aceitar').addEventListener('click', function () { decidir(true); });
    banner.querySelector('.cookie-btn-recusar').addEventListener('click', function () { decidir(false); });

    setTimeout(function () {
      banner.classList.add('visivel');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { banner.classList.add('entrou'); });
      });
    }, 1400);
  }

  /* ---- Clique no WhatsApp = agendamento iniciado ----
     Pelos dois caminhos, igual à home: gtag('event') chega ao GA4;
     dataLayer.push fica para o GTM. Sem a linha do gtag o evento se perde. */
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
    if (!link) return;
    var secao = (link.closest('section') && link.closest('section').id) || 'geral';
    var origem = link.getAttribute('data-origem') || link.className || 'link';
    var pagina = window.location.pathname;
    if (typeof gtag === 'function') {
      gtag('event', 'clique_whatsapp', { secao: secao, origem_clique: origem, pagina: pagina });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'clique_whatsapp', origem_clique: origem, secao: secao, pagina: pagina });
  });
})();
