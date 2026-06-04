# Scarlett House → Kaprica Redesign: Technical Implementation Spec

> **Direction:** Big images, lesser text, same colours. Atmosphere-first, editorial-minimal.
> Every section must survive — content is reduced, not deleted. Images become the story.

---

## 1. Design Philosophy

| Metric | Current | Target |
|---|---|---|
| Text-to-image ratio | ~50 / 50 | ~20 / 80 |
| Primary navigation | Visible link bar (desktop) | Hamburger on all breakpoints |
| Section separators | Red divider lines | Image boundaries + whitespace |
| Hero | Text masthead + 3-col grid | Full-viewport video |
| Menus | Inline text lists + grids | Full-bleed image CTAs |
| Body copy per section | 3–5 paragraphs | 1–3 sentences max |
| Decorative numbers (01–08) | Prominent | Removed entirely |
| Red ticker band | Present | Removed entirely |
| Reservation | Inline 6-field form | Contact info + external booking CTA |

---

## 2. Image Inventory & Assignments

Six JPEG images exist in `apps/frontend/public/`. Each is assigned to a primary role below.
Images are reused as needed across sections — the same image in different crops/contexts is fine.

| File | Observed Subject | Primary Role in Redesign |
|---|---|---|
| `IMG_3925.JPEG` | Bandra Bungalow living room — warm interior | **Story section** (full-bleed) |
| `IMG_3926.JPEG` | Mango Special French Toast — golden plated dish | **Valentine's Menu CTA** (food hero) |
| `IMG_3927.JPEG` | Glass House / mango preparations — bright, airy | **Mango Menu CTA** + Journal image |
| `IMG_3928.JPEG` | Chef / Malaika Arora — portrait, warm | **Brunch CTA** + Founder's Note image |
| `IMG_3929.JPEG` | Panoramic exterior space — wide, atmospheric | **FullBleed separator** + Reservation CTA |
| `IMG_3930.JPEG` | Kitchen team / cocktail glasses — moody | **Cocktails CTA** + Story secondary image |

---

## 3. Video Requirements (Hero)

The hero is a **full-viewport looping video** (`100vw × 100vh`).

### File spec

```
Filename:     /apps/frontend/public/hero-video.mp4
Format:       H.264 MP4 (primary) + WebM (fallback, optional)
Resolution:   1920×1080 minimum; 3840×2160 preferred for retina
Duration:     10–20 seconds (must loop seamlessly)
File size:    Under 10 MB (compress with HandBrake or ffmpeg CRF 28)
```

### Recommended content
Slow-motion or time-lapse of one of: the restaurant space filling with golden afternoon light,
a dish being plated, a cocktail being poured, the Bandra bungalow courtyard.
Warm, unhurried. No cuts needed — one continuous atmospheric shot.

### Fallback
When the video cannot load (slow connection, data-saver mode), the hero falls back
to a full-viewport cover image: `IMG_3929.JPEG`.

### ffmpeg compression command (for reference)
```bash
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow -an hero-video.mp4
```

---

## 4. Component Architecture

### Components to DELETE
These components are fully replaced by new implementations:

| Component | Reason |
|---|---|
| `Masthead.tsx` | Merged into `HeroVideo.tsx` |
| `HeroGrid.tsx` | Replaced by `HeroVideo.tsx` |
| `Ticker.tsx` | Removed — incompatible with Kaprica aesthetic |
| `ValentinesMenu.tsx` | Replaced by `MenuCTA.tsx` |
| `MangoMenu.tsx` | Replaced by `MenuCTA.tsx` |
| `BelliniSection.tsx` | Replaced by `MenuCTA.tsx` |

### New Components to CREATE

| Component | Purpose |
|---|---|
| `HeroVideo.tsx` | Full-viewport video hero with title overlay + scroll chevron |
| `MenuCTA.tsx` | Reusable full-bleed image CTA panel (used 4× for menu sections) |

### Components to HEAVILY MODIFY

| Component | Change summary |
|---|---|
| `Navbar.tsx` | Fixed + transparent; hamburger on all breakpoints (remove desktop link bar) |
| `Story.tsx` | Image-dominant layout; reduce copy to 1 sentence; remove decorative number |
| `ChefSection.tsx` | Full-bleed image with text overlay; remove decorative number + multi-para copy |
| `GallerySection.tsx` | Remove text blocks above grid; add hover name-overlays to images |
| `CooksNoteSection.tsx` | Large image dominant; remove bordered quote box, text floats in white space |
| `BrunchMenu.tsx` | Replace entire component with `MenuCTA.tsx` instance |
| `ReservationSection.tsx` | Remove form; become a full-bleed CTA with contact details below |
| `Footer.tsx` | Remove Pages column; simplify to 2-column brand + contact |

### Components that stay UNCHANGED (infrastructure)

