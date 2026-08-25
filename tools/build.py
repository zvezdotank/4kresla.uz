#!/usr/bin/env python3
"""Собирает карточки мастеров на главной и отдельную страницу каждому мастеру.

Данные — в content/masters.json. Правишь их и запускаешь:

    python3 tools/build.py

Скрипт переписывает блок между <!-- team:start --> и <!-- team:end --> в index.html
и заново создаёт masters/<slug>.html. Всё остальное в index.html руками — сборка
туда не лезет. Карта живёт отдельно, в tools/map.py.
"""
import html
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "content" / "masters.json").read_text())
SALON = DATA["salon"]
MASTERS = DATA["masters"]
DOMAIN = "4kresla.uz"

E = lambda s: html.escape(s, quote=True)


def icon(name, size=16, cls=""):
    c = f' class="{cls}"' if cls else ""
    return (f'<svg{c} width="{size}" height="{size}" fill="none" stroke="currentColor" '
            f'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
            f'<use href="#i-{name}"/></svg>')


def full_name(m):
    return " ".join(p for p in (m["name"], m.get("surname", "")) if p).strip()


def photo_block(m, big=False):
    """Портрет или заглушка «фото будет» — пока настоящих снимков нет."""
    size = 44 if big else 34
    if m.get("photo"):
        return (f'<div class="master__frame"><img class="photo" src="{{base}}assets/img/{E(m["photo"])}" '
                f'alt="{E(full_name(m))}, {E(m["role"])}" loading="lazy"></div>')
    return ('<div class="master__frame master__frame--empty">'
            f'{icon("scissors" if m["role"] != "маникюр" else "sparkles", size, "master__glyph")}'
            '<span class="master__soon">Фото будет</span></div>')


# ── карточки на главной ─────────────────────────────────────────────────
def team_grid():
    out = []
    for m in MASTERS:
        out.append(
            f'      <a class="master" href="masters/{m["slug"]}.html">\n'
            f'        {photo_block(m).replace("{base}", "")}\n'
            f'        <span class="master__caption"><span class="master__name">{E(full_name(m))}</span>'
            f'<span class="master__role">{E(m["role"])}</span></span>\n'
            f'      </a>')
    return "\n".join(out)


# ── страница мастера ────────────────────────────────────────────────────
NAV = """<nav class="nav" aria-label="Основная навигация">
  <a class="nav__mark" href="{base}index.html" aria-label="На главную">{scissors}</a>
  <button class="nav__burger" id="burger" type="button" aria-expanded="false" aria-controls="nav-list" aria-label="Меню">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav__list" id="nav-list">
    <li><a class="nav__link" href="{base}index.html">Главная</a></li>
    <li><a class="nav__link" href="{base}index.html#salon">О нас</a></li>
    <li><a class="nav__link" href="{base}index.html#team">Мастера</a></li>
    <li><a class="nav__link" href="{base}index.html#prices">Цены</a></li>
    <li><a class="nav__link" href="{base}index.html#tools">Инструмент</a></li>
    <li><a class="nav__link" href="{base}index.html#gallery">Фото</a></li>
    <li><a class="nav__link" href="{base}index.html#contacts">Контакты</a></li>
  </ul>
  <a class="nav__phone" href="tel:{phone}">{phone_text}</a>
</nav>"""

CALLBAR = """<a class="callbar" href="tel:{phone}">
  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#i-phone"/></svg>
  Позвонить и записаться
</a>"""

FOOTER = """<footer class="footer">
  <a class="footer__credit" href="{base}index.html"><img src="{base}assets/logo/4kresla-gorizontalnyy-belyy.svg" alt="Четыре кресла" width="196" height="55"></a>
  <span class="footer__since">Стрижём с 1972 года</span>
  <span class="footer__note">
    <a class="footer__link" href="{base}media.html">Логотипы и медиа</a>
    <a class="footer__link" href="https://sales-hub.uz/?utm_source={domain}&amp;utm_medium=referral&amp;utm_campaign=footer" target="_blank" rel="noopener">Сайт и продвижение — Sales HUB</a>
  </span>
</footer>"""


def contacts_row(m):
    """Кнопки связи: только те, что заполнены в masters.json."""
    out = []
    if m.get("phone"):
        out.append(f'<a class="btn btn--primary" href="tel:{E(m["phone"])}">{icon("phone", 16)} {E(m["phone_text"])}</a>')
    else:
        out.append(f'<a class="btn btn--primary" href="tel:{E(SALON["phone"])}">{icon("phone", 16)} {E(SALON["phone_text"])}</a>')
    if m.get("telegram"):
        tg = m["telegram"].lstrip("@")
        out.append(f'<a class="btn btn--outline" href="https://t.me/{E(tg)}" target="_blank" rel="noopener">{icon("send", 16)} Telegram</a>')
    if m.get("instagram"):
        ig = m["instagram"].lstrip("@")
        out.append(f'<a class="btn btn--outline" href="https://instagram.com/{E(ig)}" target="_blank" rel="noopener">{icon("instagram", 16)} Instagram</a>')
    return "\n        ".join(out)


