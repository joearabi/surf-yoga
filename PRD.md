# Product Requirements Document: Surf & Yoga Landing Page

**Product:** The Surf Hotel Morocco — Surf & Yoga  
**Document status:** Ready for implementation  
**Language:** English  
**Destination:** `/home/pc/Downloads/TSHM/Surf & Yoga/`  
**Primary booking URL:** <https://bookings.thesurfhotelmorocco.com/en/product/surf-and-yoga>  
**Last grounded against live Bookinglayer content:** July 2026

## 1. Product summary

Build a standalone Surf & Yoga offer landing page that uses the completed Surf Guiding page as its exact structural and visual reference. Preserve the same section order, responsive layout, typography, color palette, spacing, animation language, UI components, conversion pattern, accessibility behavior, and hotel presentation.

Only offer-specific content changes:

- Surf & Yoga positioning and copy.
- Surf and yoga imagery.
- Eligibility and level guidance.
- Daily schedule and package inclusions.
- Yoga-specific testimonials.
- Video titles, thumbnails, links, and playback.
- Booking destination and analytics offer identifier.
- Published per-person shared-room starting prices, with final totals confirmed in Bookinglayer.

The page should make the offer feel like one considered daily rhythm rather than a surf package with yoga added as an afterthought.

## 2. Goals and success criteria

### Primary goal

Help prospective guests understand the balance between coached or guided surfing, supervised practice, evening yoga, accommodation, food, and logistics—then confidently enter the live booking flow.

### Audience

- Solo travelers, couples, and friends.
- Beginner, intermediate, and advanced surfers.
- Guests who want surf progression or local guidance without giving up recovery and wellbeing.
- Travelers who value structured activity, good food, comfortable accommodation, and a social but non-party environment.
- Yoga beginners and experienced practitioners; previous yoga experience is not required.

### Success criteria

- A visitor can identify the offer, eligibility, yoga schedule, surf format, main inclusions, and booking action without leaving the page.
- Surf and yoga receive balanced visual and editorial emphasis.
- Every conversion CTA opens the Surf & Yoga Bookinglayer product.
- No copy promises morning yoga or two yoga sessions per day.
- Published shared-room starting prices are shown accurately; Bookinglayer remains the source of final pricing and room availability.
- The page remains visually indistinguishable from the established Surf Guiding design system except for content and imagery.

## 3. Source-of-truth hierarchy

Use sources in this order:

1. **Live Bookinglayer product:** package facts, schedule, eligibility, inclusions, and booking destination.
2. **Live Bookinglayer gallery:** primary Surf & Yoga imagery.
3. **The Surf Hotel YouTube channel:** video titles, destinations, and thumbnails.
4. **The supplied Google Drive:** supporting hotel, food, and surf imagery.
5. **Existing Surf Guiding package:** common hotel assets, brand assets, layout, styles, and interactions.

If sources disagree, the English content returned by the live Bookinglayer product wins.

### Locked live product facts

- Yoga is one 60-minute evening session daily, except Thursday.
- Surfing includes six mornings of two-hour surf coaching or guiding with a professional instructor.
- Surfing also includes six two-hour self-practice sessions under instructor supervision.
- The offer is suitable for beginner, intermediate, and advanced surfers.
- A seven-night stay includes seven breakfasts, six beach lunches, and six rooftop dinners.
- The kitchen is closed Thursday.
- Daily surf transport, surfboard use, wetsuit use, airport transfers, Wi-Fi, towels, and room cleaning are included.
- Published per-person shared-room starting prices are €413 for 4 nights, €712 for 7 nights, €1,021 for 10 nights, and €1,434 for 14 nights.
- Final pricing and room availability remain date-, room-, and guest-dependent in Bookinglayer.

## 4. Non-goals and content guardrails

- Do not redesign, reorder, remove, or add primary sections.
- Do not introduce a new color palette, font system, or component style.
- Do not turn the page into a generic wellness retreat.
- Do not imply that yoga replaces surf instruction or that surfing is optional.
- Do not promise sunrise yoga, twice-daily yoga, private yoga, meditation classes, massage, or excursions as included.
- Do not promise a named surf spot or fixed daily schedule; surf timing and location depend on conditions.
- Do not present a starting price as a guaranteed final total; identify the displayed amounts as per-person shared-room prices.
- Do not name current instructors unless the user separately verifies the roster.
- Do not hotlink page imagery in production; download and self-host approved assets.
- Do not use unrelated stock imagery or AI-generated people.

