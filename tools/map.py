#!/usr/bin/env python3
"""Рисует карту вокруг парикмахерской по данным OpenStreetMap в стилистике сайта.

Готовый SVG вставляется прямо в index.html между метками <!-- map:start --> и
<!-- map:end -->: так подписи улиц набираются шрифтами сайта (Oswald), карта
не тянет ни одного постороннего запроса и не зависит от чужого виджета.

Данные Overpass кэшируются в tools/osm.json — повторный запуск рисует из кэша.
Требование лицензии OSM: подпись «© OpenStreetMap» под картой обязательна,
она стоит в разметке страницы.

Запуск: python3 tools/map.py
"""
import json
import math
import pathlib
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "tools" / "osm.json"

LAT, LON = 41.279101, 69.305078
NAME = "Четыре кресла"

# ── палитра сайта: только нейтральный пепел и латунь ────────────────────
BG = "#f6f6f6"
AREA = "#eeeeee"
WATER = "#e6e9ea"
BUILDING = "#e0e0e0"
BUILDING_NEAR = "#c9c9c9"
ROAD_FILL = "#ffffff"
ROAD_CASING = "#dcdcdc"
RAIL = "#d5d5d5"
INK = "#111111"
MUTED = "#9b9b9b"
BRASS = "#c1a054"

# класс дороги → (ширина полотна в метрах, обводка, слой)
ROADS = {
    "primary":        (16, 2.2, 3),
    "primary_link":   (10, 1.8, 3),
    "secondary":      (13, 2.0, 3),
    "secondary_link":  (9, 1.6, 3),
    "tertiary":       (10, 1.8, 2),
    "residential":     (8, 1.4, 2),
    "living_street":   (7, 1.2, 1),
    "service":         (4, 0.0, 0),
    "unclassified":    (7, 1.2, 1),
    "pedestrian":      (5, 0.0, 0),
    "footway":         (2, 0.0, 0),
    "path":            (2, 0.0, 0),
}
LABELLED = {"primary", "secondary", "tertiary", "residential"}

# латиница рядом с русским текстом сайта выглядит инородно — основные улицы
# подписываем по-русски вручную
RU_NAMES = {
    "Farg'ona Yo'li": "Ферганское шоссе",
    "Sayxun ko'chasi": "ул. Сайхун",
    "Yangizamon ko'chasi": "ул. Янгизамон",
    "Talimarjon ko'chasi": "ул. Талимаржон",
    "Mehrjon ko'chasi": "ул. Мехржон",
    "Obishir ko'chasi": "ул. Обишир",
    "Zarkent ko'chasi": "ул. Заркент",
    "Eski Sariko'l ko'chasi": "ул. Эски Сарикуль",
    "Olot ko'chasi": "ул. Алат",
}


def fetch(bbox):
    if CACHE.exists():
        return json.loads(CACHE.read_text())
    s, w, n, e = bbox
    q = f"""[out:json][timeout:90];
(
  way({s},{w},{n},{e})[highway];
  way({s},{w},{n},{e})[building];
  way({s},{w},{n},{e})[landuse~"^(grass|forest|meadow|recreation_ground|cemetery)$"];
  way({s},{w},{n},{e})[leisure~"^(park|garden|pitch|playground)$"];
  way({s},{w},{n},{e})[natural=water];
  way({s},{w},{n},{e})[waterway];
  way({s},{w},{n},{e})[railway];
);
out geom tags;"""
    req = urllib.request.Request(
        "https://overpass-api.de/api/interpreter", data=q.encode(),
        headers={"User-Agent": "barbershop-site-build/1.0"})
    data = json.loads(urllib.request.urlopen(req, timeout=120).read())
    CACHE.write_text(json.dumps(data))
    return data


def merc(lat, lon):
    return math.radians(lon), math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