- `Section.tsx` — keep exactly as-is
- `ScrollObserver.tsx` — keep exactly as-is
- `FullBleed.tsx` — keep exactly as-is (used as a separator between sections)
- `globals.css` — keep colors; remove `.divider` usage from components only
- `layout.tsx` — keep fonts exactly as-is

---

## 5. New Page Order (`page.tsx`)

```tsx
<Navbar />                                          // fixed, transparent

<HeroVideo />                                       // 100vh video hero

<Story />                                           // full-bleed image + minimal text

<GallerySection />                                  // asymmetric 5-image grid (modified)

<ChefSection />                                     // founder's note, image-dominant

<FullBleed />                                       // IMG_3929 panoramic separator

<MenuCTA                                            // Cocktails
  id="cocktails"
  label="Cocktails"
  title="Behind the Bar"
  sub="Inspiration Cocktail · Tequila & Seasonal Mango Infusions"
  body="Clean, well-balanced creations made for slow, easy sipping."
  cta="View Cocktails →"
  image="/IMG_3930.JPEG"
/>

<CooksNoteSection />                                // Weekend Journal, image-dominant

<MenuCTA                                            // Valentine's
  id="valentines"
  label="Valentine's Day"
  title="Valentine's Menu"
  sub="Curated for intimacy and celebration"
  body="Refined plates designed to be shared under the soft lights of the Bandra bungalow."
  cta="View Menu →"
  image="/IMG_3926.JPEG"
/>

<MenuCTA                                            // Mango
  id="mango"
  label="Summer Specials"
  title="Mango Season"
  sub="Fresh Alphonso · Limited Edition"
  body="Mangoes handpicked at peak ripeness, across plates, cocktails, and desserts."
  cta="Explore the Menu →"
  image="/IMG_3927.JPEG"
/>

<MenuCTA                                            // Brunch
  id="brunch"
  label="Weekend Ritual"
  title="Weekend Brunch"
  sub="Sundays · 12:00 PM onwards"
  body="A lively afternoon of shared plates, live music, and a setting that lets you ease in."
  cta="Reserve a Sunday Table →"
  image="/IMG_3928.JPEG"
/>

<ReservationSection />                              // full-bleed CTA, no form

<Footer />                                          // simplified 2-column
```

> **Removed from page.tsx:** `<Masthead />`, `<HeroGrid />`, `<Ticker />`,
> the `<hr className="divider divider-triple" />` between Masthead and HeroGrid,
> and the standalone `<ValentinesMenu />`, `<MangoMenu />`, `<BrunchMenu />`, `<BelliniSection />`.

---

## 6. Section-by-Section Specification

---

### 6.1 Navbar

**File:** `apps/frontend/src/components/Navbar.tsx`

**Positioning:** `fixed` top-0 (not `sticky`) so it floats transparently over the video hero.

**Scroll behaviour:**
- Default state: `bg-transparent border-none`
- After 80px scroll: `bg-cream/95 border-b border-brand-red/20` (add via `useEffect` + `window.scroll`)

**Layout (all breakpoints):**
```
[  SCARLETT HOUSE (serif, centered or left)    ]  [  ☰ hamburger  ]
```
- Remove the desktop 3-column grid with left/right link sets entirely
- Keep the wordmark and hamburger only
- `Reserve` mobile button: remove (it moves into the overlay menu)

**Desktop layout (md+):**
```
fixed top-0 left-0 right-0
flex justify-between items-center
h-16 px-[clamp(1.5rem,4vw,3.5rem)]
bg-transparent → bg-cream/95 on scroll
```

**Fullscreen overlay menu:** Keep exactly as-is — it already contains all links at `2.5rem` serif size.
Add `href="#reserve"` "Reserve" link. Add a `"Reserve a Table"` button at the bottom of the overlay
instead of the small inline button.

**Text retained:** All overlay links — Story, Spaces, Plates, Journal, Experiences, Reserve.

**Text removed from default nav bar:** All 6 desktop inline links (Plates, Story, Spaces, Journal, Reserve, Experiences).

---

### 6.2 HeroVideo (NEW — replaces Masthead + HeroGrid)

**File:** `apps/frontend/src/components/HeroVideo.tsx` *(new file)*

**Dimensions:** `w-screen h-screen` — 100vw × 100vh. No container. Bleeds edge-to-edge.

**Layer stack (z-index):**
```
z-0   <video> element — full cover, autoplay muted loop playsInline
z-10  gradient overlay — from-ink/50 via-ink/20 to-transparent (bottom-up)
z-20  text content — centered
z-30  scroll chevron — absolute bottom-8 centered
```

