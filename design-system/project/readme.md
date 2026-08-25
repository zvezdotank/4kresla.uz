# Парикмахерская нормального человека — Design System

A brand and UI system for a men-only barbershop chain: black-and-white photography,
brass accent, condensed uppercase Cyrillic type, square corners, no ornament.

## Sources given

- `uploads/700334623b00f2d033fdedb30eec0f7c.jpg` — a full-page screenshot of the salon's
  one-page website (nav, hero, welcome copy, team, price list, interior photo, gallery strip,
  contacts, map, footer). This is the **only** source supplied.
- Company description supplied in the brief: "Парикмахерская нормального человека".
- No codebase, no Figma file, no font files, no logo file, no slide template were provided.
  Everything below is derived from the screenshot plus the brief; values marked *approximated*
  were sampled from the image rather than read from source code.

The screenshot's own header used a stock "BarberShop" script logo with a razor glyph. That mark
belongs to the template, not to this brand, so **no logo asset exists in this system**. The
brand name is set in type instead — see `Wordmark`.

## Products / surfaces

One surface: the public single-page website (desktop, ~1140px content column) with an online
booking dialog. No app, no admin, no docs site in the source.

---

## CONTENT FUNDAMENTALS

Russian, informal-plural ("мы" / "вы" implied, never "ты"). The voice is blunt, anti-marketing
and slightly proud: it defines the brand by what it is *not*.

- **Person:** first-person plural for the salon ("Мы просто стрижём мужчин"), second person only
  in the imperative CTA ("Записаться онлайн").
- **Structure:** short declaratives, one idea per sentence, listed as negations then a flat claim.
  Source example: "Это барбершоп, а не салон красоты… У нас нет маникюра и мы не камуфлируем
  седину. Мы просто стрижём мужчин. И делаем это лучше всех."
- **Casing:** every heading, nav item, button, price row and label is UPPERCASE with wide
  tracking. Body copy is sentence case.
- **Headings** are 1–3 words, no trailing punctuation except the welcome exclamation:
  "ДОБРО ПОЖАЛОВАТЬ!", "НАША КОМАНДА", "ПРАЙС-ЛИСТ", "КОНТАКТЫ".
- **Names:** masters are listed "Фамилия Имя", uppercase, no role titles ("ИВАНОВ МИХАИЛ").
- **Prices:** whole rubles with the word spelled out — "1200 РУБЛЕЙ". Never ₽, never decimals,
  never "от".
- **Contacts** are labelled in uppercase with the value in sentence case underneath:
  "ЕЖЕДНЕВНО / с 9:00 до 20:00".
- **No emoji. No exclamation stacking. No superlatives beyond the one in the intro. No jargon,
  no English loanwords except "барбершоп".**

## VISUAL FOUNDATIONS

