# Raktdrishti

[![Project status](https://img.shields.io/badge/status-prototype-blue)]()
[![License](https://img.shields.io/badge/license-Unlicense-green)]()

A student-built, landing-page prototype exploring accessible, point-of-care
hemoglobin screening. Raktdrishti combines a small blood-sample testing concept
with a digital interface to deliver fast, affordable, and easy-to-read results —
without requiring a full laboratory setup.

> **Medical disclaimer:** Raktdrishti is an educational prototype for screening
> and research evaluation. It is not a clinically validated medical device and
> must not be used as a substitute for professional medical advice, diagnosis,
> or laboratory testing.

---

## Quick start

```bash
# Open the site directly in a browser
open index.html

# Or serve it locally (any static server works)
python3 -m http.server 8080
# then visit http://localhost:8080
```

No build step, no dependencies, and no package manager are required. The page is
pure HTML/CSS/JS, so you can open `index.html` as-is.

---

## Project structure

```
.
├── index.html                 # Landing page (sections, markup, embedded demo data)
├── assets/
│   ├── css/
│   │   └── style.css          # All design tokens, layout, and component styles
│   ├── javascript/
│   │   └── main.js            # UI interactions: menu, scroll header, reveal animations, icons
│   └── img/
│       └── favicon.svg.svg     # Favicon used in the browser tab and footer
```

## Sections

| Section       | ID             | What it covers                                                   |
|---------------|----------------|------------------------------------------------------------------|
| Hero          | `home`         | Tagline, lead copy, key attributes, prototype visual             |
| Problem       | `problem`      | Why anemia testing is delayed, expensive, or inaccessible         |
| Solution      | `solution`     | Raktdrishti concept and its key features                         |
| How it works  | `how-it-works` | Four-step prototype workflow                                     |
| Features      | `features`     | Access, speed, portability, human-centered design                |
| Prototype     | `prototype`    | Dashboard-style UI with demo readings and a reference scale      |
| Technology    | `technology`     | Architecture: sample → chamber → controller → processing → display → storage |
| Impact        | `impact`       | Vision, stats, and intended use cases                            |
| Team          | `team`         | Four student roles (3 people currently shown)                    |
| Final CTA     | —              | Call to action and contact                                      |
| Site footer   | —              | Links, disclaimers, copyright                                    |

---

## Where to add data

The URL of record for this repository is **not** yet set, so add data wherever
you want your team of two to feed the page from. Prefer the files listed below.

### 1. Hero copy and key attributes — `index.html`

- `assets/css/style.css`
- `assets/css/style.css`
- `assets/css/style.css`
- `assets/css/style.css`

### 2. Dashboard demo data — `index.html`

Everything under the `id="prototype"` section is hardcoded demo data. To change
it, edit these values:

- **Patient meta row** (`.patient-meta span`): `SAMPLE ID`, `DATE`, `TEST TIME`
- **Result row** (`.result-row`): `HEMOGLOBIN ESTIMATE` and the `Requires Follow-up` tag
- **Reference scale** (`.hb-scale`): `Lower`, `Configured range`, `Higher`
- **Chart data**: the `<path>` `d` attributes inside `.line-chart svg` define the
  sample readings line chart
- **Legend**: `.legend span` defines the three status colors

### 3. Team roster — `index.html`

The `.team-grid` section contains the four `<article class="team-card">`
blocks. Replace the placeholder names (`Team Member`, `AS`, `PS`, `RK`, `MK`)
with real names, roles, and short bios.

### 4. Footer and contact — `index.html`

- **Contact email:** `mailto:raktdrishti@gmail.com` in the final CTA, and
  `team@raktdrishti.in` in the footer
- **Social links:** the three `<a href="#">` items in the footer (`LinkedIn`,
  `GitHub`, `Instagram`)
- **Copyright year:** `© 2026 Raktdrishti ...` in `.footer-bottom`

### 5. Design tokens (colors, fonts, shadows) — `assets/css/style.css`

All brand colors, font families, spacing, and shadows live in the `:root` block
at the top of `assets/css/style.css`. Changing a token updates the whole site.

### 6. Interactions and animations — `assets/javascript/main.js`

- Mobile menu open/close
- Sticky header on scroll
- `[data-icon]` icon rendering (inline SVG)
- Scroll-reveal animations (`.reveal` + `[data-stagger]`)
- Dashboard title text and accessible `aria-label` placeholders

---

## Adding a new section (optional)

1. Copy an existing `<section class="section" id="...">` block in `index.html`.
2. Add `id="your-section"` and the matching anchor link in `.primary-nav`.
3. Style it inside `assets/css/style.css` (or reuse a theme class like
   `.problem-section`, `.impact-section`, `.technology-section`).
4. Add a link to it in `assets/javascript/main.js` if needed for menu behavior.

---

## Tech stack

- **HTML5** — semantic markup and page structure
- **CSS3** — custom properties, flexbox/grid, responsive breakpoints
- **Vanilla JavaScript** — UI interactions only; no frameworks

---

## Roadmap and next milestones

- [ ] Replace hardcoded dashboard values with live API readings
- [ ] Add a sample-upload and result-history page
- [ ] Build out a real embedded-controller hardware mockup
- [ ] Add a CI check for broken internal anchor links
- [ ] Expand the team section to all contributors

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes.
4. Open a pull request.

Please keep claims about the prototype limited to educational and screening
research use. Do not present displayed values as clinically valid.

---

## Contact

- **Email:** raktdrishti@gmail.com
- **Prototype disclaimer:** Raktdrishti is a student research and educational
  prototype. It is not a clinically validated medical device.

---

## License

This project is provided as-is for learning and research.