**Text overlay (all text from Masthead + HeroGrid distilled):**
```
[TOP LEFT — absolute top-24 left-[clamp(1.5rem,4vw,3.5rem)]]
  "Bandra / Juhu — Mumbai"   text-[10px] tracking-[0.18em] uppercase text-cream/60
  "Est. MMXII"               text-[10px] tracking-[0.18em] uppercase text-cream/60

[TOP RIGHT — absolute top-24 right-[clamp(1.5rem,4vw,3.5rem)]]
  "Summer Edition 2025"      text-[10px] tracking-[0.18em] uppercase text-cream/60

[CENTER — absolute inset-0 flex flex-col items-center justify-center]
  "A Home Away From Home"    text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4
  "Scarlett"                 font-serif text-[clamp(5rem,13vw,11rem)] font-light
  "House"                    font-serif text-[clamp(5rem,13vw,11rem)] font-light
                             tracking-[0.12em] leading-[0.9] text-cream uppercase
  [thin red horizontal rule, w-12, mt-6]
  "Weekend Brunches are finally here."
                             font-serif text-[clamp(1rem,2vw,1.4rem)] italic
                             text-cream/80 mt-4

[BOTTOM CENTER — absolute bottom-8]
  Scroll chevron SVG         animate-bounce text-cream/60 w-5 h-5
```

**Video element:**
```tsx
<video
  autoPlay muted loop playsInline
  className="absolute inset-0 w-full h-full object-cover"
  poster="/IMG_3929.JPEG"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

**Note on video absence:** Until the video file is added to `public/`, the `poster` attribute
(`IMG_3929.JPEG`) displays as a full-viewport cover photo. The hero works immediately.

**Text retained from current components:**
- "Bandra / Juhu — Mumbai" (from Masthead)
- "Est. MMXII" (from Masthead)
- "Summer Edition 2025" (from Masthead)
- "A Home Away From Home" (from Masthead)
- "Scarlett House" heading (from Masthead)
- "Weekend Brunches are finally here" (from HeroGrid right column)

**Text removed entirely:**
- "Featured Experience" label
- Full pull quote from HeroGrid left column ("At Scarlett House, we reimagine...")
- Multi-sentence paragraph ("Step into a space built around nostalgia...")
- "This Week" label
- Drop-cap paragraph about weekend brunches
- All image captions (Above — The Bandra Bungalow Living Room, Featured — Our Mango Special French Toast, This week — Fresh mango preparations)

---

### 6.3 Story

**File:** `apps/frontend/src/components/Story.tsx`

**Layout:** Full-bleed image (viewportwidth × ~65vh) → generous white space below with short text.

```
[FULL-BLEED IMAGE — w-screen left-1/2 -translate-x-1/2]
  IMG_3925.JPEG — aspect-[16/7] object-cover
  Gradient overlay bottom: from-ink/30 to-transparent
  Bottom-left overlay text:
    "Scarlett House"  text-[9px] tracking-[0.3em] uppercase text-cream/60
    "Our Story"       font-serif text-[clamp(2rem,5vw,4rem)] text-cream font-light

[SITE-CONTAINER — py-16]
  Single centered column, max-w-2xl mx-auto, text-center

  [Short pull quote — retains the original blockquote]
  "Scarlett House is a hospitality concept built around nostalgia, comfort, and connection."
    font-serif text-[clamp(1.3rem,2.5vw,2rem)] italic text-ink leading-[1.4]

  [Attribution]
  "— Malaika, Dhaval, Malaya & Arhaan"
    text-[10px] tracking-[0.15em] uppercase text-ink-faint mt-4

  [Single body sentence — distilled from 3 current paragraphs]
  "A restaurant born from a simple conviction: that hospitality — treated with honesty
   and without ceremony — becomes one of the great pleasures of the world."
    text-[14px] leading-[1.8] text-ink-muted font-sans mt-10 max-w-xl mx-auto
```

**Text retained:** The pull quote + attribution + one synthesised sentence.

**Text removed:**
- Decorative "01" large number
- "Scarlett House" section label (kept as overlay instead)
- Full first body paragraph ("Built around the idea of nostalgia...")
- Full second body paragraph ("The restaurant was born from a very simple conviction...")
- Decorative ✦ divider
- Third paragraph ("What you find on these tables is not performance...")
- Image caption ("Above. The founding team...")

**Image used:** `IMG_3925.JPEG` (Bandra bungalow interior — warm, nostalgic)

---

### 6.4 GallerySection

**File:** `apps/frontend/src/components/GallerySection.tsx`

**Layout change:** Remove all text above the grid (the "02" number, h2 "Explore Scarlett House",
and both location description paragraphs). The 5-image asymmetric grid occupies the full section.
Location names move inside the images as hover overlays.

```
[SECTION — id="spaces", py-0]
  [SITE-CONTAINER — pb-6]
    "The Spaces"  text-[9px] tracking-[0.3em] uppercase text-brand-red  ← keep this label only

  [GRID — grid-cols-[1.4fr_1fr_1fr] grid-rows-2 gap-[1.5px]]
    Cell 1 (row-span-2): IMG_3929.JPEG
      hover overlay: "Bandra Bungalow"
        font-serif text-[1.8rem] text-cream font-light

    Cell 2: IMG_3925.JPEG
      hover overlay: "The Attic"

    Cell 3: IMG_3926.JPEG
      hover overlay: "The Red Room"

    Cell 4: IMG_3927.JPEG
      hover overlay: "Glass House"

    Cell 5: IMG_3930.JPEG
      hover overlay: "Juhu Terrace"
