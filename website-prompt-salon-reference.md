# WEBSITE BUILD PROMPT
## Referensi: salonheleenhulsmann.nl
> Copy-paste prompt ini ke AI agent kamu untuk generate website dari referensi ini.

---

```
Build me a full website inspired by the design language of Salon Heleen Hülsmann
(https://www.salonheleenhulsmann.nl/). This is a high-end pre-loved designer fashion
showroom in Amsterdam. Analyze and replicate their aesthetic system precisely.

════════════════════════════════════════════
1. VISUAL & DESIGN SYSTEM
════════════════════════════════════════════

COLOR PALETTE (exact values — inspect from reference):
  --color-bg-primary:     #F5F2EE  /* warm off-white / linen tone, dominant background */
  --color-bg-dark:        #1A1A18  /* near-black, used on contact page & overlays */
  --color-text-primary:   #1A1A18  /* near-black for all body text */
  --color-text-light:     #FFFFFF  /* white text on dark sections */
  --color-accent:         #C8B89A  /* warm sand/taupe, subtle accent */
  --color-border:         #E0D9D0  /* very light warm gray for dividers */

  NOTE: The palette is intentionally restrained — NO bright colors, no gradients.
  The brand lives in warm neutrals. Do not introduce any colors outside this system.

TYPOGRAPHY PAIRING:
  - Heading font: "Cormorant Garamond" (Google Fonts) — elegant serif, high contrast
    strokes. Used for ALL large display text. Thin to regular weight (300–400).
  - Body font: "DM Sans" (Google Fonts) — clean humanist sans-serif. Weight 300–400.
  - Both are available on Google Fonts. Import both.

TYPOGRAPHY SCALE:
  - Hero / Display H1:  clamp(64px, 10vw, 120px), line-height: 0.9, font-weight: 300
    → Text is BIG, dramatic, stacked vertically (multi-line, one word per line)
  - Section Heading H2: clamp(40px, 6vw, 72px), font-weight: 300, letter-spacing: -0.02em
  - Subheading H3:      clamp(18px, 2.5vw, 24px), font-weight: 400, letter-spacing: 0.05em
                        → UPPERCASE for subheadings (text-transform: uppercase)
  - Body paragraph:     16–18px, font-weight: 300, line-height: 1.7
  - Nav links:          13–14px, font-weight: 400, letter-spacing: 0.12em, UPPERCASE
  - Footer small text:  12px, font-weight: 300

KEY TYPOGRAPHIC TRAIT: Headlines break into separate lines deliberately.
  Example: "Salon / Heleen / Hulsmann" each on its own line — NOT a flowing sentence.
  This stacked vertical typography is a core identity element. Replicate this.

SPACING & WHITE SPACE:
  - Section vertical padding:  clamp(80px, 12vw, 160px) top and bottom
  - Container max-width:       1280px, centered, padding-x: clamp(24px, 5vw, 80px)
  - Grid gap (product cards):  clamp(16px, 2.5vw, 32px)
  - Paragraph max-width:       580px (keeps text readable, never full-width)
  - Generous white space is intentional — do NOT compress or fill empty areas

BORDER RADIUS & CARDS:
  - Cards: border-radius: 0px → SHARP edges, NO rounding
  - Images: no border-radius — full rectangular
  - Buttons: border-radius: 0px; border: 1px solid var(--color-text-primary)
  - NO box shadows on cards — elevation is NOT used in this design system
  - Subtle image hover: slight scale(1.03) with overflow:hidden on container

DARK / LIGHT MODE:
  - The site is primarily LIGHT MODE (warm off-white background)
  - One exception: the Contact page uses a DARK background (#1A1A18) with white text
  - Do NOT implement a toggle — it's section-based, not system-based

════════════════════════════════════════════
2. LAYOUT & PAGE STRUCTURE
════════════════════════════════════════════

ALL PAGES — SECTION ORDER:
  1. Navbar (persistent, fixed/sticky)
  2. Hero Section
  3. Product/Feature Highlight Section
  4. Services / What We Do Section (3 columns)
  5. Journal / Blog Preview (horizontal scroll or grid)
  6. Team / About Snippet
  7. Location / Visit Us CTA Section
  8. Footer

NAVBAR:
  - Transparent background when at top of page (on scroll: becomes white with border-bottom)
  - Logo centered (not left-aligned) — or left with links spread
  - Links: all lowercase EXCEPT first letter, spaced out, 13px uppercase tracking
  - Mobile: hamburger → full-screen overlay menu (dark overlay, links as large h2 text)
  - One external link ("dyostudio.nl") opens in new tab
  - Nav items: Home | What We Do | Products | Events | Journal | Get In Touch | [external]
  - On dark-bg pages (contact): logo switches to white version

HERO SECTION:
  - Full viewport height (100dvh)
  - Background: large editorial photograph, fills entire viewport (object-fit: cover)
  - Dark overlay: none by default — image speaks for itself
  - Content position: bottom-left or center-left, overlapping the image
  - Hero text style: stacked vertical lines in Cormorant Garamond, each word on own line
    Example layout:
      "pre-loved"      ← small, 18px, uppercase tracking
      "designer"       ← 100px+ serif
      "items"          ← 100px+ serif
  - CTA button: not prominent — minimal text link with underline or small arrow →
  - Parallax effect: background-attachment: fixed OR JS parallax (background moves
    slower than content on scroll)

PRODUCT GRID SECTION (homepage):
  - 4-column grid on desktop, 2-column on tablet, 1-column on mobile
  - Each card: image (4:5 portrait ratio) + item name + price below (no box)
  - On hover: slight image zoom (scale 1.03), cursor changes to pointer
  - "See all items" → text link below grid, centered

SERVICES / WHAT WE DO (3-column):
  - Desktop: 3 equal columns side by side
  - Each column: large number (01, 02, 03) in serif, heading, short paragraph, text link
  - Column dividers: thin 1px border between columns OR generous gap only
  - Tablet: 2 columns, mobile: 1 column stacked

JOURNAL / BLOG PREVIEW:
  - 3 cards in a row (desktop) — each card: full-bleed image (3:2 ratio) + title + "read more"
  - Title overlaps image slightly OR sits below it
  - No category tags visible on homepage preview
  - Mobile: horizontal scroll (overflow-x: scroll, snap scrolling)

TEAM SECTION:
  - 2 portrait cards side by side: photo (3:4 ratio) + name + age + bio paragraph
  - NOT a carousel — both visible at once on desktop
  - Mobile: stacked vertically

LOCATION / VISIT CTA:
  - Full-width dark section (#1A1A18) OR large editorial image as background
  - Text: "Visit / our / store" stacked vertically in large white serif
  - Address, hours, phone, WhatsApp link below
  - Google Maps embed (iframe, no API key needed) in a section below OR as link

FOOTER:
  - Two-column layout: left = newsletter signup, right = social links + legal
  - Newsletter: label "be the first to discover the latest drop" + email input + submit
  - Social: Instagram + TikTok icon links
  - Bottom bar: copyright + "by [studio name]" + Terms & Privacy links
  - Background: same off-white as body OR very light warm gray

════════════════════════════════════════════
3. CONTENT & COPYWRITING PLACEHOLDERS
════════════════════════════════════════════

Inject placeholder content matching this business type (pre-loved luxury fashion showroom).
Replace all [PLACEHOLDER] values with real content before launch.

HERO:
  Eyebrow:    "pre-loved"
  H1 Line 1:  "designer"
  H1 Line 2:  "items"
  Subtext:    "Our [CITY] showroom, founded in [YEAR] by [FOUNDER NAME], offers curated
               pieces from recent high-end collections."
  CTA:        "Explore the collection →"

SERVICES SECTION (3 columns):
  01 | Mission
      "Our mission is to bring you high-end preloved fashion that is more accessible
       and make a positive impact on the planet."
  02 | Vision
      "Our vision is to create personal looks for our clients, elevating style
       and boosting confidence."
  03 | Motto
      "'One in, one out' — we never have an overwhelming amount of clothes and
       are always on top of the latest fashion."

ABOUT / TEAM:
  - Person 1: [NAME], [AGE] years old. [3-4 sentence bio]
  - Person 2: [NAME], [AGE] years old. [3-4 sentence bio]
  - "Read more →" links to /about page

JOURNAL CARDS (3 preview articles):
  - Title 1: [ARTICLE TITLE]
  - Title 2: [ARTICLE TITLE]
  - Title 3: [ARTICLE TITLE]
  - Each: hero image + title + "read more" link

CONTACT INFO:
  Address:  [Street + Number, Postal Code, City]
  Hours:    Thursday–Saturday 11:00–18:00
            By appointment Monday–Wednesday
  Phone:    [+XX XXX XXX XXXX]
  WhatsApp: [WhatsApp link]
  Email:    [info@yourdomain.com]

SOCIAL:
  Instagram: [@handle]
  TikTok:    [@handle]

FOOTER NEWSLETTER LABEL:
  "be the first to discover the latest drop"

════════════════════════════════════════════
4. ANIMATIONS & INTERACTIONS
════════════════════════════════════════════

Implement all animations using CSS + Intersection Observer API (no heavy libraries
unless specified). If using React, use Framer Motion.

SCROLL-TRIGGER FADE-UP (apply to ALL sections):
  - Elements start: opacity: 0; transform: translateY(32px)
  - Transition in: opacity: 1; transform: translateY(0); transition: 0.7s ease-out
  - Delay staggering for child elements: each child adds 100ms delay
    (child 1 = 0ms, child 2 = 100ms, child 3 = 200ms, etc.)
  - Trigger: when element enters viewport (IntersectionObserver threshold: 0.15)
  - Once: trigger only once, not on scroll back up

NAVBAR SCROLL BEHAVIOR:
  - At top: background transparent, no border
  - After 60px scroll: background: rgba(245, 242, 238, 0.95); backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-border)
  - Transition: background 0.3s ease, border-color 0.3s ease
  - On dark pages: transition to rgba(26, 26, 24, 0.95) with white text

HOVER STATES:
  - Nav links: underline slides in from left (width: 0 → 100%, transition 0.3s)
    Use ::after pseudo-element with height: 1px, background: currentColor
  - Product cards: image scale(1.03) with transition: transform 0.5s ease
  - CTA buttons: background fills in from left (::before pseudo-element, left: -100% → 0)
    Color inverts: border remains, fill becomes text color, text becomes bg color
  - "Read more" links: arrow slides right 4px on hover (→)

PARALLAX HERO:
  - Implement via CSS: background-attachment: fixed (simple, no JS needed)
  - OR if JS: on scroll event → background-position-y = scrollY * 0.4 + "px"
  - Background moves at 40% of scroll speed — content moves normally

IMAGE REVEAL ANIMATION (clip-path):
  - On scroll entry: clip-path: inset(0 100% 0 0) → clip-path: inset(0 0% 0 0)
  - Duration: 0.9s, easing: cubic-bezier(0.76, 0, 0.24, 1)
  - Apply to: hero image, team photos, about page image
  - Stagger: if two images side by side, second starts 150ms after first

MOBILE MENU ANIMATION:
  - Hamburger → X icon transition (CSS transform: rotate + opacity)
  - Overlay slides in from right: transform: translateX(100%) → translateX(0)
  - Nav links stagger fade-up inside overlay: each 80ms apart

════════════════════════════════════════════
5. TECHNICAL STACK & PERFORMANCE
════════════════════════════════════════════

RECOMMENDED TECH STACK:
  Framework:   Next.js 14+ (App Router) with TypeScript
  Styling:     Tailwind CSS v3 + CSS custom properties for design tokens
               (define all colors, fonts, spacing in globals.css as CSS vars)
  Animations:  Framer Motion (for React) OR CSS + Intersection Observer
  Images:      next/image with WebP/AVIF format, priority on hero
  Fonts:       next/font/google → Cormorant_Garamond + DM_Sans

  ALTERNATIVE (simpler/static):
  Plain HTML + CSS + Vanilla JS (no build step, deploy to Vercel/Netlify)

FILE STRUCTURE (Next.js):
  /app
    /page.tsx             → Homepage
    /about/page.tsx       → About / What We Do
    /products/page.tsx    → Product listing
    /events/page.tsx      → Events
    /journal/page.tsx     → Blog listing
    /journal/[slug]/page.tsx → Blog post
    /contact/page.tsx     → Contact
  /components
    /layout/Navbar.tsx
    /layout/Footer.tsx
    /sections/Hero.tsx
    /sections/ProductGrid.tsx
    /sections/Services.tsx
    /sections/Journal.tsx
    /sections/Team.tsx
    /sections/Location.tsx
    /ui/Button.tsx
    /ui/AnimatedSection.tsx   → Reusable scroll-trigger wrapper
  /lib
    /types.ts
  /public
    /images/              → All optimized images (WebP, max 1920px wide)

IMAGE OPTIMIZATION:
  - Format: WebP (convert all JPEGs/PNGs to WebP before import)
  - Hero image: max 1920×1280px, ~200-400KB after compression
  - Product photos: 800×1000px (4:5 ratio), max 150KB each
  - Team photos: 600×800px (3:4 ratio), max 100KB each
  - Use next/image: loading="lazy" for all below-fold, priority for hero
  - Alt text: describe every image for accessibility + SEO

SEO CONFIGURATION:
  - Meta title format: "[Page Name] | [Business Name]"
  - Meta description: 150-160 chars, include city + business type + unique value prop
  - OG Image: 1200×630px, include business name + hero image
  - OG type: website
  - Twitter card: summary_large_image
  - Canonical URLs on all pages
  - robots.txt: allow all, no crawl restrictions (it's a public showroom)
  - sitemap.xml: auto-generate with next-sitemap package

  Implement in Next.js via generateMetadata() per page:
  export const metadata = {
    title: "[PAGE] | [BUSINESS NAME]",
    description: "[150 char description]",
    openGraph: { title, description, images: ["/og-image.jpg"] },
  }

CONTACT / APPOINTMENT FORM:
  - Primary CTA: WhatsApp deep link (wa.me/[number]?text=[pre-filled message])
  - Secondary: Email link (mailto:)
  - Appointment booking: Calendly embed (iframe OR popup) — matches reference site
  - NO complex contact form needed — WhatsApp + email is sufficient for this type of business
  - Newsletter form: Mailchimp embedded form OR simple POST to /api/newsletter
    (store in Airtable or send via Resend)

GOOGLE MAPS:
  - Use iframe embed (no API key required):
    <iframe
      src="https://www.google.com/maps/embed?pb=[ENCODED_COORDINATES]"
      width="100%" height="400" style="border:0;" allowfullscreen loading="lazy"
    />
  - Get embed URL from Google Maps → Share → Embed a map
  - Wrap in a styled container matching the site's aesthetic (no default Google chrome)

════════════════════════════════════════════
6. PAGES DETAIL (BEYOND HOMEPAGE)
════════════════════════════════════════════

/about (What We Do):
  - Hero: editorial image + stacked heading "CURATED / & Hand / Picked"
  - Below: 2-column text — mission statement + body copy
  - Mission/Vision/Motto: numbered (01, 02, 03) in 3 columns
  - Video embed section: Vimeo or YouTube autoplay muted loop (brand video)
  - CTA: "Make an appointment" → Calendly link

/products (Collection):
  - Filterable product grid (filter by: category, size, brand if available)
  - Each card: image + brand name + item description + price
  - Purchase CTA: "DM on Instagram" or WhatsApp — NOT a cart/checkout
  - Sold items: show with "SOLD" overlay, keep for social proof
  - Note: no actual e-commerce checkout — contact-to-purchase model

/events:
  - Grid or list of upcoming events
  - Each event: image + title + date + short description + RSVP link
  - Past events section below (with photos)

/journal:
  - Blog post grid: 3 columns desktop, 2 tablet, 1 mobile
  - Each post: featured image + title + date + excerpt
  - /journal/[slug]: full post, large hero image, editorial layout

/contact:
  - DARK BACKGROUND (#1A1A18) — this page is the exception to light theme
  - White serif heading stacked: "we Look / Forward to / Seeing you"
  - Contact details: phone, email, address, WhatsApp button
  - Team photo (Heleen + Eva) on the right side
  - Calendly embed for appointments
  - Map embed at bottom (or link to Google Maps)

════════════════════════════════════════════
7. DESIGN PRINCIPLES TO PRESERVE (CRITICAL)
════════════════════════════════════════════

These are the non-negotiable aesthetic decisions that define this brand. Do NOT deviate:

1. TYPOGRAPHY IS THE HERO — Large, stacked, thin-weight serif text IS the design.
   Don't make it smaller or more conservative.

2. WHITE SPACE IS INTENTIONAL — Resist the urge to fill gaps. Emptiness = luxury.

3. NO GRADIENTS — The palette is flat and warm. No CSS gradients anywhere.

4. NO ROUNDED CORNERS — Everything is sharp (0px radius). This is deliberate.

5. PHOTOGRAPHY-FIRST — The website exists to showcase the images. Let photos breathe.
   No heavy frames, borders, or overlays on product images.

6. MINIMAL COLOR — Neutrals only. If you feel the urge to add color, resist it.

7. LOWERCASE INTENTIONALITY — Navigation and some headings use lowercase deliberately.
   This is a brand voice choice ("what we do", "get in touch") — maintain it.

8. ONE EXTERNAL BRAND INTEGRATION — There is a sister brand (DYO Studio). Link to it
   in navbar and about section, but it should not dominate.

9. NO STOCK PHOTO AESTHETIC — All imagery should look editorial and authentic.
   Never use obvious stock photos.

════════════════════════════════════════════
8. COMPONENT SPECIFICATIONS
════════════════════════════════════════════

BUTTON COMPONENT (primary):
  style:        border: 1px solid currentColor; padding: 14px 32px;
                background: transparent; font: 13px DM Sans, uppercase, tracking-widest
  hover:        background fills from left (::before slide animation), color inverts
  variants:     default (dark border on light bg) | inverse (white border on dark bg)

ANIMATED SECTION WRAPPER:
  Reusable component that wraps any section content and applies scroll-trigger animation.
  Props: delay (ms), direction ('up' | 'left' | 'right')
  Implementation: useIntersectionObserver hook + CSS class toggle

NAV LINK:
  style:        13px, letter-spacing: 0.12em, text-transform: uppercase
                color: var(--color-text-primary)
  hover:        underline slides in (::after pseudo-element)
  active page:  underline always visible

PRODUCT CARD:
  structure:    <article> → <div class="image-wrapper"> → <img> + <div class="info">
  image ratio:  4:5 (portrait), overflow:hidden on wrapper for zoom effect
  info:         brand name (uppercase, small) + item name + price
  hover:        image scale(1.03), transition 0.5s ease

FOOTER NEWSLETTER:
  label:        "be the first to discover the latest drop" — lowercase, italic possible
  input:        borderless, border-bottom: 1px solid only (minimal)
  submit:       "→" arrow button or text "subscribe"
  success state:"Thank you! Your submission has been received!"
  error state:  "Oops! Something went wrong while submitting the form."

════════════════════════════════════════════
9. RESPONSIVE BREAKPOINTS
════════════════════════════════════════════

Use mobile-first CSS:
  sm:  640px  → minor tweaks (font sizes, padding)
  md:  768px  → 2-column layouts appear
  lg:  1024px → 3-4 column layouts, full nav appears
  xl:  1280px → max-width container kicks in

KEY RESPONSIVE BEHAVIORS:
  - Hero heading: clamp() scales fluidly — no media query needed
  - Navbar: hamburger menu below lg breakpoint, full nav above
  - Product grid: 1 col (mobile) → 2 col (sm) → 3 col (md) → 4 col (lg)
  - Services: 1 col (mobile) → 3 col (lg)
  - Team: 1 col (mobile) → 2 col (md)
  - Journal: horizontal scroll on mobile (snap to card)
  - Footer: 1 col (mobile) → 2 col (md)

════════════════════════════════════════════
10. ACCESSIBILITY (A11Y)
════════════════════════════════════════════

  - All images: meaningful alt text (not "image" or filename)
  - Color contrast: minimum 4.5:1 for body text against backgrounds
  - Focus states: visible outline on all interactive elements (don't remove outline!)
  - Semantic HTML: use <nav>, <main>, <section>, <article>, <header>, <footer>
  - Skip-to-content link: hidden visually, visible on focus (for keyboard users)
  - Form inputs: label elements properly associated with inputs
  - Reduced motion: wrap all animations in @media (prefers-reduced-motion: no-preference)

════════════════════════════════════════════
END OF PROMPT
════════════════════════════════════════════
```

---

## ⚠️ Catatan Penting Sebelum Build

### Yang HARUS kamu sediakan sendiri sebelum kasih ke AI agent:
| Item | Detail |
|------|--------|
| Nama bisnis | Ganti semua placeholder `[BUSINESS NAME]` |
| Foto | Min. 8–12 foto editorial berkualitas tinggi |
| Kontak | Alamat, nomor, jam buka |
| Social media | Handle Instagram & TikTok |
| Brand story | Narasi About 2–3 paragraf |
| Produk | Nama item, harga, foto produk |

### Hal yang sengaja TIDAK dimasukkan ke prompt (perlu keputusan kamu):
- **Domain & hosting** → pilih sendiri (Vercel direkomendasikan untuk Next.js)
- **WhatsApp Business number** → isi manual
- **Calendly account** → setup dulu, ambil embed URL-nya
- **Newsletter service** → pilih: Mailchimp, Resend, atau Brevo
- **Google Maps embed URL** → generate dari maps.google.com → Share → Embed

### Rekomendasi urutan kerja:
1. Generate homepage dulu (1 page, full sections)
2. Review visual output — koreksi warna/font jika perlu
3. Baru generate page lainnya satu per satu
4. Terakhir: SEO meta + performance optimization
