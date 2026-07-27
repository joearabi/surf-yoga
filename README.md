# Surf & Yoga

Standalone landing page for The Surf Hotel Morocco Surf & Yoga offer.

## Project contents

- `index.html` — complete landing-page markup and approved offer copy
- `style.css` — responsive visual system and component styles
- `script.js` — navigation, carousels, tabs, scroll animation, inline video, and analytics interactions
- `assets/` — all images, thumbnails, branding, and texture files used by the page
- `PRD.md` — approved product requirements and copy deck
- `qa_report.md` — implementation and validation report

## Preview locally

Run a local web server from this directory:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

Use an HTTP preview rather than opening `index.html` through a `file://` URL. YouTube requires a valid web origin/referrer for reliable inline playback.

## Booking destination

Every booking CTA leads to:

```text
https://bookings.thesurfhotelmorocco.com/en/product/surf-and-yoga
```

## Offer source of truth

The live Bookinglayer product is authoritative for schedule, levels, inclusions, availability, and final pricing. The stay-length cards display the published per-person shared-room starting prices from The Surf Hotel's official Surf & Yoga package page; Bookinglayer confirms the final total for the selected dates, room, and guest count.

The seven-night offer includes surf coaching or guiding matched to level, supervised practice, and a 60-minute evening yoga session daily except Thursday.

## Main video

The main yoga video uses a local poster and replaces it with a privacy-enhanced YouTube iframe after the visitor presses play. A direct YouTube link remains available as a fallback.