## 5. Information architecture and final copy deck

The following section order and copy are implementation requirements.

### 5.1 Header

**Brand lockup:** `The Surf Hotel × Surf & Yoga`  
**Brand accessibility label:** `The Surf Hotel Surf & Yoga — back to top`  
**Header CTA:** `Check dates & rooms ↗`

The header CTA links to the primary booking URL.

### 5.2 Hero

**Eyebrow:** `Surf & yoga · Tamraght, Morocco`

**H1 lines:**

1. `Surf with focus.`
2. `Move with purpose.`
3. `Recover deeply.`

**Body:**  
`Professional surf coaching or guiding, supervised water time and evening yoga come together in one complete stay by the Moroccan coast.`

**Primary CTA:** `Check dates & rooms ↗`  
**Secondary CTA:** `See how the week flows ↓`

**Proof strip:**

- `<strong>All levels</strong> welcome`
- `<strong>Coaching or guiding</strong> matched to you`
- `<strong>Evening yoga</strong> except Thursday`
- `<strong>Equipment</strong> included`

**Hero slideshow:**

1. Seated yoga portrait.
2. Surfer riding a clean green wave.
3. Triangle yoga pose.
4. Smiling surfer paddling.

### 5.3 Offer reframe

**Eyebrow:** `Two practices, one considered week`

**Heading:**

- Standard line: `Not surf plus yoga.`
- Accent line: `One rhythm built around both.`

**Body:**  
`The water asks for energy, attention and repetition. Evening yoga gives the body space to stretch, settle and return ready for the next surf day.`

**CTA:** `Check dates & rooms ↗`

Preserve the minimal scroll-driven surfer-on-wave border animation from Surf Guiding without modification.

### 5.4 Method: The Daily Rhythm

**Carousel accessibility label:** `The Surf & Yoga daily rhythm`

**Eyebrow:** `The Daily Rhythm`

**Heading:**  
`Build skill.`  
`Give the body back.`

**Lead:**  
`The day moves from focused instruction to independent practice, then closes with an hour designed to release what the ocean asked of you.`

**Three steps:**

1. **Surf**
   - Caption: `Professional input in the water`
   - Body: `Start with two hours of coaching or guiding matched to your current surf level and the day’s conditions.`
2. **Practice**
   - Caption: `Time to make it yours`
   - Body: `Use another two supervised hours to repeat, experiment and turn useful feedback into feeling.`
3. **Reset**
   - Caption: `An evening return to balance`
   - Body: `Finish with a 60-minute yoga session focused on mobility, breathing and recovery for the next day.`

**Method quote:**  
`Progress is not only what happens on the wave. It is also how well you return to it tomorrow.`

**CTA:** `Check dates & rooms ↗`

**Carousel frames and captions:**

1. Longboard surfer — `Meet the day’s conditions with professional support`
2. Water-level paddling — `Build confidence through supervised repetition`
3. Triangle yoga pose — `Open the body after time in the water`
4. Close-up stretch — `Slow down, breathe and prepare to go again`

### 5.5 Expertise section

Retain the dark section and the same large-image-plus-three-cards layout.

**Eyebrow:** `Support for both sides of the day`

**Heading:**  
`Two practices.`  
`One considered week.`

**Intro body:**  
`Surf instruction responds to your level and the conditions. Yoga responds to the body that comes back from the ocean. Together, they keep the week active without making it feel relentless.`

**Large image:** Triangle yoga pose with the warm studio interior.

**Figure caption:**  
`Professional surf support in the morning. Intentional recovery in the evening.`

**Cards:**

1. **Coaching or guiding**
   - Role: `Level · conditions · progression`
   - Body: `Receive structured coaching or local guidance appropriate to how independently you already surf.`
2. **Supervised practice**
   - Role: `Repetition · confidence · water time`
   - Body: `Use dedicated practice time with an instructor watching over the session.`
3. **Sunset yoga**
   - Role: `Mobility · breathing · recovery`
   - Body: `Close the active day with a one-hour session designed to stretch, settle and restore.`

