# UI kit — сайт салона

Single-page marketing site, recreated from the one supplied screenshot
(`uploads/700334623b00f2d033fdedb30eec0f7c.jpg`).

- `index.html` — interactive page: sticky nav scrolls to sections, hero CTA opens the booking dialog (form → success notice), gallery tiles open a lightbox.
- `sections.kit.jsx` — Hero, Welcome, Team, Prices, GalleryBand, Contacts (composed from the design-system components; no primitives re-implemented here).
- `booking-flow.kit.jsx` — booking dialog + gallery lightbox.

Section order and copy follow the source exactly: hero → добро пожаловать → наша команда → прайс-лист → full-bleed interior photo → gallery strip → контакты → map → footer.

Photos are crops of the source screenshot, so they are low-resolution. Replace with real studio photography before any production use.
