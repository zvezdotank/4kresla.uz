#!/usr/bin/env python3
"""Собирает логотип «Четыре кресла» в файлы для сайта и для рекламщиков.

Текст переводится в кривые шрифтом PT Sans Narrow (tools/fonts) — файлы
открываются одинаково везде, шрифт устанавливать не нужно. Ножницы
нарисованы обводкой в 8 единиц на квадрате 100×100: без мелких деталей,
режется из плёнки и композита.

Запуск: python3 tools/logo.py   (PNG требуют Google Chrome)
Результат: assets/logo/*.svg, assets/logo/*.png, favicon.svg, apple-touch-icon.png
"""
import pathlib
import subprocess
import zipfile

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "logo"
FONTS = ROOT / "tools" / "fonts"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

INK, BRASS, PAPER = "#111111", "#c1a054", "#ffffff"
_cache = {}


def font(bold=True):
    key = "b" if bold else "r"
    if key not in _cache:
        name = "PT_Sans-Narrow-Web-Bold.ttf" if bold else "PT_Sans-Narrow-Web-Regular.ttf"
        f = TTFont(FONTS / name)
        _cache[key] = (f, f.getGlyphSet(), f.getBestCmap(), f["head"].unitsPerEm)
    return _cache[key]


def measure(text, size, tracking=0.0, bold=True):
    _, gs, cmap, upem = font(bold)
    w = sum(gs[cmap[ord(c)]].width for c in text if ord(c) in cmap) * size / upem
    return w + tracking * max(0, len(text) - 1)


def text_paths(text, x, baseline, size, tracking=0.0, bold=True, fill=INK, anchor="start"):
    """Текст в кривых. anchor: start | middle | end."""
    _, gs, cmap, upem = font(bold)
    total = measure(text, size, tracking, bold)
    if anchor == "middle":
        x -= total / 2
    elif anchor == "end":
        x -= total
    s = size / upem
    out = [f'<g fill="{fill}">']
    cur = x
    for ch in text:
        gname = cmap.get(ord(ch))
        if gname is None:
            continue
        pen = SVGPathPen(gs)
        gs[gname].draw(pen)
        d = pen.getCommands()
        if d:
            out.append(f'<path transform="translate({cur:.2f} {baseline:.2f}) scale({s:.5f} {-s:.5f})" d="{d}"/>')
        cur += gs[gname].width * s + tracking
    out.append("</g>")
    return "\n".join(out), total


def scissors(x, y, size, color, stroke=8):
    """Ножницы в квадрате size×size, левый верхний угол в (x,y)."""
    k = size / 100
    return (f'<g transform="translate({x} {y}) scale({k:.5f})" fill="none" stroke="{color}" '
            f'stroke-width="{stroke}" stroke-linecap="round" stroke-linejoin="round">'
            '<path d="M34 70 50 46 57 10"/><path d="M66 70 50 46 43 10"/>'
            '<circle cx="30" cy="79" r="10"/><circle cx="70" cy="79" r="10"/></g>')


def svg(w, h, body, bg=None):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" '
            f'viewBox="0 0 {w} {h}">\n{rect}\n{body}\n</svg>\n')


# ── горизонтальный логотип ──────────────────────────────────────────────
def horizontal(ink=INK, muted="#4a4a4a", bg=None):
    pad, mark = 24, 96
    tx = pad + mark + 34
    w_top = measure("ПАРИКМАХЕРСКАЯ", 42, 3.2)
    w_name = measure("ЧЕТЫРЕ КРЕСЛА", 28, 7.5)
    w_year = measure("С 1972 ГОДА", 16, 2.2, False)
    block = max(w_top, w_name + 34 + w_year)   # год не должен наезжать на название
    top, _ = text_paths("ПАРИКМАХЕРСКАЯ", tx, 66, 42, 3.2, True, ink)
    name, _ = text_paths("ЧЕТЫРЕ КРЕСЛА", tx, 122, 28, 7.5, True, ink)
    year, _ = text_paths("С 1972 ГОДА", tx + block, 122, 16, 2.2, False, muted, "end")
    W, H = tx + block + pad, 150
    body = "\n".join([
        scissors(pad, 22, mark, ink),
        top,
        f'<rect x="{tx}" y="80" width="{block:.1f}" height="3" fill="{BRASS}"/>',
        name, year,
    ])
    return svg(round(W), H, body, bg)