def works_section(m):
    """Портфолио. Пока работ нет — девять пустых плиток, чтобы мастер видел,
    сколько снимков с него ждут."""
    if not m.get("works"):
        tiles = "\n      ".join(
            '<span class="tile tile--empty" aria-hidden="true">'
            + icon("image", 22, "tile__glyph") + '</span>' for _ in range(9))
        return f"""
<section class="section section--alt" id="works">
  <div class="container">
    <div class="heading"><h2>Работы</h2><span class="rule"></span></div>
    <p class="intro">Здесь будут фотографии работ мастера. Скиньте девять снимков — и они появятся на этой странице.</p>
    <div class="works works--empty">
      {tiles}
    </div>
  </div>
</section>
"""
    tiles = "\n      ".join(
        f'<button class="tile" type="button" data-shot="{i}">'
        f'<img class="photo" src="../assets/img/{E(w)}" alt="Работа мастера" loading="lazy"></button>'
        for i, w in enumerate(m["works"]))
    return f"""
<section class="section section--alt" id="works">
  <div class="container">
    <div class="heading"><h2>Работы</h2><span class="rule"></span></div>
    <div class="works">
      {tiles}
    </div>
  </div>
</section>
"""


def page(m):
    name = full_name(m)
    title = f'{name} — {m["role"]}, парикмахерская «Четыре кресла» на Сайхуне'
    desc = (f'{name} — {m["role"]} в парикмахерской «Четыре кресла», {SALON["address"]}. '
            f'Запись по телефону {m.get("phone_text") or SALON["phone_text"]}, {SALON["hours"]}.')
    bio = "\n      ".join(f'<p>{E(p)}</p>' for p in m["bio"])
    ld = {
        "@context": "https://schema.org", "@type": "Person", "name": name,
        "jobTitle": "Мастер маникюра" if m["role"] == "маникюр" else "Парикмахер",
        "telephone": m.get("phone") or SALON["phone"],
        "url": f'https://{DOMAIN}/masters/{m["slug"]}.html',
        "worksFor": {"@type": "HairSalon", "name": SALON["name"], "url": f"https://{DOMAIN}/",
                     "address": {"@type": "PostalAddress", "streetAddress": "ул. Сайхун, 166",
                                 "addressLocality": "Ташкент", "addressCountry": "UZ"}},
    }
    scissors = icon("scissors", 20)
    return f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{E(title)}</title>
<meta name="description" content="{E(desc)}">
<meta name="theme-color" content="#1c1c1c">
<link rel="icon" href="../favicon.svg">\n<link rel="apple-touch-icon" href="../apple-touch-icon.png">
<link rel="canonical" href="https://{DOMAIN}/masters/{m['slug']}.html">
<meta property="og:type" content="profile">
<meta property="og:title" content="{E(name)} — {E(m['role'])}">
<meta property="og:description" content="{E(desc)}">
<meta property="og:url" content="https://{DOMAIN}/masters/{m['slug']}.html">
<meta property="og:locale" content="ru_RU">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="../assets/css/tokens.css">
<link rel="stylesheet" href="../assets/css/site.css">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False)}
</script>
</head>
<body>

{SPRITE}

{NAV.format(base="../", scissors=scissors, phone=SALON["phone"], phone_text=SALON["phone_text"])}

<main>
<nav class="crumbs container" aria-label="Хлебные крошки">
  <a href="../index.html">Главная</a><span aria-hidden="true">·</span><a href="../index.html#team">Мастера</a><span aria-hidden="true">·</span><span>{E(name)}</span>
</nav>

<section class="section section--flush-top profile-section">
  <div class="container profile">
    <div class="profile__photo">
      {photo_block(m, big=True).replace("{base}", "../")}
    </div>
    <div class="profile__body">
      <h1>{E(name)}</h1>
      <p class="profile__role">{E(m["role"])}</p>
      <span class="rule"></span>
      <div class="profile__bio">
      {bio}
      </div>
      <div class="profile__actions">
        {contacts_row(m)}
      </div>
      <p class="profile__note">Только по предварительной записи · {E(SALON["hours"])}</p>
    </div>
  </div>
