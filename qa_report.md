# Surf & Yoga QA Report

**Validation date:** 27 July 2026  
**Project:** `/home/pc/Downloads/TSHM/Surf & Yoga`

## Package verification

- Standalone `index.html`, `style.css`, `script.js`, `README.md`, `PRD.md`, and `qa_report.md` are present.
- All locally referenced images and graphics are included under `assets/`.
- HTML, CSS, and JavaScript paths are relative to the project directory.
- The stylesheet loads its local grain texture through `assets/grain.png`.
- No page asset depends on the Surf Guiding project or a parent directory.
- Unused offer-specific image files were excluded from the final package.

## Content verification

- Surf & Yoga is consistently presented for beginner, intermediate, and advanced surfers.
- The surf format is consistently described as coaching or guiding matched to level plus supervised practice.
- Yoga is consistently described as one 60-minute evening session daily except Thursday.
- The seven-night inclusions match the English live Bookinglayer product content.
- Thursday’s yoga and rooftop-dinner exception is stated in the schedule, inclusions, and FAQ.
- All guest-review copy is labeled as paraphrased.
- The four stay-length cards show the official per-person shared-room starting prices: €413, €712, €1,021, and €1,434.
- Pricing copy clearly identifies these as starting prices and directs visitors to Bookinglayer for date, room, and guest-specific totals.
- No Surf Guiding offer or booking-link leakage was found.

## Link verification

- Every booking CTA targets:

  `https://bookings.thesurfhotelmorocco.com/en/product/surf-and-yoga`

- The main video uses YouTube ID `n3JnEJYet3M`.
- Supporting cards use the approved official-channel videos.
- External YouTube links open in a new tab with `rel="noopener"`.

## Technical verification

- `script.js` passes `node --check`.
- Referenced local assets were checked for missing files; none were missing.
- Major HTML containers were counted and balanced:
  - 14 opening and closing `section` elements.
  - 67 opening and closing `div` elements.
  - 17 opening and closing `article` elements.
  - 9 opening and closing `figure` elements.
  - 11 opening and closing `details` elements.
- Downloaded offer images were identified as valid 1440-pixel JPEG files.
- Downloaded video posters were identified as valid 1280×720 JPEG files.
- A local HTTP smoke test returned `200 OK` for:
  - `/`
  - `/style.css`
  - `/script.js`
  - `/assets/surf-yoga-video-poster.jpg`

## Interaction verification

- Hero slideshow, scroll reveal, surfer-on-wave animation, image carousel, testimonial carousel, stay tabs, FAQ tracking, and sticky booking behavior remain implemented.
- Surf-level tabs are configured for beginner, intermediate, and advanced states.
- Keyboard Arrow, Home, and End behavior remains implemented for tabs and carousels.
- Reduced-motion handling remains implemented for reveal, slideshow, carousel, and scroll animation behavior.
- Main video click replaces the local poster with a privacy-enhanced YouTube iframe.
- The inline iframe includes autoplay, inline playback, fullscreen support, a descriptive title, and `strict-origin-when-cross-origin` referrer policy.
- A direct `Watch on YouTube` link remains available as a fallback.
- Analytics use `offer: "surf_and_yoga"` and inline playback reports `playback: "youtube_inline"`.

## Responsive and accessibility verification

- Existing desktop, tablet, and mobile breakpoints were retained.
- Inline iframe heights were added to the existing video breakpoints.
- The three level tabs remain horizontally scrollable on small screens.
- The typical-day note and live-price label receive dedicated styles.
- Skip navigation, semantic landmarks, heading structure, tab ARIA attributes, carousel live regions, descriptive image alt text, iframe title, and visible focus styling remain present.

## Constraint and final review note

Validation was completed without Playwright, browser automation, or Git, as required. Static checks and HTTP smoke tests passed. A human visual review through the local HTTP preview remains recommended before production deployment, particularly for final crop preferences across device sizes.