### 5.6 Full-bleed emotional statement

**Image:** Close-up yoga stretch in warm evening light.

**Eyebrow:** `Effort meets recovery`

**Heading:**  
`The ocean asks.`  
`The mat answers.`

**Body:**  
`Surfing builds energy, awareness and fatigue in equal measure. Evening yoga creates a quieter hour to release the day and arrive at the next one ready.`

### 5.7 Typical day

Preserve the teal section and six-card layout.

**Eyebrow:** `A day in Tamraght`

**Heading:**  
`From first paddle`  
`to final breath.`

**Timeline cards:**

1. `08:00` — **Breakfast**  
   `Start with a healthy breakfast while the surf team reads the day’s conditions.`
2. `09:00` — **Surf plan**  
   `Meet the team, prepare equipment and travel to the selected break.`
3. `10:30` — **Coaching or guiding**  
   `Spend two focused hours in the water with professional instruction matched to your level.`
4. `12:30` — **Beach lunch**  
   `Refuel by the water with a practical lunch before the second session.`
5. `13:30` — **Supervised practice**  
   `Use another two hours to repeat, explore and build confidence under supervision.`
6. `18:30` — **Evening yoga**  
   `Stretch, breathe and recover for one hour before dinner on the rooftop.`

Add microcopy below the cards:  
`Times are illustrative. Surf location and timing change with conditions. Evening yoga runs daily except Thursday.`

### 5.8 Surf-level selector

Retain the split image-and-content layout. Use three accessible tabs.

**Section image:** Smiling surfer paddling at water level.

**Eyebrow:** `Beginner to advanced`

**Heading:**  
`Wherever you begin,`  
`the week meets you there.`

**Intro:**  
`The surf team adapts the morning format to your independence, confidence and goals. Yoga remains accessible at every experience level.`

#### Beginner tab

**Tab label:** `Beginner`

**Panel heading:**  
`Learn the foundations with clear instruction and a safe progression into the ocean.`

**Panel bullets:**

- Understand equipment, beach safety and basic ocean awareness.
- Build an efficient paddle and stable take-off.
- Ride broken waves with growing control.
- Use supervised practice to repeat the essentials.

#### Intermediate tab

**Tab label:** `Intermediate`

**Panel heading:**  
`Turn existing confidence into better positioning, cleaner decisions and more consistent green waves.`

**Panel bullets:**

- Improve paddle timing and wave selection.
- Refine take-offs on unbroken waves.
- Work on speed and turns in both directions.
- Develop stronger understanding of rips, tides and etiquette.

#### Advanced tab

**Tab label:** `Advanced`

**Panel heading:**  
`Use professional or local guidance to make better decisions and more of the available conditions.`

**Panel bullets:**

- Surf independently with confident board control.
- Use condition-led spot selection and local context.
- Refine positioning, timing and line choice.
- Balance demanding sessions with deliberate evening recovery.

**CTA:** `Check dates & rooms ↗`

### 5.9 Video section

**Eyebrow:** `See the rhythm`

**Heading:**  
`Surf. Stretch.`  
`Start again.`

**Body:**  
`Watch how time in the ocean and time on the mat come together inside one complete stay at The Surf Hotel.`

#### Main inline video

- YouTube ID: `n3JnEJYet3M`
- Official title: `Surf & Yoga in Morocco | Find Balance Between Waves & Wellness`
- Poster label: `Surf & Yoga in Morocco`
- Poster headline: `Find balance between waves and wellness`
- Button accessibility label: `Play Surf and Yoga in Morocco video`
- Thumbnail source: `https://i.ytimg.com/vi/n3JnEJYet3M/maxresdefault.jpg`

On click, replace the poster—not the entire section—with:

`https://www.youtube-nocookie.com/embed/n3JnEJYet3M?autoplay=1&rel=0&playsinline=1&enablejsapi=1`

Required iframe attributes:

- `title="Surf & Yoga in Morocco video"`
- `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"`
- `allowfullscreen`
- `referrerpolicy="strict-origin-when-cross-origin"`

The video must play inside the page. Include a secondary `Watch on YouTube ↗` link as a fallback, but it must not replace inline playback as the primary action.

#### Supporting cards