```

**Hover overlay pattern per image cell:**
```tsx
<div className="relative group overflow-hidden img-frame">
  <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-end p-8">
    <span className="font-serif text-[1.6rem] text-cream font-light opacity-0 group-hover:opacity-100
                     translate-y-2 group-hover:translate-y-0 transition-all duration-500">
      Location Name
    </span>
  </div>
</div>
```

**Text retained:** "The Spaces" label, location names (as hover overlays).

**Text removed:**
- "02" decorative number
- h2 "Explore Scarlett House" heading
- Both location description paragraphs (Bandra bungalow, Glass House)

---

### 6.5 ChefSection (Founder's Note)

**File:** `apps/frontend/src/components/ChefSection.tsx`

**Layout:** Full-width image (~70vh) with all text as an overlay at bottom-left.
Removes the 2-column bordered grid structure entirely.

```
[SECTION — py-0, relative]
  [FULL-BLEED WRAPPER — w-screen left-1/2 -translate-x-1/2]
    IMG_3928.JPEG — aspect-[16/8] object-cover fade-in
    [GRADIENT OVERLAY — absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent]

    [OVERLAY CONTENT — absolute bottom-0 left-0 right-0]
      [SITE-CONTAINER — pb-14]
        "Founder's Note"
          text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4

        [BLOCKQUOTE]
        "Scarlett House is born out of a desire to create a sanctuary where nostalgia
         meets modern comfort — a home away from home."
          font-serif text-[clamp(1.3rem,3vw,2.2rem)] italic text-cream font-light leading-[1.35]

        "— Malaika Arora, Co-Founder"
          text-[10px] tracking-[0.15em] uppercase text-cream/60 mt-3

        "Discover our Spaces →"
          text-[10px] tracking-[0.2em] uppercase text-brand-red mt-8 border-b border-brand-red pb-1
```

**Text retained:** "Founder's Note" label, the key blockquote, attribution, CTA link.

**Text removed:**
- "03" decorative number
- h2 "Note from the Founder"
- First body paragraph ("When Dhaval, Malaya, Arhaan, and I envisioned...")
- Second body paragraph ("Here, the food is simple yet refined...")

**Image used:** `IMG_3928.JPEG` (portrait / chef / warm)

---

### 6.6 FullBleed (separator — unchanged)

**File:** `apps/frontend/src/components/FullBleed.tsx` — no changes needed.

**Image used:** `IMG_3929.JPEG` (panoramic exterior — wide, atmospheric)

Placed between ChefSection and the Cocktails MenuCTA as a visual breathing moment.
Remove the `<hr className="divider" />` that follows it in the current implementation.

---

### 6.7 MenuCTA (NEW — replaces BelliniSection, ValentinesMenu, MangoMenu, BrunchMenu)

**File:** `apps/frontend/src/components/MenuCTA.tsx` *(new file)*

**Purpose:** A reusable full-bleed image panel used for all four menu/experience sections.
It retains all section identity (label, title, copy) in minimal form.

**Props interface:**
```ts
interface MenuCTAProps {
  id: string;           // anchor id for nav links
  label: string;        // small uppercase label above title
  title: string;        // large serif heading
  sub: string;          // one-line italic subtitle (replaces section tagline)
  body: string;         // single sentence body copy
  cta: string;          // CTA link text
  image: string;        // image src path
  ctaHref?: string;     // link destination (defaults to "#reserve")
  overlay?: 'light' | 'dark';  // gradient direction (default: 'dark')
}
```

**Layout:**
```
[SECTION — id={id}, py-0, relative, fade-in]
  [FULL-BLEED WRAPPER — w-screen left-1/2 -translate-x-1/2]
    [IMAGE — aspect-[16/9] md:aspect-[21/9] object-cover group-hover:scale-105 duration-1000]
    [GRADIENT — absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent]

    [OVERLAY CONTENT — absolute bottom-0 left-0 right-0]
      [SITE-CONTAINER — pb-14 md:pb-20]
        {label}   text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4
        {title}   font-serif text-[clamp(2.5rem,7vw,6rem)] font-light text-cream leading-[0.95]
        {sub}     font-serif text-[1rem] italic text-cream/70 mt-3
        {body}    text-[13px] leading-[1.7] text-cream/70 font-sans mt-5 max-w-lg
        {cta}     text-[10px] tracking-[0.2em] uppercase text-brand-red mt-8
                  border-b border-brand-red pb-1 hover:gap-5 transition-all inline-flex