</section>
{works_section(m)}
<section class="band-dark">
  <div class="container band-dark__inner">
    <div class="heading heading--light"><h2>Как записаться</h2><span class="rule"></span></div>
    <p class="band-dark__text">Позвоните заранее и скажите, к какому мастеру хотите попасть — вам назовут свободное время. {E(SALON["address"])}, {E(SALON["hours"])}.</p>
    <a class="btn btn--outline btn--lg" href="tel:{E(SALON["phone"])}">{E(SALON["phone_text"])}</a>
    <p class="band-dark__note"><a class="band-dark__back" href="../index.html#team">Все мастера</a></p>
  </div>
</section>
</main>

{CALLBAR.format(phone=SALON["phone"])}

{FOOTER.format(base="../", domain=DOMAIN)}

<div class="overlay lightbox" id="lightbox" hidden>
  <button class="lightbox__close" type="button" aria-label="Закрыть" data-close>
    {icon("x", 22)}
  </button>
  <img class="photo" id="lightbox-img" src="" alt="">
</div>

<script src="../assets/js/app.js"></script>
</body>
</html>
"""


def dl(title, note, preview_bg, preview_file, svg_file, png_file):
    return f"""      <figure class="media-item">
        <div class="media-item__preview" style="background:{preview_bg}">
          <img src="assets/logo/{preview_file}" alt="{title}" loading="lazy">
        </div>
        <figcaption>
          <span class="media-item__name">{title}</span>
          <span class="media-item__note">{note}</span>
          <span class="media-item__links">
            <a class="btn btn--outline btn--sm" href="assets/logo/{svg_file}" download>SVG</a>
            <a class="btn btn--outline btn--sm" href="assets/logo/{png_file}" download>PNG</a>
          </span>
        </figcaption>
      </figure>