1. YouTube ID: `ziNw9Fzd288`
   - Label: `Guest experience`
   - Headline: `What a stay at The Surf Hotel feels like`
   - Destination: `https://www.youtube.com/watch?v=ziNw9Fzd288`
   - Thumbnail: `https://i.ytimg.com/vi/ziNw9Fzd288/maxresdefault.jpg`
2. YouTube ID: `VmpdPEbD2Fk`
   - Label: `Morocco surf film`
   - Headline: `A surf day in winter`
   - Destination: `https://www.youtube.com/watch?v=VmpdPEbD2Fk`
   - Thumbnail: `https://i.ytimg.com/vi/VmpdPEbD2Fk/maxresdefault.jpg`
3. Channel card
   - Label: `YouTube channel`
   - Headline: `Explore all videos`
   - Destination: `https://www.youtube.com/@thesurfhotelmorocco/videos`

Supporting cards open in a new tab with `rel="noopener"`.

### 5.10 Hotel experience

Preserve the three-tab room, food, and social-life component and existing shared imagery.

**Eyebrow:** `Stay well. Eat well. Move again.`

**Heading:**  
`Active days.`  
`An easy place to land.`

**Body:**  
`Comfortable rooms, healthy meals and relaxed shared spaces make it easier to give energy to the ocean and still enjoy what comes after.`

#### Sleep well tab

**Heading:** `Choose the room that fits how you travel.`

**Body:**  
`Shared room, double or twin, junior suite and master suite options are available. All room types include an en-suite bathroom, air conditioning and Wi-Fi.`

Keep the existing room-type list and `Check dates & rooms ↗` CTA.

#### Eat well tab

**Heading:** `Food that supports the whole day.`

**Body:**  
`Start with breakfast, take lunch to the beach and come back for dinner on the rooftop. Healthy, generous meals are part of the rhythm, with selected dietary needs available on request.`

**List:**

- Breakfast — `Start with real energy`
- Beach lunch — `Practical fuel between sessions`
- Rooftop dinner — `Slow down and eat together`
- Dietary needs — `Share them before arrival`

#### Reset together tab

**Heading:** `Connection when you want it. Space when you need it.`

**Body:**  
`Rooftop sunsets, lounge spaces, games and the yoga room let the day taper naturally after the final session.`

Keep the established social-space list and imagery.

### 5.11 Included section

**Eyebrow:** `One booking, the complete rhythm`

**Heading:**  
`Less arranging.`  
`More living.`

**Body:**  
`The seven-night package brings surfing, yoga, accommodation, food and daily logistics into one stay.`

**Inclusion list:**

- Seven nights of accommodation with en-suite bathroom.
- Seven healthy breakfasts.
- Six beach lunches.
- Six rooftop dinners; the kitchen is closed Thursday.
- Six two-hour surf coaching or guiding sessions.
- Six two-hour supervised self-practice surf sessions.
- One hour of evening yoga daily except Thursday.
- Daily transport to the selected surf spot.
- Six days of surfboard and wetsuit use.
- Agadir airport pickup and drop-off.
- Wi-Fi, fresh towels and room cleaning.

**Microcopy:**  
`Excursions around Agadir can be booked separately. Live inclusions, room availability and the final price appear in the booking flow.`

Use the existing meal-and-chef collage assets.

### 5.12 Guest stories

Use paraphrased, yoga-specific guest feedback. Do not present paraphrases as direct quotations.

**Eyebrow:** `Surf & Yoga guest stories`

**Heading:**  
`Different starting points.`  
`The same feeling at the end.`

**Rating lockup:** retain the existing Tripadvisor presentation and rating treatment.

**Testimonials:**

1. **Segment:** `Recharge week`
   - Copy: `Surf coaching, yoga, generous food and rooftop views made the stay feel like a complete reset after months of travel.`
   - Attribution: `Astroturfah`
   - Source label: `Guest review · paraphrased`
2. **Segment:** `Breath and recovery`
   - Copy: `The yoga teacher’s breathing techniques became one of the most memorable parts of an already welcoming surf trip.`
   - Attribution: `Drew D.`
   - Source label: `Guest review · paraphrased`
3. **Segment:** `Perfect complement`
   - Copy: `Yoga felt like the right counterpart to surfing: a calm hour that helped the body release the day.`
   - Attribution: `Syl R.`
   - Source label: `Guest review · paraphrased`