```

**Four usages (all in `page.tsx`):**

#### Usage 1 — Cocktails (replaces BelliniSection)
```tsx
<MenuCTA
  id="cocktails"
  label="Cocktails"
  title="Behind the Bar"
  sub="Inspiration Cocktail · Tequila & Seasonal Mango Infusions"
  body="Our bar highlights clean, well-balanced creations made for slow, easy sipping during long, unhurried afternoons."
  cta="View Cocktails →"
  image="/IMG_3930.JPEG"
/>
```
**Text retained from BelliniSection:** label, title, subtitle line, body sentence, the tagline "Come for the drinks. Stay for the vibe." is removed (body consolidates it).

#### Usage 2 — Valentine's Menu (replaces ValentinesMenu)
```tsx
<MenuCTA
  id="valentines"
  label="Valentine's Day"
  title="Valentine's Menu"
  sub="Curated for intimacy and celebration"
  body="Refined plates designed to be shared under the soft lights of the Bandra bungalow — sophisticated flavours, rich textures, comfort on every plate."
  cta="View Menu →"
  image="/IMG_3926.JPEG"
/>
```
**Text retained from ValentinesMenu:** label, heading, 1 condensed sentence from the two intro paragraphs.
**Text removed:** "06" number, both full intro paragraphs, all 5 menu item names/descriptions/prices, the masonry grid entirely.

#### Usage 3 — Mango Menu (replaces MangoMenu)
```tsx
<MenuCTA
  id="mango"
  label="Summer Specials"
  title="Mango Season"
  sub="Fresh Alphonso · Handpicked at Peak Ripeness"
  body="Mangoes across signature plates, house-infused cocktails, and delicate desserts crafted for the ultimate summer flavour."
  cta="Explore the Menu →"
  image="/IMG_3927.JPEG"
/>
```
**Text retained from MangoMenu:** label, heading condensed, 1 sentence from the intro.
**Text removed:** "07" number, both intro paragraphs, all 5 menu item names/descriptions/prices, the 3-column grid entirely.

#### Usage 4 — Brunch (replaces BrunchMenu)
```tsx
<MenuCTA
  id="brunch"
  label="Weekend Ritual"
  title="Weekend Brunch"
  sub="Sundays · 12:00 PM onwards · Bandra & Juhu"
  body="A lively, interactive Sunday afternoon experience filled with good music, shared plates, and a warm social atmosphere."
  cta="Reserve a Sunday Table →"
  ctaHref="#reserve"
  image="/IMG_3928.JPEG"
/>
```
**Text retained from BrunchMenu:** label, heading, quote condensed into body sentence, CTA.
**Text removed:** "08" number, the blockquote block, all 5 menu item names/descriptions, the 2-column bordered grid entirely.

---

### 6.8 CooksNoteSection (Weekend Journal)

**File:** `apps/frontend/src/components/CooksNoteSection.tsx`

**Layout:** Large image (full-width) → text block below in generous white space.
Removes the bordered quote box, decorative quotation mark, and the 2-column grid.

```
[SECTION — id="journal", py-16 md:py-24]
  [SITE-CONTAINER]

    [FULL-BLEED IMAGE — w-screen left-1/2 -translate-x-1/2]
      IMG_3927.JPEG — aspect-[16/8] object-cover fade-in
      Bottom-left overlay:
        "Weekend Journal"  font-serif text-[clamp(2rem,5vw,4rem)] text-cream/90 font-light

    [TEXT BLOCK — mt-14 max-w-2xl (left-aligned, not centered)]

      "Stories from the House — Summer 2025"
        text-[9px] tracking-[0.25em] uppercase text-brand-red mb-5

      [JOURNAL ENTRY — condensed from the full story]
      "Step into the weekend with Scarlett House's brunch. A refreshing electrolyte
       drink to ease you into the afternoon, a live singer setting the tone with
       easy feel-good music, and live counters — the nacho bar and cheese wheel pasta
       station — made fresh and just the way you like them."
        font-serif text-[clamp(1rem,1.8vw,1.3rem)] italic text-ink leading-[1.6]

      "— The House"
        font-serif text-[1.1rem] italic text-brand-red mt-6

      [IMAGE CAPTION]
      "Midday. Courtyard brunch preparations at the Bandra bungalow."
        text-[10.5px] italic font-serif text-ink-faint mt-4