# ── вертикальный логотип ────────────────────────────────────────────────
def vertical(ink=INK, name_color=INK, muted="#4a4a4a", bg=None):
    W = 340
    cx = W / 2
    top, w_top = text_paths("ПАРИКМАХЕРСКАЯ", cx, 176, 34, 3.2, True, ink, "middle")
    name, _ = text_paths("ЧЕТЫРЕ КРЕСЛА", cx, 228, 28, 7.5, True, name_color, "middle")
    year, _ = text_paths("С 1972 ГОДА", cx, 258, 16, 4, False, muted, "middle")
    body = "\n".join([
        scissors(cx - 54, 20, 108, ink),
        top,
        f'<rect x="{cx - w_top / 2:.1f}" y="190" width="{w_top:.1f}" height="3" fill="{BRASS}"/>',
        name, year,
    ])
    return svg(W, 282, body, bg)


# ── знак ────────────────────────────────────────────────────────────────
def mark(color=INK, bg=None, size=200):
    return svg(size, size, scissors(0, 0, size, color), bg)


def png(svg_path, out_path, width, transparent=True):
    """Рендерит SVG в PNG заданной ширины, высота — по пропорциям файла."""
    src = svg_path.read_text()
    vw = float(src.split('width="')[1].split('"')[0])
    vh = float(src.split('height="')[1].split('"')[0])
    height = round(width * vh / vw)
    wrapper = svg_path.with_suffix(".render.html")
    wrapper.write_text('<!DOCTYPE html><meta charset="utf-8">'
                       '<style>html,body{margin:0;padding:0}svg{display:block;width:100vw;height:auto}</style>'
                       + src)
    args = [CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
            f"--window-size={width},{height}", f"--screenshot={out_path}",
            "--virtual-time-budget=3000"]
    if transparent:
        args.append("--default-background-color=00000000")
    args.append(wrapper.as_uri())
    subprocess.run(args, check=True, capture_output=True)
    wrapper.unlink()


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    files = {
        "4kresla-gorizontalnyy-chernyy.svg": horizontal(),
        "4kresla-gorizontalnyy-belyy.svg": horizontal(PAPER, "rgba(255,255,255,.6)"),
        "4kresla-vertikalnyy-chernyy.svg": vertical(),
        "4kresla-vertikalnyy-belyy.svg": vertical(PAPER, BRASS, "rgba(255,255,255,.6)"),
        "4kresla-znak-chernyy.svg": mark(),
        "4kresla-znak-belyy.svg": mark(PAPER),
        "4kresla-znak-kvadrat.svg": mark(BRASS, INK),
    }
    for name, data in files.items():
        (OUT / name).write_text(data)

    # фавикон и иконка для телефона
    (ROOT / "favicon.svg").write_text(mark(BRASS, INK, 100))

    png(OUT / "4kresla-znak-kvadrat.svg", ROOT / "apple-touch-icon.png", 180, False)
    for stem in ("4kresla-gorizontalnyy-chernyy", "4kresla-gorizontalnyy-belyy",
                 "4kresla-vertikalnyy-chernyy", "4kresla-vertikalnyy-belyy"):
        png(OUT / f"{stem}.svg", OUT / f"{stem}.png", 2000)
    png(OUT / "4kresla-znak-kvadrat.svg", OUT / "4kresla-znak-kvadrat.png", 1024, False)
    # один архив для рекламщиков: всё сразу, чтобы не собирать по файлу
    zip_path = OUT / "4kresla-logo.zip"
    if zip_path.exists():
        zip_path.unlink()
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(OUT.iterdir()):
            if f.suffix in (".svg", ".png"):
                z.write(f, f"4kresla-logo/{f.name}")
        z.writestr("4kresla-logo/ЧИТАЙ-МЕНЯ.txt",
                   "Логотип парикмахерской «Четыре кресла», Ташкент, ул. Сайхун, 166.\n\n"
                   "SVG — вектор, для печати и вывесок, текст переведён в кривые,\n"
                   "шрифт устанавливать не нужно.\n"
                   "PNG — растр с прозрачным фоном, для соцсетей и документов.\n\n"
                   "Цвета: чернильный #111111, латунь #c1a054, бумага #ffffff.\n"
                   "Файлы «-belyy» — для тёмного фона, «-chernyy» — для светлого.\n\n"
                   "Логотип не растягивать по одной оси, не менять цвета,\n"
                   "не добавлять тени и обводки.\n")
    print("логотипы собраны:", ", ".join(sorted(p.name for p in OUT.iterdir())))