4. **Segment:** `Post-surf calm`
   - Copy: `The teacher brought exactly the calming energy needed to relax a tired body after surfing.`
   - Attribution: `Kira R.`
   - Source label: `Guest review · paraphrased`

**CTA support copy:**  
`Choose dates, compare available rooms and see the complete live price before confirming.`

**CTA:** `Check dates & rooms ↗`

### 5.13 Stay-length cards

Keep the existing four-card pricing layout and show the official per-person shared-room starting price for each stay length.

**Eyebrow:** `Choose your stay`

**Heading:**  
`Pick a length.`  
`See the price.`

**Intro:**  
`Starting prices are per person in a shared room. Your dates, room choice and number of guests determine the final total shown in Bookinglayer.`

**Cards:**

1. **4 nights**
   - Secondary label: `3 surf & yoga days`
   - Price: `From €413`
   - Body: `A shorter introduction to coached surfing, supervised practice and evening recovery.`
   - Link: `Check dates & rooms ↗`
2. **7 nights**
   - Badge: `Most booked`
   - Secondary label: `6 surf & yoga days`
   - Price: `From €712`
   - Body: `The complete weekly rhythm, with time to learn, repeat, recover and settle into the hotel.`
   - Link: `Check dates & rooms ↗`
3. **10 nights**
   - Secondary label: `9 surf & yoga days`
   - Price: `From €1,021`
   - Body: `More water time, more recovery and more opportunity to adapt to changing conditions.`
   - Link: `Check dates & rooms ↗`
4. **14 nights**
   - Secondary label: `13 surf & yoga days`
   - Price: `From €1,434`
   - Body: `Two weeks to build a deeper surf rhythm without rushing progress or recovery.`
   - Link: `Check dates & rooms ↗`

All card links use the primary booking URL and retain their duration analytics value.

### 5.14 FAQ

**Eyebrow:** `Before you book`

**Heading:**  
`Questions are part`  
`of a good decision.`

**Intro:**  
`The booking flow shows live room choices and final prices. These answers cover the questions guests usually ask first.`

**Questions and answers:**

1. **Can I join as a complete beginner?**  
   `Yes. The package welcomes beginner, intermediate and advanced surfers. Beginners receive foundational coaching in safety, equipment, paddling, take-offs and riding broken waves.`
2. **Is the surf component coaching or guiding?**  
   `It is adapted to your level. Guests who need structured instruction receive coaching; more independent surfers can receive condition-led guidance. Every activity day also includes supervised self-practice.`
3. **Do I need yoga experience?**  
   `No. The evening sessions are suitable for different experience levels and focus on mobility, breathing and recovery after surfing. Share injuries or movement limitations with the teacher before class.`
4. **How often is yoga included?**  
   `The seven-night package includes one 60-minute evening yoga session daily except Thursday. It does not include both sunrise and sunset sessions.`
5. **How much surfing is included?**  
   `The seven-night package includes six two-hour morning coaching or guiding sessions and six two-hour supervised self-practice sessions. Transport and the beach-lunch rhythm sit around those sessions.`
6. **What happens on Thursday?**  
   `The included evening yoga session and rooftop dinner do not run on Thursday. Reception can help with local recommendations for the evening.`
7. **Can I bring my own surfboard?**  
   `Yes. You may bring your own equipment or use the boards and wetsuits included for six surf days. Share equipment preferences before arrival if you plan to use hotel gear.`
8. **Can I come alone?**  
   `Yes. Surf sessions, beach lunches, yoga and rooftop dinners make meeting people natural, while shared and private room choices let you decide how social the stay feels.`
9. **Can dietary requirements be accommodated?**  
   `Vegetarian, vegan and selected dietary requirements can be accommodated when shared with the team in advance.`
10. **How do airport transfers work?**  
    `The package includes Agadir airport pickup and drop-off. Send reception your flight details after booking.`
11. **What happens after I click “Check dates & rooms”?**  
    `You enter the live Surf & Yoga booking flow, choose dates and guest details, compare available rooms and review the complete price before confirming.`

### 5.15 Final booking strip

Retain the branded Surf Hotel board image and dark overlay.