```

**Text retained:** Section label, full journal story (condensed from 1 long paragraph to a natural single paragraph), attribution, image caption.

**Text removed:**
- "05" decorative number
- "Editorial" label (replaced by "Stories from the House" inline)
- h2 "Weekend Journal" (moved as image overlay)
- Side paragraph "A weekend message from the house. Slow afternoons..."
- The bordered box styling
- Decorative quotation mark pseudo-element

**Image used:** `IMG_3927.JPEG` (Glass House / bright, airy)

---

### 6.9 ReservationSection

**File:** `apps/frontend/src/components/ReservationSection.tsx`

**Layout:** Full-bleed image with minimal contact info below. No form.

```
[SECTION — id="reserve", py-0]
  [FULL-BLEED WRAPPER — w-screen left-1/2 -translate-x-1/2]
    IMG_3929.JPEG — aspect-[16/8] object-cover
    [GRADIENT — absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent]

    [OVERLAY — absolute bottom-0 left-0 right-0]
      [SITE-CONTAINER — pb-14]
        "Reserve"   text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4

        "Book Your Table"
          font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-cream leading-[0.95]

        "hello@scarletthouse.in"
          text-[14px] text-cream/70 font-serif italic mt-4

        "Reserve a Table →"
          inline-flex text-[10px] tracking-[0.2em] uppercase text-brand-red mt-8
          border-b border-brand-red pb-1

  [SITE-CONTAINER — py-14]
    [CONTACT INFO GRID — grid-cols-2 md:grid-cols-4 gap-10]

      Opening Hours:
        "Juhu: Mon – Sun, 12:00 PM – 01:30 AM"
        "Bandra: Sun Brunch, 12:00 PM – 04:00 PM"

      Bandra Address:
        "Bandra Bungalow, Mumbai, India"

      Juhu Address:
        "Juhu Glass House, Mumbai, India"

      Contact:
        "+91 99999 99999"
        "hello@scarletthouse.in"
```

**Text retained:** ALL contact info, opening hours, heading, CTA label.

**Text removed:** All 6 form fields (Full Name, Email, Phone, Guests, Date, Time), "Reserve My Table" button, form grid layout.

**Image used:** `IMG_3929.JPEG` (panoramic exterior — atmospheric)

---

### 6.10 Footer

**File:** `apps/frontend/src/components/Footer.tsx`

**Layout:** 2-column instead of 3-column. Remove the "Pages" links column entirely
(navigation is handled by the fullscreen overlay menu).

```
[FOOTER — border-t-[3px] border-brand-red-dark bg-brand-red-dark text-cream py-14]
  [SITE-CONTAINER]

    [GRID — grid-cols-1 md:grid-cols-2 gap-12 mb-10]

      [LEFT — Brand]
        "Scarlett House"
          font-serif text-[2.5rem] font-light tracking-[0.12em] text-cream

        "A Home Away From Home."
          font-serif text-[1.1rem] italic text-cream/80 mt-2
        "Bandra & Juhu, Mumbai."
          font-serif text-[1.1rem] italic text-cream/80

      [RIGHT — Contact]
        "Contact"   text-[13px] tracking-[0.2em] uppercase text-cream-darker mb-4 font-sans

        "Bandra Bungalow & Juhu Glass House"
          font-serif text-[17px] text-cream/90 leading-[1.8]
        "Mumbai, India"
        "+91 99999 99999"
        "hello@scarletthouse.in"

    [BOTTOM BAR — border-t border-cream/20 pt-6 flex justify-between]
      "© 2025 Scarlett House — All Rights Reserved"
        text-[12px] tracking-[0.12em] text-cream/70 uppercase font-sans
      "Powered by Eigensu"
        text-[12px] tracking-[0.12em] text-cream/70 uppercase font-sans
```

**Text retained:** Wordmark, tagline, location, all contact details, copyright, Eigensu credit.

**Text removed:** "Pages" column heading, all 6 navigation links inside footer.

---

## 7. Global CSS Changes (`globals.css`)

Only one change: the body noise texture opacity stays, all color variables stay, all fonts stay.

**Remove from component usage (not from globals.css itself):**
The `.divider` and `.divider-triple` classes are no longer used by any component.
They remain defined in globals.css but are not called anywhere in `page.tsx`.

**Add one new utility for the video hero overlay:**
```css
@layer utilities {
  .hero-gradient {
    background: linear-gradient(
      to top,
      rgba(26,22,18,0.75) 0%,
      rgba(26,22,18,0.35) 40%,
      rgba(26,22,18,0.10) 70%,
      transparent 100%
    );
  }
}
```

---

## 8. Navigation Positioning — Technical Detail

```
position: fixed
top: 0
left: 0
right: 0
z-index: 100
height: 64px (h-16)
```

**Default state (before scroll):**
```css
background-color: transparent;
border-bottom: none;
```

**Scrolled state (added via JS after 80px):**
```css
background-color: rgba(244, 239, 228, 0.95);  /* cream/95 */
backdrop-filter: blur(8px);
border-bottom: 1px solid rgba(163, 32, 32, 0.2);  /* brand-red/20 */
transition: background-color 0.3s ease, border-color 0.3s ease;
```

**Implementation in Navbar.tsx:**
```tsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 80);
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);
```

**Because Navbar is now `fixed` (not `sticky`), add `pt-16` to `<HeroVideo>`**
so the video starts at full viewport height accounting for the nav bar overlap.
Actually no — the hero should bleed under the nav. Use `h-screen` on the hero
and the nav floats on top transparently. No padding needed.

---

## 9. Hero Video Section — Technical Detail

```tsx
// apps/frontend/src/components/HeroVideo.tsx