"""


def media_page():
    scissors = icon("scissors", 22)
    items = "".join([
        dl("Горизонтальный, тёмный", "для светлого фона: бланки, документы, светлая вывеска",
           "#f6f6f6", "4kresla-gorizontalnyy-chernyy.svg",
           "4kresla-gorizontalnyy-chernyy.svg", "4kresla-gorizontalnyy-chernyy.png"),
        dl("Горизонтальный, светлый", "для тёмного фона: тёмная табличка, баннер, футболка",
           "#1c1c1c", "4kresla-gorizontalnyy-belyy.svg",
           "4kresla-gorizontalnyy-belyy.svg", "4kresla-gorizontalnyy-belyy.png"),
        dl("Вертикальный, тёмный", "когда место узкое и высокое: стекло двери, стойка",
           "#f6f6f6", "4kresla-vertikalnyy-chernyy.svg",
           "4kresla-vertikalnyy-chernyy.svg", "4kresla-vertikalnyy-chernyy.png"),
        dl("Вертикальный, светлый", "тот же вариант для тёмного фона",
           "#1c1c1c", "4kresla-vertikalnyy-belyy.svg",
           "4kresla-vertikalnyy-belyy.svg", "4kresla-vertikalnyy-belyy.png"),
        dl("Знак в квадрате", "аватарка в картах и мессенджерах, иконка сайта",
           "#f6f6f6", "4kresla-znak-kvadrat.svg",
           "4kresla-znak-kvadrat.svg", "4kresla-znak-kvadrat.png"),
        dl("Только ножницы", "когда название уже написано рядом: печать, тиснение, плёнка",
           "#f6f6f6", "4kresla-znak-chernyy.svg",
           "4kresla-znak-chernyy.svg", "4kresla-znak-kvadrat.png"),
    ])
    return f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Медиа — логотипы парикмахерской «Четыре кресла»</title>
<meta name="description" content="Логотипы парикмахерской «Четыре кресла» в векторе и растре, цвета, шрифты и правила написания названия. Для рекламщиков и типографий.">
<meta name="theme-color" content="#1c1c1c">
<meta name="robots" content="noindex">
<link rel="icon" href="favicon.svg">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="canonical" href="https://{DOMAIN}/media.html">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="assets/css/tokens.css">
<link rel="stylesheet" href="assets/css/site.css">
</head>
<body>

{SPRITE}

{NAV.format(base="", scissors=scissors, phone=SALON["phone"], phone_text=SALON["phone_text"])}

<main>
<nav class="crumbs container" aria-label="Хлебные крошки">
  <a href="index.html">Главная</a><span aria-hidden="true">·</span><span>Медиа</span>
</nav>

<section class="section section--flush-top">
  <div class="container">
    <div class="heading"><h2>Медиа</h2><span class="rule"></span></div>
    <p class="intro">Здесь лежит всё, что может понадобиться тому, кто делает нам рекламу, вывеску или визитки. Ссылку на эту страницу можно просто переслать — качать ничего заранее не нужно.</p>
    <p class="intro intro--tight">Вектор (SVG) — для вывесок и печати, текст переведён в кривые, поэтому шрифт устанавливать не надо. Растр (PNG) — с прозрачным фоном, для соцсетей и документов.</p>
    <p class="media-all"><a class="btn btn--primary" href="assets/logo/4kresla-logo.zip" download>Скачать всё одним архивом</a></p>
  </div>
</section>

<section class="section section--alt section--flush-bottom">
  <div class="container">
    <div class="heading"><h2>Логотип</h2><span class="rule"></span></div>
    <div class="media-grid">
{items}    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="heading"><h2>Цвета и шрифт</h2><span class="rule"></span></div>
    <div class="swatches">
      <div class="swatch"><span class="swatch__chip" style="background:#111111"></span><span class="swatch__name">Чернильный</span><span class="swatch__code">#111111</span></div>
      <div class="swatch"><span class="swatch__chip" style="background:#c1a054"></span><span class="swatch__name">Латунь</span><span class="swatch__code">#c1a054</span></div>
      <div class="swatch"><span class="swatch__chip" style="background:#ffffff;box-shadow:inset 0 0 0 1px var(--border-hairline)"></span><span class="swatch__name">Бумага</span><span class="swatch__code">#ffffff</span></div>
    </div>
    <p class="intro">Шрифт названия и заголовков — <b>PT Sans Narrow</b>, текста — <b>PT Sans</b>. Оба бесплатные, скачиваются на <a href="https://fonts.google.com/specimen/PT+Sans+Narrow" target="_blank" rel="noopener">Google Fonts</a>. В самих файлах логотипа шрифт уже в кривых, ставить его нужно только для новых надписей.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="heading"><h2>Как писать про нас</h2><span class="rule"></span></div>
    <div class="facts">
      <div class="fact"><span class="fact__label">Название</span><span class="fact__value">Четыре кресла</span></div>
      <div class="fact"><span class="fact__label">Кто мы</span><span class="fact__value">парикмахерская, работает с 1972 года</span></div>
      <div class="fact"><span class="fact__label">Адрес</span><span class="fact__value">{SALON["address"]}, 1-й этаж 9-этажного дома, ориентир — завод «Электроаппарат»</span></div>
      <div class="fact"><span class="fact__label">Телефон</span><span class="fact__value">{SALON["phone_text"]}, Евгений</span></div>
      <div class="fact"><span class="fact__label">Часы</span><span class="fact__value">{SALON["hours"]}, только по предварительной записи</span></div>
      <div class="fact"><span class="fact__label">Сайт</span><span class="fact__value">{DOMAIN}</span></div>
    </div>
    <p class="intro">Чего не делаем с логотипом: не растягиваем по одной оси, не перекрашиваем, не добавляем тени, обводки и градиенты, не ставим на пёстрое фото без тёмной подложки.</p>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="heading"><h2>Фотографии</h2><span class="rule"></span></div>
    <p class="intro">Появятся здесь, когда снимем парикмахерскую и мастеров. Тогда рекламщикам не придётся ничего просить — всё будет лежать на этой странице.</p>
  </div>
</section>
</main>

{CALLBAR.format(phone=SALON["phone"])}

{FOOTER.format(base="", domain=DOMAIN)}

<script src="assets/js/app.js"></script>
</body>
</html>
"""


# ── спрайт иконок берём из index.html, чтобы он был в одном месте ───────
index_path = ROOT / "index.html"
index_html = index_path.read_text()
SPRITE = re.search(r'<!-- Иконки.*?</svg>', index_html, re.S).group(0)

if __name__ == "__main__":
    # карточки на главной
    a = index_html.index("<!-- team:start -->") + len("<!-- team:start -->")
    b = index_html.index("<!-- team:end -->")
    index_path.write_text(index_html[:a] + "\n" + team_grid() + "\n      " + index_html[b:])

    # страницы мастеров
    out = ROOT / "masters"
    out.mkdir(exist_ok=True)
    for m in MASTERS:
        (out / f'{m["slug"]}.html').write_text(page(m))

    (ROOT / "media.html").write_text(media_page())

    # карта сайта
    urls = [f"https://{DOMAIN}/"] + [f'https://{DOMAIN}/masters/{m["slug"]}.html' for m in MASTERS]
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"  <url><loc>{u}</loc><changefreq>monthly</changefreq>"
                  f"<priority>{'1.0' if i == 0 else '0.7'}</priority></url>\n"
                  for i, u in enumerate(urls))
        + "</urlset>\n")
    print(f"собрано: {len(MASTERS)} страниц мастеров, карточки на главной, sitemap.xml")