def render(data, px_w, px_h, span_m):
    half_lon = span_m / 2 / (111_320 * math.cos(math.radians(LAT)))
    cx, cy = merc(LAT, LON)
    x0, _ = merc(LAT, LON - half_lon)
    x1, _ = merc(LAT, LON + half_lon)
    sx = px_w / (x1 - x0)

    def pt(lat, lon):
        x, y = merc(lat, lon)
        return (x - cx) * sx + px_w / 2, px_h / 2 - (y - cy) * sx

    m_per_px = span_m / px_w

    def visible(geom):
        for g in geom:
            x, y = pt(g["lat"], g["lon"])
            if -60 <= x <= px_w + 60 and -60 <= y <= px_h + 60:
                return True
        return False

    areas, buildings, rails = [], [], []
    road_layers = {0: [], 1: [], 2: [], 3: []}
    labels = {}
    mx, my = pt(LAT, LON)

    for el in data["elements"]:
        geom = el.get("geometry")
        if not geom or not visible(geom):
            continue
        t = el.get("tags", {})
        pts = [pt(g["lat"], g["lon"]) for g in geom]
        d = "M" + "L".join(f"{x:.1f} {y:.1f}" for x, y in pts)

        if "building" in t:
            buildings.append((d, pts))
        elif t.get("natural") == "water" or "waterway" in t:
            areas.append((d + "Z", WATER))
        elif "landuse" in t or "leisure" in t:
            areas.append((d + "Z", AREA))
        elif "railway" in t:
            if t["railway"] in ("rail", "light_rail", "subway"):
                rails.append(d)
        elif "highway" in t:
            spec = ROADS.get(t["highway"])
            if not spec:
                continue
            width_m, casing, layer = spec
            road_layers[layer].append((d, width_m / m_per_px, casing))
            name = t.get("name")
            if name and t["highway"] in LABELLED:
                if name in RU_NAMES:            # подписываем только то, чему нашли русское имя
                    labels.setdefault(RU_NAMES[name], []).append(pts)

    o = [f'<svg class="map__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {px_w} {px_h}" '
         f'preserveAspectRatio="xMidYMid slice" role="img" '
         f'aria-label="Карта: Ташкент, улица Сайхун, 166">',
         f'<rect width="{px_w}" height="{px_h}" fill="{BG}"/>']

    for d, fill in areas:
        o.append(f'<path d="{d}" fill="{fill}"/>')
    for d, pts in buildings:
        near = any(math.dist(p, (mx, my)) < 70 for p in pts)
        o.append(f'<path d="{d}Z" fill="{BUILDING_NEAR if near else BUILDING}"/>')
    for d in rails:
        o.append(f'<path d="{d}" fill="none" stroke="{RAIL}" stroke-width="2.5" stroke-dasharray="7 5"/>')

    for layer in (0, 1, 2, 3):
        for d, w, casing in road_layers[layer]:
            if casing:
                o.append(f'<path d="{d}" fill="none" stroke="{ROAD_CASING}" '
                         f'stroke-width="{w + casing * 2:.1f}" stroke-linecap="round" stroke-linejoin="round"/>')
        for d, w, casing in road_layers[layer]:
            o.append(f'<path d="{d}" fill="none" stroke="{ROAD_FILL}" '
                     f'stroke-width="{w:.1f}" stroke-linecap="round" stroke-linejoin="round"/>')

    # ── подписи улиц ─────────────────────────────────────────────────────
    def place(segments, blocked, pad=110):
        best = None
        for pts in segments:
            for a, b in zip(pts, pts[1:]):
                steps = max(2, int(math.dist(a, b) / 12))
                for k in range(steps + 1):
                    t = k / steps
                    x = a[0] + (b[0] - a[0]) * t
                    y = a[1] + (b[1] - a[1]) * t
                    if not (pad < x < px_w - pad and 40 < y < px_h - 40):
                        continue
                    if any(math.hypot(x - bx, y - by) < br for bx, by, br in blocked):
                        continue
                    dist = math.hypot(x - px_w / 2, y - px_h / 2)
                    if best is None or dist < best[0]:
                        ang = math.degrees(math.atan2(b[1] - a[1], b[0] - a[0]))
                        ang = ang - 180 if ang > 90 else (ang + 180 if ang < -90 else ang)
                        best = (dist, x, y, ang)
        return best

    def street_len(segs):
        return sum(math.dist(a, b) for pts in segs for a, b in zip(pts, pts[1:]))

    blocked = [(mx, my, 150)]
    placed = 0
    for name, segs in sorted(labels.items(), key=lambda kv: -street_len(kv[1])):
        spot = place(segs, blocked)
        if not spot:
            continue
        _, x, y, ang = spot
        blocked.append((x, y, 190))
        o.append(f'<text x="{x:.1f}" y="{y:.1f}" transform="rotate({ang:.1f} {x:.1f} {y:.1f})" '
                 f'text-anchor="middle" dominant-baseline="middle" font-size="12" '
                 f'font-family="PT Sans, sans-serif" fill="{MUTED}" letter-spacing="0.08em" '
                 f'paint-order="stroke" stroke="{BG}" stroke-width="4" stroke-linejoin="round">{name}</text>')
        placed += 1
        if placed >= 5:
            break

    # ── метка салона: чернильный круг с латунными ножницами ─────────────
    r = 22
    scissors = 'M34 70 50 46 57 10M66 70 50 46 43 10'   # тот же знак, что в логотипе
    o.append(f'<g transform="translate({mx:.1f} {my:.1f})">')
    o.append(f'<circle r="{r * 1.9:.1f}" fill="{INK}" opacity="0.10"/>')
    o.append(f'<circle r="{r}" fill="{INK}"/>')
    ls = r * 0.0155
    o.append(f'<g transform="translate({-50 * ls:.2f} {-46 * ls:.2f}) scale({ls:.4f})" '
             f'fill="none" stroke="{BRASS}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">'
             f'<path d="{scissors}"/><circle cx="30" cy="79" r="10"/><circle cx="70" cy="79" r="10"/></g>')
    o.append('</g>')
    o.append(f'<text x="{mx:.1f}" y="{my + r + 26:.1f}" text-anchor="middle" font-size="15" '
             f'font-family="PT Sans Narrow, sans-serif" font-weight="700" letter-spacing="0.14em" '
             f'fill="{INK}" paint-order="stroke" stroke="{BG}" stroke-width="5" '
             f'stroke-linejoin="round">{NAME.upper()}</text>')
    o.append(f'<text x="{mx:.1f}" y="{my + r + 46:.1f}" text-anchor="middle" font-size="12" '
             f'font-family="PT Sans, sans-serif" fill="{MUTED}" paint-order="stroke" '
             f'stroke="{BG}" stroke-width="4" stroke-linejoin="round">Сайхун, 166</text>')
    o.append('</svg>')
    return "\n".join(o)


if __name__ == "__main__":
    data = fetch((41.2755, 69.2985, 41.2827, 69.3117))
    svg = render(data, 1280, 420, span_m=620)
    page = ROOT / "index.html"
    html = page.read_text()
    a, b = html.index("<!-- map:start -->"), html.index("<!-- map:end -->")
    page.write_text(html[:a] + "<!-- map:start -->\n" + svg + "\n    " + html[b:])
    print("карта вписана в index.html:", len(svg), "байт")