**Eyebrow:** `The next rhythm is simple`

**Heading:**  
`Ready for a week`  
`with better balance?`

**Body:**  
`Compare live dates, available rooms and the complete price before making your decision.`

**CTA:** `Check dates & rooms ↗`

### 5.16 Footer

**Footer line:**  
`Surf, yoga and warm Moroccan hospitality in Tamraght.`

Retain the existing email, legal links, contact link, copyright pattern, and booking-condition note.

### 5.17 Metadata

**HTML title:**  
`Surf & Yoga Morocco | The Surf Hotel`

**Meta description:**  
`Surf and yoga in Tamraght, Morocco for beginner, intermediate and advanced surfers. Coaching or guiding, supervised practice, evening yoga, equipment, meals and accommodation included.`

**Theme color:** `#0b3654`

## 6. Asset map

Download all offer-specific images into `assets/`; do not reference Bookinglayer or YouTube image URLs at runtime.

### Live Bookinglayer gallery

| Local filename | Content | Required use | Download source |
|---|---|---|---|
| `surf-yoga-hero-yoga.jpg` | Seated yoga portrait in warm studio light | Hero slide 1 and preload image | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/PzbMXvmWhk.jpg` |
| `surf-yoga-hero-surf.jpg` | Surfer riding a clean green wave | Hero slide 2 | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/TMweP7A44v.jpg` |
| `surf-yoga-triangle.jpg` | Triangle pose in the yoga room | Hero slide 3 and expertise image | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/k1dbHRohyN.jpg` |
| `surf-yoga-paddling-smile.jpg` | Smiling surfer paddling | Hero slide 4 and level-section image | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/tQcsm4Jg3c.jpg` |
| `surf-yoga-recovery.jpg` | Close-up yoga recovery stretch | Full-bleed section | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/eIQObJK2mK.jpg` |
| `surf-yoga-paddling.jpg` | Surfer paddling at water level | Method carousel | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/xnmqgIZWyR.jpg` |
| `surf-yoga-mat-detail.jpg` | Close-up standing stretch on mat | Method carousel | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/tRxv4lkyKa.jpg` |
| `surf-yoga-longboard.jpg` | Longboard surfer on open face | Method carousel | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/Z8kXk21shS.jpg` |
| `surf-yoga-wave-line.jpg` | Surfer drawing a line on a clean wave | Supporting surf imagery | `https://bookinglayer-cdn.ams3.cdn.digitaloceanspaces.com/uploads/businesses/1425/images/1440/PfPbBlxRrh.jpg` |

### Video thumbnails

| Local filename | Video | Source |
|---|---|---|
| `surf-yoga-video-poster.jpg` | Surf & Yoga in Morocco | `https://i.ytimg.com/vi/n3JnEJYet3M/maxresdefault.jpg` |
| `surf-yoga-video-guest.jpg` | Guest experience | `https://i.ytimg.com/vi/ziNw9Fzd288/maxresdefault.jpg` |
| `surf-yoga-video-winter.jpg` | A Surf Day in Winter | `https://i.ytimg.com/vi/VmpdPEbD2Fk/maxresdefault.jpg` |

If `maxresdefault.jpg` is unavailable, use `hq720.jpg`, then `hqdefault.jpg`.

### Shared local assets

Copy from the standalone Surf Guiding package unless replaced by a visibly stronger image from the supplied Drive:

- `logo-white.png`
- `grain.png`
- `tripadvisor-lockup.svg`
- `stay-room.webp`
- `stay-food.webp`
- `stay-life.webp`
- `meal.webp`
- `food-detail.webp`
- `review.webp`
- `booking-surf-hotel-board.jpg`

The final package must contain only assets it references.

## 7. Functional requirements

### Shared interactions to preserve

- Sticky header state after scrolling.
- Mobile sticky booking CTA.
- Scroll reveal transitions.
- Four-slide hero autoplay and progress bar.
- Pause or stop motion according to `prefers-reduced-motion`.
- Scroll-driven surfer-on-wave border animation.
- Image and testimonial carousels with buttons, keyboard controls, touch gestures, focus pause, and reduced-motion handling.
- Three surf-level tabs.
- Three hotel-experience tabs.
- FAQ accordion analytics.
- Booking-link analytics.

