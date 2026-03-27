# Edan & Sherr — Design System Reference

## Brand Identity

**Company:** Edan & Sherr Limited — Nigerian premium ginger agro-processor
**Tagline:** Rooted in Nigeria. Crafted for the world.
**Audience:** International B2B buyers, distributors, food processors
**Tone:** Confident, warm, internationally refined, earthy luxury

---

## Colors

| Token          | Hex       | Usage                                      |
| -------------- | --------- | ------------------------------------------ |
| `charcoal`     | `#3a3335` | Primary text, dark backgrounds, headings   |
| `orange`       | `#f78154` | Primary CTA, accents, section labels       |
| `green`        | `#75a85d` | Nature/growth, tags, secondary accents     |
| `pink`         | `#e2c0d3` | Soft backgrounds, decorative              |
| `berry`        | `#b4436c` | Tertiary accent, status badges             |
| `cream`        | `#faf7f4` | Page background                            |
| `ivory`        | `#f5f1ec` | Card/section alternate background          |
| `white`        | `#ffffff` | Cards, content areas                       |

Each color has a full scale (50–950) in Tailwind for tinting.

### Usage rules
- **Backgrounds** alternate between `cream`, `white`, and `charcoal` (for dark sections)
- **Text** is `charcoal` for headings, `charcoal-600` for body, `muted` for captions
- **Orange** is ONLY for CTAs, links, and section labels — never for large fills
- **Green** is for tags, nature imagery accents, and the `&` in the logo
- **Berry/Pink** are used sparingly as supporting accents

---

## Typography

| Token          | Font               | Weight    | Usage                    |
| -------------- | ------------------ | --------- | ------------------------ |
| `font-display` | DM Serif Display   | 400, ital | Headings, hero text      |
| `font-body`    | Outfit             | 300–700   | Body, UI, labels, nav    |

### Scale

- `text-display-xl` → Hero (one per page max)
- `text-display-lg` → Section headings (h1)
- `text-display-md` → Sub-section headings (h2)
- `text-heading-lg/md/sm` → Card titles, feature titles
- `text-body-lg` → Lead paragraphs under section headings
- `text-body-md` → Standard body text
- `text-body-sm` → Smaller UI text
- `text-label-md` → Section labels (uppercase, tracked)
- `text-caption` → Image captions, footnotes

### Rules
- Never use more than 2 font families on any page
- Section labels are ALWAYS `text-label-md uppercase text-orange tracking-widest`
- Hero text uses `font-display` with italic (`<em>`) for emphasis word
- Body paragraphs use `font-body text-charcoal-600` — NEVER pure black

---

## Spacing & Layout

- **Page max-width:** `max-w-site` (1280px)
- **Section vertical padding:** `py-section-y` (clamp 80–140px)
- **Container:** `container-site` class (max-width + horizontal padding)
- **Content max-width:** `max-w-content` (720px) for readable text blocks
- **Grid gap:** typically `gap-6` to `gap-10`
- **Generous whitespace** — when in doubt, add more space, not less

---

## Components

### Buttons
- `btn-primary` → Orange fill, white text, rounded-full, shadow glow
- `btn-secondary` → Transparent, charcoal text, subtle border, hover turns green
- `btn-ghost` → No border, orange text, hover gets light bg

### Cards
- `card` → White bg, rounded-2xl, subtle border
- `card-hover` → Same + lift on hover with shadow

### Tags
- `tag-green` → Green bg tint, green text
- `tag-orange` → Orange bg tint, orange text
- `tag-berry` → Berry bg tint, berry text

### Image frames
- `img-frame` → Overflow hidden, rounded-xl, contains object-cover img

### Link with arrow
- `link-arrow` → Orange text, arrow icon, gap increases on hover

---

## Section Pattern

Every page section follows this rhythm:

```
<section className="py-section-y bg-[cream|white|charcoal]">
  <div className="container-site">
    <p className="section-label">Label Text</p>
    <h2 className="text-display-md text-balance">Heading</h2>
    <p className="section-body mt-5">Description paragraph</p>
    <!-- content -->
  </div>
</section>
```

---

## Image Guidelines

- Use REAL photography — ginger roots, farm landscapes, processing facilities, soil close-ups
- Unsplash search terms: "ginger root", "ginger farm", "spice processing", "nigerian agriculture", "red soil farm", "dried ginger", "ginger powder", "spice market"
- Images should feel warm, earthy, natural-light — NOT stock-photo sterile
- Aspect ratios: Hero (16:9 or 4:5), Product cards (4:3 or 1:1), About (3:4 portrait)
- Always wrap in `img-frame` for consistent rounded corners

---

## Do / Don't

### DO
- Use generous whitespace between sections
- Let images breathe — full-width or asymmetric grids
- Keep text blocks narrow (max-w-content)
- Use the section-label → heading → body paragraph pattern
- Make CTAs prominent with orange
- Use subtle animations (fade-up on scroll)

### DON'T
- Use emoji as icons (use Lucide React icons or simple SVGs)
- Use gradient backgrounds
- Use colored fills on large areas (keep it cream/white/charcoal)
- Center-align body paragraphs (left-align, only center headings when appropriate)
- Stack more than 3 colors in one section
- Use rounded-full on cards (only on buttons and tags)
- Use decorative borders or excessive drop shadows
