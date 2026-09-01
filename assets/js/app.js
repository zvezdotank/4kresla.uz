/* Парикмахерская нормального человека — поведение страницы.
   Без зависимостей. Модалка записи, лайтбокс, мобильное меню, подсветка навигации. */
(function () {
  'use strict';

  /* Куда отправлять заявки. Пустая строка — демо-режим: форма проверяется,
     показывается экран «заявка принята», но ничего не уходит.
     Подставьте URL обработчика (Telegram-бот, CRM, почтовый скрипт) — заявка уйдёт
     обычным POST'ом с JSON-телом {name, phone, service, master, datetime}. */
  var BOOKING_ENDPOINT = '';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- мобильное меню ---------- */
  var burger = $('#burger');
  var navList = $('#nav-list');
  var MOBILE = '(max-width: 900px)';

  function syncNav() {
    var mobile = window.matchMedia(MOBILE).matches;
    if (!mobile) { navList.hidden = false; burger.setAttribute('aria-expanded', 'false'); }
    else if (burger.getAttribute('aria-expanded') !== 'true') { navList.hidden = true; }
  }
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    navList.hidden = open;
  });
  navList.addEventListener('click', function (e) {
    if (e.target.closest('.nav__link') && window.matchMedia(MOBILE).matches) {
      burger.setAttribute('aria-expanded', 'false');
      navList.hidden = true;
    }
  });
  window.addEventListener('resize', syncNav);
  syncNav();

  /* ---------- подсветка активного пункта ---------- */
  var links = $$('.nav__link').filter(function (a) { return a.getAttribute('href').charAt(0) === '#'; });
  var sections = links.map(function (a) { return $(a.getAttribute('href')); }).filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + id); });
  }
  var ticking = false;
  function updateActive() {
    if (!sections.length) { ticking = false; return; }
    ticking = false;
    var line = window.scrollY + parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || 56) + 8;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= line) current = s; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
    if (current) setActive(current.id);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateActive); }
  }, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();

  $$('[data-scroll-to]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = $(btn.getAttribute('data-scroll-to'));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- общий каркас модалок ---------- */
  var lastFocus = null;
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

  function openOverlay(el) {
    lastFocus = document.activeElement;
    el.hidden = false;
    document.body.classList.add('is-locked');
    var first = $(FOCUSABLE, el);
    if (first) first.focus();
  }
  function closeOverlay(el) {
    el.hidden = true;
    document.body.classList.remove('is-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function trap(el, e) {
    if (e.key !== 'Tab') return;
    var items = $$(FOCUSABLE, el).filter(function (n) { return n.offsetParent !== null; });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---------- лайтбокс галереи ---------- */
  var lightbox = $('#lightbox');
  var lightboxImg = $('#lightbox-img');
  if (!lightbox) return;
  var tiles = $$('.tile').filter(function (t) { return $('img', t); });
  var shots = tiles.map(function (t) {
    var img = $('img', t);
    return { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '' };
  });
  var current = 0;

  function show(i) {
    current = (i + shots.length) % shots.length;
    lightboxImg.src = shots[current].src;
    lightboxImg.alt = shots[current].alt;
  }
  tiles.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i); openOverlay(lightbox); });
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.closest('[data-close]')) closeOverlay(lightbox);
  });

  /* ---------- события для аналитики ---------- */
  /* Считаем не просмотры, а действия: звонки, маршруты и скачивания логотипа.
     Если счётчик не загрузился (блокировщик, нет сети) — просто ничего не шлём. */
  function track(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }

  function place(el) {
    if (el.closest('.callbar')) return 'плавающая кнопка';
    if (el.closest('.nav')) return 'шапка';
    if (el.closest('.hero')) return 'первый экран';
    if (el.closest('.band-dark')) return 'полоса «только по записи»';
    if (el.closest('.profile__actions')) return 'страница мастера';
    if (el.closest('.prices__note')) return 'под ценами';
    if (el.closest('.contacts')) return 'контакты';
    return 'другое';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';

    if (href.indexOf('tel:') === 0) {
      track('call_click', { place: place(a) });
      return;
    }
    if (a.hasAttribute('download')) {
      track('logo_download', { file: href.split('/').pop() });
      return;
    }
    if (/yandex\.|google\.com\/maps|maps\.apple\.com/.test(href)) {
      track('map_click', {
        service: /yandex/.test(href) ? 'Яндекс' : (/apple/.test(href) ? 'Apple' : 'Google')
      });
    }
  });

  /* переход на страницу мастера — видно, кем интересуются */
  $$('.master').forEach(function (card) {
    card.addEventListener('click', function () {
      var name = $('.master__name', card);
      track('master_open', { master: name ? name.textContent.trim() : '' });
    });
  });

  /* ---------- клавиатура ---------- */
  document.addEventListener('keydown', function (e) {
    if (!lightbox.hidden) {
      if (e.key === 'Escape') closeOverlay(lightbox);
      else if (e.key === 'ArrowRight') show(current + 1);
      else if (e.key === 'ArrowLeft') show(current - 1);
      else trap(lightbox, e);
      return;
    }
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      burger.setAttribute('aria-expanded', 'false');
      navList.hidden = true;
      burger.focus();
    }
  });
})();
