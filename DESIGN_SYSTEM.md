# Edan & Sherr Design System v2 (Bold Modern Export)

## 1. Brand Principles
- **Origin-first credibility:** Make Southern Kaduna provenance explicit.
- **Procurement clarity:** Lead with proof, specs, and process control.
- **Export confidence:** Every major section should answer a buyer-risk question.
- **Human + industrial balance:** Warm agricultural story with disciplined B2B structure.

## 2. Layout Grid System
- **Desktop container:** `1200px` max content width.
- **Horizontal gutter:** fluid, from `20px` to `64px` depending on viewport.
- **Section rhythm:** large alternating blocks for clear reading cadence.
- **Default grids:**
  - Hero: `2-column asymmetric (1.1 / 0.9)`
  - Content sections: `2-column narrative + visual`
  - Product/feature systems: `3-column` on desktop, `1-column` on mobile.

## 3. Spacing Scale
- Core spacing tokens:
  - `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `56px`, `72px`, `96px`, `120px`
- Section utility:
  - `section-space` uses responsive `64px` to `120px` vertical spacing.
- Card spacing:
  - compact cards: `16px` to `20px`
  - feature cards: `20px` to `28px`

## 4. Typography Hierarchy
- **Display font:** `Sora` (headlines and section titles)
- **Body/UI font:** `Manrope` (paragraphs, navigation, metadata)

### Type roles
- `display-title`: homepage hero headline
- `page-title`: inner-page hero title
- `section-title`: major section heading
- `kicker`: section eyebrow label (uppercase tracking)
- `section-copy`: long-form supporting text

### Rules
- Use one display line and one supporting paragraph per section intro.
- Keep paragraph width to readable measure (`<= 68ch`).
- Avoid heavy all-caps outside labels/metadata.

## 5. Color Token Rules
- **Primary dark family:** `ink-*` for structure, headings, dark surfaces.
- **Primary warm family:** `sand-*` for backgrounds and contrast control.
- **Logo accent family A:** `copper-*` mapped to the logo berry (`#c0345f`) for CTA/emphasis.
- **Logo accent family B:** `olive-*` mapped to the logo green (`#75a85d`) for trust/quality cues.

### Usage constraints
- Large backgrounds: `sand` or `ink` only.
- Primary action buttons: berry (`copper`) only.
- Supporting semantic markers: `olive`.
- Never use accent colors as full-page backgrounds.

### Depth rule
- Remove decorative shadows from cards and primary controls; rely on spacing, borders, and color contrast for hierarchy.

## 6. Component Anatomy Contracts

### Navbar
- Top utility strip (tagline + direct contact)
- Sticky main bar with route navigation
- Single primary CTA: `Request RFQ`
- Mobile drawer with same IA and CTA parity

### Hero
- Eyebrow + statement headline + procurement subtitle
- Primary CTA + secondary CTA
- Right-column image block
- Immediate trust metrics band below

### Trust Metrics
- Four concise trust statements
- Value first, explanation second
- Carded format with equal visual weight

### Capability Grid
- Four modules:
  - sourcing
  - processing
  - quality assurance
  - procurement support

### Product Card (Spec-first)
- Product category/status label
- Product name + concise summary
- Technical specification rows
- Typical uses chips
- Pipeline products visually distinguished from active products

### Standards / Certification Timeline
- Current controls
- In-progress milestone
- Next milestone
- Each item includes status and plain-language implications for buyers

### Contact / RFQ CTA
- Three-step procurement flow
- Direct channels (email, phone, address)
- Actions must be executable and non-placeholder

### Footer
- Procurement CTA strip
- Navigation + contact details
- Legal/business identity lockup

## 7. Motion Rules
- Motion is supportive, not decorative.
- Allowed:
  - subtle hover lift on buttons/cards
  - smooth color transitions on interactive elements
  - sticky header state transitions
- Avoid:
  - continuous looping animations
  - large parallax effects
  - aggressive entrance choreography that delays readability

## 8. Accessibility Rules
- Visible keyboard focus (`:focus-visible`) on all interactive elements.
- Maintain semantic heading order (`h1 -> h2 -> h3`).
- Provide skip link to main content.
- Ensure icon-only controls have `aria-label`.
- Preserve sufficient text/background contrast on light and dark surfaces.
- Use descriptive alt text for product and origin images.

## 9. Image Direction
- Keep core brand images from existing site where possible.
- Use `public/images/v2/` with deterministic names.
- Image priorities:
  - origin/farm credibility
  - product clarity
  - process/professionalism
- Recommended aspect ratios:
  - hero: `4:5` or `16:10`
  - product cards: `4:3`
  - editorial/founder: `4:5`

## 10. Copy Policy
- Keep business meaning and factual claims intact.
- Apply **light polish only**:
  - grammar and readability improvements
  - clearer procurement wording
  - no inflation of certifications, capacities, or market claims