export default function HeroVideo() {
  return (
    <section className="relative w-screen h-screen overflow-hidden left-1/2 -translate-x-1/2">

      {/* Video layer */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/IMG_3929.JPEG"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="hero-gradient absolute inset-0 z-10" />

      {/* Top-left metadata */}
      <div className="absolute top-24 left-[clamp(1.5rem,4vw,3.5rem)] z-20 fade-in">
        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60 leading-none">
          Bandra / Juhu — Mumbai
        </p>
        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60 leading-none mt-1">
          Est. MMXII
        </p>
      </div>

      {/* Top-right metadata */}
      <div className="absolute top-24 right-[clamp(1.5rem,4vw,3.5rem)] z-20 text-right fade-in">
        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60 leading-none">
          Summer Edition 2025
        </p>
      </div>

      {/* Center title block */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center
                      px-[clamp(1.5rem,4vw,3.5rem)]">
        <p className="text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4">
          A Home Away From Home
        </p>
        <h1 className="font-serif text-[clamp(5rem,13vw,11rem)] font-light tracking-[0.12em]
                       leading-[0.9] uppercase text-cream">
          Scarlett<br/>House
        </h1>
        <hr className="w-12 border-none border-t-[1.5px] border-brand-red mt-6 mb-5" />
        <p className="font-serif text-[clamp(1rem,2vw,1.4rem)] italic text-cream/75">
          Weekend Brunches are <em>finally here</em>
        </p>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-5 h-5 text-cream/50" fill="none" stroke="currentColor" strokeWidth="1.5"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}
```

---

## 10. MenuCTA — Full Component Implementation

```tsx
// apps/frontend/src/components/MenuCTA.tsx

import Image from 'next/image';
import Link from 'next/link';
import Section from './Section';

interface MenuCTAProps {
  id: string;
  label: string;
  title: string;
  sub: string;
  body: string;
  cta: string;
  image: string;
  ctaHref?: string;
}

export default function MenuCTA({
  id, label, title, sub, body, cta, image, ctaHref = '#reserve',
}: MenuCTAProps) {
  return (
    <Section id={id} className="py-0">
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden group fade-in">

        {/* Image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          {/* Gradient overlay */}
          <div className="hero-gradient absolute inset-0" />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="site-container pb-14 md:pb-20">
              <p className="text-[9px] tracking-[0.3em] uppercase text-brand-red mb-4 font-sans font-medium">
                {label}
              </p>
              <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light text-cream leading-[0.95]">
                {title}
              </h2>
              <p className="font-serif text-[1rem] italic text-cream/70 mt-3">
                {sub}
              </p>
              <p className="text-[13px] leading-[1.7] text-cream/65 font-sans mt-5 max-w-lg">
                {body}
              </p>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 mt-8 text-[10px] tracking-[0.2em]
                           uppercase text-brand-red font-sans font-medium border-b border-brand-red
                           pb-1 hover:gap-5 transition-all"
              >
                {cta}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
```

---

## 11. Implementation Phases

### Phase 1 — Delete & Skeleton (30 min)
Remove Ticker from `page.tsx`. Delete `Masthead.tsx`, `HeroGrid.tsx`, `Ticker.tsx`,
`ValentinesMenu.tsx`, `MangoMenu.tsx`, `BelliniSection.tsx` from the components folder
and remove their imports from `page.tsx`.

### Phase 2 — New Components (1 hr)
Create `HeroVideo.tsx` and `MenuCTA.tsx` using the full implementations above.
Wire them into `page.tsx` with the correct props for each of the 4 menu usages.

### Phase 3 — Navbar (30 min)
Modify `Navbar.tsx`: remove desktop link bar, make fixed + transparent with scroll detection,
update fullscreen overlay to include a styled Reserve CTA at the bottom.

### Phase 4 — Story + ChefSection (45 min)
Rebuild both components with image-dominant full-bleed layouts and reduced text overlays.

### Phase 5 — GallerySection (30 min)
Remove header text blocks; add hover overlays per image cell.

### Phase 6 — CooksNoteSection (20 min)
Remove bordered quote box; make image full-bleed; text floats below.

### Phase 7 — ReservationSection (30 min)
Delete the form; replace with full-bleed CTA image + contact info grid below.

### Phase 8 — Footer (15 min)
Remove Pages column; simplify to 2-column layout.

### Phase 9 — Video (when file ready)
Add `hero-video.mp4` to `public/`. No code changes needed — `<video poster>` handles the fallback.

---

## 12. Text Survival Checklist

Every piece of named content from the current site and its fate:

| Content | Current Location | New Location | Status |
|---|---|---|---|
| "Bandra / Juhu — Mumbai" | Masthead | HeroVideo top-left | Retained |
| "Est. MMXII" | Masthead | HeroVideo top-left | Retained |
| "Summer Edition 2025" | Masthead | HeroVideo top-right | Retained |
| "A Home Away From Home" | Masthead + HeroGrid | HeroVideo center | Retained |
| "Scarlett House" h1 | Masthead | HeroVideo center | Retained |
| "Weekend Brunches are finally here" | HeroGrid right | HeroVideo center | Retained |
| Pull quote ("At Scarlett House, we reimagine...") | HeroGrid left | Removed | Cut |
| "Step into a space built around nostalgia..." | HeroGrid left | Removed | Cut |
| Drop-cap brunch paragraph | HeroGrid right | Removed | Cut |
| "Our Story" heading | Story | Story image overlay | Retained |
| Story pull quote ("Scarlett House is a hospitality concept...") | Story | Story text block | Retained |
| "— Malaika, Dhaval, Malaya & Arhaan" | Story | Story text block | Retained |
| Story body para 1 + 2 | Story | Condensed to 1 sentence | Condensed |
| Story para 3 ("What you find on these tables...") | Story | Removed | Cut |
| "Explore Scarlett House" h2 | GallerySection | Removed | Cut |
| Bandra bungalow description | GallerySection | Removed | Cut |
| Juhu Glass House description | GallerySection | Removed | Cut |
| Location names | GallerySection | Image hover overlays | Retained |
| "Founder's Note" label | ChefSection | Image overlay | Retained |
| Founder blockquote | ChefSection | Image overlay | Retained |
| "— Malaika Arora, Co-Founder" | ChefSection | Image overlay | Retained |
| Founder body para 1 + 2 | ChefSection | Removed | Cut |
| "Discover our Spaces →" CTA | ChefSection | Image overlay | Retained |
| "Cocktails" label | BelliniSection | MenuCTA label | Retained |
| "Behind the Bar" heading | BelliniSection | MenuCTA title | Retained |
| Cocktail subtitle line | BelliniSection | MenuCTA sub | Retained |
| Cocktail body paragraph | BelliniSection | MenuCTA body (1 sentence) | Condensed |
| "Weekend Journal" heading | CooksNoteSection | Image overlay | Retained |
| "Stories from the House — Summer 2025" | CooksNoteSection | Text block label | Retained |
| Journal story paragraph | CooksNoteSection | Text block (condensed) | Condensed |
| "— The House" attribution | CooksNoteSection | Text block | Retained |
| Image caption "Midday. Courtyard brunch..." | CooksNoteSection | Below image | Retained |
| "Valentine's Day" label | ValentinesMenu | MenuCTA label | Retained |
| "Valentine's Menu" heading | ValentinesMenu | MenuCTA title | Retained |
| Valentine's intro paragraphs | ValentinesMenu | MenuCTA body (1 sentence) | Condensed |
| All 5 Valentine's menu items | ValentinesMenu | Removed | Cut |
| "Summer Specials" label | MangoMenu | MenuCTA label | Retained |
| "Mango Menu" heading | MangoMenu | MenuCTA title (→ "Mango Season") | Retained |
| Mango intro paragraphs | MangoMenu | MenuCTA body (1 sentence) | Condensed |
| All 5 mango menu items | MangoMenu | Removed | Cut |
| "Weekend Ritual" label | BrunchMenu | MenuCTA label | Retained |
| "Brunch Specials" heading | BrunchMenu | MenuCTA title (→ "Weekend Brunch") | Retained |
| Brunch blockquote | BrunchMenu | MenuCTA body (1 sentence) | Condensed |
| All 5 brunch menu items | BrunchMenu | Removed | Cut |
| "Book a Sunday Table →" | BrunchMenu | MenuCTA CTA | Retained |
| "Book Your Table" heading | ReservationSection | Reservation CTA overlay | Retained |
| Opening hours (both) | ReservationSection | Contact grid below image | Retained |
| Bandra + Juhu addresses | ReservationSection | Contact grid below image | Retained |
| Phone number | ReservationSection | Contact grid below image | Retained |
| Email address | ReservationSection | Contact grid + image overlay | Retained |
| "Reserve a Table →" | ReservationSection | Image overlay CTA | Retained |
| All 6 form fields | ReservationSection | Removed | Cut |
| Wordmark in footer | Footer | Footer left | Retained |
| "A Home Away From Home." | Footer | Footer left | Retained |
| "Bandra & Juhu, Mumbai." | Footer | Footer left | Retained |
| Pages column + 6 links | Footer | Removed | Cut |
| Contact column (all info) | Footer | Footer right | Retained |
| Copyright line | Footer | Footer bottom bar | Retained |
| "Powered by Eigensu" | Footer | Footer bottom bar | Retained |

---

*End of specification.*