### Surf-level state

The JavaScript level configuration must use:

- `beginner`
- `intermediate`
- `advanced`

Default to `beginner`. Each tab updates the panel heading, four bullet points, `aria-labelledby`, selected state, and keyboard roving tabindex.

### Analytics

Set:

`offer: "surf_and_yoga"`

Retain established event names:

- `nav_booking_click`
- `hero_cta_click`
- `reframe_cta_click`
- `method_cta_click`
- `level_cta_click`
- `stay_cta_click`
- `reviews_cta_click`
- `pricing_card_click`
- `final_cta_click`
- `mobile_sticky_cta_click`
- `level_tab_select`
- `hotel_experience_tab`
- `video_testimonial_play`
- `faq_open`

For main video playback, send:

- `video_id: "n3JnEJYet3M"`
- `playback: "youtube_inline"`

### Booking behavior

- Every `.booking-link` points to the primary booking URL.
- No CTA points to Surf Coaching or Surf Guiding.
- Pricing cards retain `data-duration` values.
- Booking links must remain normal accessible anchors even if analytics is unavailable.

## 8. Accessibility and responsive requirements

- Preserve the skip link and semantic landmark structure.
- Keep one page-level `h1`; maintain logical heading order.
- Decorative hero slideshow images use empty alt text because the hero is already named by copy.
- Content images use the descriptions in this PRD.
- All interactive controls have visible focus states.
- Tabs implement `tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-controls`, and roving tabindex behavior.
- Carousel status uses `aria-live="polite"`.
- Hidden carousel slides use `aria-hidden` and `inert`.
- The inline iframe has a unique, descriptive title.
- Motion-heavy interactions stop or become static when reduced motion is requested.
- Maintain current desktop, tablet, and mobile breakpoints from `style.css`.
- Preserve current mobile CTA spacing so it does not cover footer or interactive content.

## 9. Standalone project structure

After PRD approval, the final directory must be:

```text
/home/pc/Downloads/TSHM/Surf & Yoga/
├── assets/
├── index.html
├── PRD.md
├── README.md
├── qa_report.md
├── script.js
└── style.css
```

All asset paths must be relative:

- HTML: `assets/<filename>`
- CSS grain texture: `assets/grain.png`
- Stylesheet: `style.css`
- Script: `script.js`

The page must not depend on parent-directory files or the Surf Guiding project after packaging.

## 10. QA and acceptance criteria

### Static validation

- `node --check script.js` exits successfully.
- Every `assets/...` reference resolves to a packaged file.
- No `../assets`, `../style`, or external production image references remain.
- No Surf Guiding booking URL remains.
- The four official per-person shared-room starting prices appear in the stay-length section.
- Major HTML container pairs are balanced.
- All four hero images, level tabs, stay tabs, testimonials, and FAQs are present.

### Content validation

- Yoga is consistently described as one evening hour daily except Thursday.
- Surfing is consistently described as coaching or guiding plus supervised practice.
- Beginner, intermediate, and advanced eligibility is consistent across hero, levels, FAQ, and metadata.
- Seven-night inclusions match Bookinglayer.
- Thursday closure information appears in inclusions and FAQ.
- Testimonials are labeled as paraphrases.
- Supporting video labels match the actual videos.

### Interaction validation

- Hero and carousel controls work without JavaScript errors.
- Keyboard arrows, Home, and End operate tab controls.
- Main yoga video plays inline and does not immediately redirect to YouTube.
- A secondary YouTube fallback remains available.
- Every booking CTA reaches the Surf & Yoga booking product.
- Reduced-motion mode disables autoplay and scroll-following movement.

### Documentation

`README.md` must explain:

- Project contents.
- Local HTTP preview command.
- Booking destination.
- Inline video requirement.
- Offer source-of-truth.

`qa_report.md` must record:

- Syntax result.
- Asset-path result.
- Booking-link result.
- Copy-leakage result.
- Video configuration result.
- Responsive and accessibility checks completed.
- Any limitations.

## 11. Implementation constraints

- Do not use Playwright or browser automation.
- Do not use Git.
- Prefer direct, minimal changes based on the existing Surf Guiding files.
- Do not alter the standalone Surf Guiding project.
- Do not create runtime project files until this PRD is reviewed and approved.