- **Colour.** Two families only: an ink neutral ramp (#111 → #fff) and one brass accent
  (#c1a054, darker on hover, #8f7126 on press). Brass appears only on CTAs, rules, icons,
  active nav underline and dialog top edge — never as a large fill. Status colours exist purely
  for form feedback. There are no other hues, no gradients as decoration.
- **Type.** Display: Oswald 700, uppercase, letter-spacing .14em (section titles 24px, hero
  display 44px). Micro-labels: Oswald 11px at .18em. Body: PT Sans 15px / 1.7, centered in
  intro paragraphs, max ~78 characters. Script: Marck Script for the wordmark and footer credit
  only — never for buttons or body. *All three are Google Fonts substitutions — see Caveats.*
- **Layout.** 1140px container, 20px gutters, 80px vertical section padding (48px tight),
  24px grid gap. Full-bleed photo bands break the container edge to edge. Team = 5 equal
  columns; prices = 2 columns × 3 rows; gallery = 5 equal tiles with a 12px gap. Only the header
  is fixed/sticky; nothing else floats.
- **Backgrounds.** Alternating white and a very light grey band (#f6f6f6) for content sections;
  near-black (#1c1c1c) for the header and #111 for the footer. No textures, no patterns, no
  hand-drawn illustration, no decorative gradients.
- **Photography.** Always black and white — `filter: grayscale(1) contrast(1.06)`. Documentary,
  in-salon, mid-work: hands, clippers, beards, mirrors, chairs. Cool-neutral grey, medium
  contrast, no grain overlay, no colour tint, no vignette. Photos are square-cornered, edge to
  edge, never framed or shadowed.
- **Overlays.** Over hero photography, a flat 42% ink scrim (`--overlay-photo`); modals use 66%.
  A bottom protection gradient (`--scrim-bottom`) is available for captions on photos. Content on
  photos is centred and stacked, never left-aligned in a capsule.
- **Transparency & blur.** Blur is never used. Transparency only for scrims, inverse borders
  (rgba(255,255,255,.22)) and muted inverse text (rgba(255,255,255,.7)).
- **Corners & borders.** Effectively square: radius 0–2px. Pills (`--radius-pill`) only for the
  36px icon circles and the hero scroll capsule. Borders are 1px hairlines (#e2e2e2), 2px for
  brass rules, 3px for the dialog's brass top edge.
- **Cards.** Flat. A "card" is a white block with a hairline border and at most
  `0 1px 3px rgba(17,17,17,.10)`; photos and team members have no border, no radius, no shadow at
  all. Modals get `0 6px 20px rgba(17,17,17,.14)`. There is no elevation ladder beyond these two.
- **Motion.** 120ms micro, 220ms standard, 420ms photo zoom; `cubic-bezier(.4,0,.2,1)`.
  Only colour transitions, opacity, and a 1.04 photo zoom on hover. No bouncing, no sliding
  entrances, no parallax, no scroll-triggered reveals.
- **Hover.** Brass fills darken one step; outline buttons fill with brass and flip text to ink;
  nav links turn brass; photos zoom 1.04 and gallery tiles drop to 78% opacity; text links
  darken to `--brass-700`.
- **Press.** `translateY(1px)` plus the darkest brass. No scale-down, no ripple.
- **Focus.** 2px brass outline, 2px offset; form fields swap their hairline for brass.
- **Motifs.** The brass 56×2px rule under headings; the brass leader rule between a price label
  and its value; hairline-flanked uppercase taglines ("— МУЖСКИЕ СТРИЖКИ —"); circled thin-line
  icons in the contacts band.

## ICONOGRAPHY

The source contains no icon font, sprite or SVG assets — only rasterised thin line glyphs inside
the screenshot (clock, envelope, phone, map pin, three circled social marks, a razor mark in the
nav, a three-chevron scroll capsule, scissors).

- **Substitution (flagged):** the system uses **Lucide** from CDN
  (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.js`) as the closest match — same thin
  single-weight outline style. Stroke 1.5px, never filled, sized 14–22px, coloured brass or
  `currentColor`. Wrapped by the `Icon` component so the stroke weight stays uniform.
- Names in use: `scissors`, `clock`, `mail`, `phone`, `map-pin`, `x`, `instagram`,
  `facebook`, `twitter`.
- Icons in the contacts band sit inside a 34px brass hairline circle. Everywhere else they are bare.
- **No emoji, ever.** Unicode characters are not used as icons; the only non-icon glyphs are the
  em-dash rules flanking the tagline, drawn as 1px spans rather than characters.
- If a needed glyph is missing from Lucide, use plain type or a 1–2px span rule instead of drawing
  a custom SVG.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry point — `@import`s only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` |
| `guidelines/` | 18 specimen cards: Colors, Type, Spacing, Brand |
| `components/` | Reusable primitives (below) |
| `ui_kits/site/` | Interactive recreation of the salon website |
| `templates/salon-landing/` | Copyable template of the landing page (Design Component) |
| `assets/photos/` | Black-and-white photos cropped from the supplied screenshot |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

### Components

- **core** — `Button`, `SectionHeading`, `Rule`, `Badge`, `Icon`
- **forms** — `Field`, `Input`, `Select`, `Checkbox`, `BookingForm`
- **content** — `MasterCard`, `PriceItem`, `GalleryTile`, `ContactItem`, `Wordmark`
- **navigation** — `NavBar`, `Footer`, `ScrollCue`
- **feedback** — `Dialog`, `Notice`

Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Intentional additions** (not literally present as components in the source, but required to
build its screens): `Icon` (Lucide wrapper — the source shipped no icon set), `Field`,
`Checkbox`, `Notice` and `Dialog` (the source shows a "ЗАПИСАТЬСЯ ОНЛАЙН" CTA but not the
booking UI it opens; these are the minimum needed to render it in the brand's language),
`Wordmark` (stands in for the missing logo file).

### UI kits

### Templates

- `templates/salon-landing/SalonLanding.dc.html` — «Сайт салона — главная», the full landing page assembled from the components, for consuming projects to copy.

- `ui_kits/site/` — Главная страница: sticky nav, hero with booking CTA, welcome, team, prices,
  full-bleed interior photo, gallery strip with lightbox, contacts, map, footer.

## Caveats

1. **Fonts are substitutions.** No font files were supplied; Oswald / PT Sans / Marck Script are
   the nearest Google Fonts to the screenshot. Send the real font files to replace them.
2. **Colours and metrics are sampled from a JPEG**, so brass and greys are approximations.
3. **No logo asset.** Nothing was drawn or reconstructed; the brand name is set in type.
4. **Photos are low-resolution crops** of the supplied screenshot, for layout only.
