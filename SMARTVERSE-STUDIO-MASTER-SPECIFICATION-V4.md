# SMARTVERSE STUDIO MASTER SPECIFICATION V7 ULTIMATE — PART 1

**Status:** Draft — Sections D through M contain design-system proposals awaiting Founder approval. Sections A through C restate and consolidate what has already been verified or decided in V5 Parts 1–6 and V6 Part 1. Nothing here is implemented; this remains documentation only.

**A note before Part 1 begins:** Sections A–C below are built entirely from decisions already locked in earlier parts of this specification series, so they carry the same confidence as those parts. Sections D onward (Design System, Color System, Typography, Icons, Animation) ask for choices — a hex palette, a font pairing, a spacing scale — that have never actually been decided anywhere in this project. No such decision exists to consolidate. So rather than inventing a palette and presenting it as settled, this document proposes one, clearly marked as a proposal, in a professional, cohesive style consistent with the "Apple / Stripe / Linear / Vercel / Notion / Framer" reference points from Part 1, Section 6 of V5. Nothing in Sections D–M is final until the Founder reviews and approves it — that review is the natural checkpoint before Part 2.

---

## SECTION A — AI CONSTITUTION

This section consolidates the constitution already locked in V6 Ultimate, Part 1, and does not change it. It is restated here so this document can stand as a single reference without requiring the reader to hold multiple files open.

**Founder Authority** — The Founder is the final decision maker. The latest Founder decision always overrides earlier assumptions.

**AI Roles** — For every implementation task, the acting role is simultaneously Lead Software Architect, Principal Frontend Engineer, Senior Full Stack/Next.js/React/TypeScript Engineer, Senior Firebase Architect, Senior UI/UX Designer, Senior SEO/Accessibility/Performance/Security Engineer, Senior Technical Writer, and Senior Repository/Code/Production Reviewer.

**Golden Rules**
- **Rule Zero — Never guess.** Missing information stops the task until clarified.
- **Rule One — Never invent.** No fabricated projects, routes, assets, Firebase collections, fields, API endpoints, environment variables, business logic, analytics/AdSense IDs, metadata, or social links.
- **Rule Two — Never destroy existing production work.** Inspect, understand, and merge before changing anything.
- **Rule Three — Repository integrity is mandatory.** One repository, one architecture, no restarts, no protected-file changes without approval.
- **Rule Four — One objective at a time.** No unrelated systems bundled into a single implementation response.
- **Rule Five — No placeholder content.** No Lorem Ipsum, dummy data, or placeholder anything in production output.

**Truth Policy** — Uncertainty is stated plainly; nothing is fabricated to appear confident.

**Production Philosophy** — Every output must be built as if it will power a real business today, never as a tutorial, demo, or boilerplate.

**Engineering Principles** — Production Ready, Scalable, Maintainable, Modular, Reusable, Accessible, Responsive, SEO Friendly, Secure, Performance Optimized, Strictly Typed, Future Proof, Enterprise Quality.

**Repository Protection Rules** — No new repositories, no framework migration, no architecture replacement, no deletion of verified work, no protected-file edits without explicit approval (protected files: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/globals.css`, per V5 Part 1, Section 10).

**No Placeholder Policy / No Duplicate Policy / No Fake Data Policy** — Restated together: shared logic lives in exactly one place (`lib/`, `hooks/`, `data/` — never duplicated across projects per V5 Part 3, Sections 32–34); no dataset, asset, or credential is ever fabricated to fill a gap; a gap is documented as **PENDING VERIFICATION** and left empty rather than filled with invented content.

---

## SECTION B — COMPLETE REPOSITORY ARCHITECTURE

This restates the architecture locked in V5 Part 3 (Sections 29–38) and corrected by the live audit in V5 Part 6, so that Part 1 of V7 is self-contained.

**Root Folder Structure** (root-level, no `src/`, per V5 Part 3 §29):
```
app/  components/  data/  lib/  hooks/  config/  types/  public/  styles/
```
Per the V5 Part 6 audit, `components/`, `data/`, `config/` currently exist only as broken flat files and must be recreated as real directories; `lib/`, `hooks/`, `types/` do not exist yet at all. This is a repair item, not a new decision — see Section C.

**App Router Structure** — One route tree under `app/`, covering Home, About, Ecosystem, per-project landing routes, Blog, Contact, legal pages, Auth, Dashboard, plus Next.js `loading.tsx`/`error.tsx`/`not-found.tsx` conventions, exactly as enumerated in V5 Part 3 §30.

**Components Structure** — Organized by responsibility under `components/`: `layout/`, `hero/`, `sections/`, `blog/`, `auth/`, `dashboard/`, `loading/`, `modal/`, `toast/`, `seo/`, `analytics/`, `firebase/`, `theme/`, `providers/`, per V5 Part 3 §31.

**Hooks** — `hooks/`: `useTheme`, `useWindowSize`, `useScroll`, `useIntersectionObserver`, `useMediaQuery`, `useAuth`, `useFirestore`, `useAnalytics`, `useSearch`, `useNavigation`, `useLoading`, per V5 Part 3 §34.

**Lib** — `lib/`: `utils.ts`, helpers, constants, validators, formatters, SEO/metadata/performance/image helpers, per V5 Part 3 §33.

**Types** — `types/`: shared TypeScript interfaces and types (e.g. `NavigationItem`, `ProjectData`, `UserRole`), consumed across `data/`, `components/`, and `hooks/`. Specific type definitions are not yet written — this folder does not exist in the live repository per the V5 Part 6 audit.

**Config** — `config/`: site configuration, Firebase configuration reference, navigation configuration, SEO/metadata defaults, analytics reference, feature flags, per V5 Part 3 §35.

**Data** — `data/`: `ecosystem.ts`, `navigation.ts`, `footer.ts`, `testimonials.ts`, `faq.ts`, `projects.ts`, `ebooks.ts`, `travel.ts`, `social.ts`, `partners.ts`, `statistics.ts`, `site.ts`, per V5 Part 3 §32. Real content for each remains **PENDING VERIFICATION** until supplied.

**CMS** — Not yet defined anywhere in Parts 1–6. Whether "CMS" means a headless CMS integration (e.g. for the Blog System in Part 2) or an in-house Firestore-backed content editor is **PENDING VERIFICATION** — this is a new architectural decision, not a restatement, and needs a Founder answer before Part 2 can specify the Blog System's CMS layer in detail.

**Dashboard** — `components/dashboard/` (component layer, V5 Part 3 §31) plus the `/dashboard` route (V5 Part 3 §30). Exact dashboard scope (single shared dashboard vs. per-project) remains **PENDING VERIFICATION** per V5 Part 4 §42.

**Assets** — `public/assets/` with 17 subfolders (`logos/`, `favicon/`, `hero/`, `founder/`, `team/`, `projects/`, `ecosystem/`, `ebooks/`, `travel/`, `blog/`, `social/`, `icons/`, `backgrounds/`, `partners/`, `screenshots/`, `videos/`, `documents/`), per V5 Part 3 §36. None of these exist in the live repository yet, per the V5 Part 6 audit — folder skeletons only, no invented files.

**Public Folder** — `public/` is the Next.js static-serving root; it holds `assets/` and any root-level static files (favicon.ico, robots.txt, sitemap.xml — the latter two may instead be dynamically generated per V5 Part 4 §49).

**SEO Folder** — Per V5 Part 6 §63, a standalone root-level `seo/` folder was flagged as **not part of the approved architecture**; SEO logic belongs in `components/seo/` and `lib/` (SEO/metadata helpers). This remains the position in V7 unless the Founder overrides it.

**Documentation** — Per V5 Part 6 §63/§66, a `docs/` folder is a reasonable, low-risk candidate for storing this specification series inside the repository, but its use is still **PENDING VERIFICATION** from the Founder.

**Scripts** — Per V5 Part 6 §63/§66, a root-level `scripts/` folder was flagged as not part of the approved architecture unless a specific need (build/seed/maintenance scripts) is defined. Still **PENDING VERIFICATION**.

**Build Structure** — Standard Next.js 15 build output (`.next/`), untouched by hand, excluded via `.gitignore`. No custom build pipeline has been defined anywhere in Parts 1–6; if one is needed (e.g. a monorepo build step), that is a new decision, currently **PENDING VERIFICATION**.

---

## SECTION C — REPOSITORY REPAIR PLAN

This section does not repeat the full audit table from V5 Part 6 — it remains the authoritative repair plan and is incorporated here by reference. Summarized for this consolidated document:

- **Broken folders / flat files** — `components`, `data`, `config`, `assets`, `pages`, `projects`, `scripts`, `seo`, `styles`, `docs`, and `public/public` all exist as flat placeholder files rather than directories (V5 Part 6 §61–63). Repair: delete each flat file, then recreate as a real directory only for the items confirmed to belong in the approved architecture.
- **Missing folders** — `lib/`, `hooks/`, `types/`, and the full `public/assets/` subfolder tree do not exist in any form. Repair: create as empty directories; populate only with real, founder-supplied content.
- **Wrong directory placement** — `page.tsx` sits at the repository root instead of `app/page.tsx`, meaning the homepage currently has no working route. Repair: move to `app/page.tsx` (V5 Part 6 §63).
- **Wrong imports / wrong aliases** — `tsconfig.json`'s path aliases already reference `@/pages/*`, `@/projects/*`, `@/scripts/*`, `@/seo/*`, `@/docs/*`, several of which point at folders this audit recommends against recreating. Repair: resolve once the Founder answers the open questions in V5 Part 6 §66, then apply a scoped, approved edit to the protected `tsconfig.json`.
- **Duplicate folders** — `public/public` duplicates the intended `public/assets/` path; the root-level `assets` file duplicates the same intended target. Repair: delete both; the single correct target is `public/assets/`.
- **Production repair strategy** — Execute in the exact order: (1) resolve the six open Founder decisions logged in V5 Part 6 §66, (2) delete confirmed-obsolete flat files, (3) move `page.tsx`, (4) create the confirmed directory skeletons, (5) apply the approved `tsconfig.json` alias edit, (6) only then begin populating `data/`, `config/`, and `components/` content, one file at a time, under the Part 5 (V5) component workflow.

No new repair items are introduced in V7 that were not already found by the live audit in V5 Part 6. V7's contribution to this section is organizational, not investigative.

---

## SECTION D — DESIGN SYSTEM

**Status: Proposal, pending Founder approval.** Nothing below has been previously decided; it is presented as a cohesive recommendation consistent with the "premium, luxury, clean, modern, minimal, fast" brief already locked in V5 Part 1, Section 6.

**Premium UI / UX principles**
- Generous white space over dense information; every screen should feel like it has room to breathe, closer to Linear/Notion than a traditional SaaS dashboard.
- One primary action per screen; secondary actions are visually quieter.
- Motion communicates state changes (loading, success, navigation) rather than decorating the page — see Section H.

**Enterprise Layout**
- A consistent 12-column grid at desktop width, collapsing to 4 columns on mobile (see Section I).
- A persistent, slim top navigation bar (not a heavy enterprise sidebar-everywhere pattern) for marketing/public pages; a sidebar layout reserved specifically for `/dashboard`, matching the Layout Components already defined in V5 Part 3 §31.

**Glass Morphism** — Used sparingly: translucent, blurred-background panels (`backdrop-filter: blur()`) reserved for overlays, modals, and the announcement bar — never for primary content cards, to avoid harming text contrast and accessibility (Section J).

**Neumorphism** — Not recommended as a primary style. Soft-shadow, low-contrast neumorphic UI tends to conflict with the accessibility contrast requirements in Section J and the "clean, modern, minimal" brief in V5 Part 1 §6. Proposed for founder decision: exclude neumorphism from the design language entirely, or approve it for narrow, decorative use only (e.g. a single dashboard widget style).

**Card System** — One base card component (`components/sections/Cards`, per V5 Part 3 §31) with consistent radius, border, and shadow tokens (Section D below), parameterized for the variants already named in that section: `ProjectCards`, `FeatureCards`, `PricingCards`.

**Grid System** — 12-column desktop grid, 8-column tablet, 4-column mobile; consistent gutter width proposed at 24px desktop / 16px mobile.

**Spacing System** — A proposed 4px base spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px, mapped to Tailwind's default spacing scale rather than a custom one, to avoid deviating from the protected `tailwind.config.ts` (V5 Part 1 §10) without cause.

**Border Radius** — Proposed scale: 8px (small elements, buttons, inputs), 12px (cards), 20px (hero panels/modals), fully rounded for avatars/pills.

**Shadows** — Proposed: a single soft ambient shadow for resting cards, a slightly larger shadow on hover, and a colored/branded shadow reserved for primary CTA buttons only — no heavy drop shadows elsewhere, consistent with the Apple/Stripe/Vercel reference points.

**Blur** — Reserved for glass-morphism surfaces only (above), typically 12–20px blur radius.

**Motion Rules** — See Section H for the full animation system; the design-system-level rule is that motion duration stays under 300ms for UI feedback (hover, click) and under 600ms for section reveals, with easing curves standardized (Section H) rather than varied per component.

---

## SECTION E — COLOR SYSTEM

**Status: Proposal, pending Founder approval.** No brand color values exist anywhere in Parts 1–6 of this specification. The palette below is a professional starting proposal, not a verified brand asset — final hex values should be reconciled against the actual verified logo files once the Google Drive asset export (V5 Part 1 §16) is available, since a logo's existing color often anchors the rest of the palette.

| Token | Proposed Value | Usage |
|---|---|---|
| Primary | `#0F172A` (deep slate/near-black) | Primary text, primary buttons on light backgrounds |
| Secondary | `#1E293B` | Secondary surfaces, dark-mode base |
| Accent | `#2563EB` (blue) | Links, active states, focus rings |
| Premium Gold | `#C9A227` | Premium/founder-tier accents only — used sparingly |
| Premium Black | `#000000` | True black, reserved for high-contrast dark-mode surfaces |
| Premium White | `#FFFFFF` | Base light-mode background |
| Background | `#F8FAFC` | Default light-mode page background |
| Cards | `#FFFFFF` with `#E2E8F0` border | Default card surface |
| Text (primary) | `#0F172A` | Body copy |
| Text (secondary) | `#64748B` | Muted/secondary copy |
| Borders | `#E2E8F0` | Default dividers, card borders |
| Hover | 8% darken/lighten of the base token | Interactive hover state |
| Success | `#16A34A` | Confirmations, positive states |
| Error | `#DC2626` | Form errors, destructive actions |
| Warning | `#D97706` | Caution states, pending states |

This table is a proposal only. **Every value above requires explicit Founder sign-off before being written into `tailwind.config.ts`,** consistent with Golden Rule One (never invent verified brand facts) — a color palette is a brand decision, not an engineering fact, and is flagged for approval rather than silently adopted.

---

## SECTION F — TYPOGRAPHY

**Status: Proposal, pending Founder approval.** No font decision exists anywhere in Parts 1–6.

- **Primary Font (body):** Proposed — Inter (excellent legibility, native `next/font` support, used by Linear/Vercel).
- **Secondary Font (UI labels/captions):** Proposed — Inter, same family at lighter weight, to avoid unnecessary font-loading overhead (Section L, Performance).
- **Display Font (hero headlines):** Proposed — a single distinct display face (e.g. a geometric sans such as "Söhne" or a comparable open-source alternative such as "General Sans") to give hero sections a premium feel distinct from body text. Exact choice depends on licensing — **PENDING VERIFICATION**.
- **Font Pairing:** Display font for H1/H2 hero headlines only; Inter for everything else (H3 and below, body, UI).
- **Hero Fonts:** Display font, large scale (see Font Scale below), tight letter spacing.
- **Dashboard Fonts:** Inter only, throughout — dashboards prioritize density and legibility over expressive typography.
- **Font Sizes / Scale:** Proposed modular scale (base 16px, ratio 1.25): 12, 14, 16, 20, 25, 31, 39, 49, 61px, mapped to Tailwind's `text-xs` through `text-6xl` utilities.
- **Letter Spacing:** Slightly tightened (`-0.02em`) on large display text; default tracking on body text.
- **Line Heights:** 1.5 for body copy, 1.2 for headings, 1.1 for hero display text.

---

## SECTION G — ICON SYSTEM

- **Icon Library:** Lucide React — already locked as the official icon library in V5 Part 1 §7. No separate Heroicons integration is planned; introducing a second icon library would violate the "no duplicate systems" principle (Section A, No Duplicate Policy) unless the Founder has a specific reason to need it, which is **PENDING VERIFICATION**.
- **SVG Rules:** All custom (non-Lucide) SVGs live under `public/assets/icons/` per V5 Part 3 §36 and are optimized (no inline metadata bloat) before being committed.
- **Sizes:** Proposed standard sizes — 16px (inline with text), 20px (buttons/form fields), 24px (default UI icon), 32px (feature/section icons).
- **Colors:** Icons inherit `currentColor` by default so they follow text color tokens from Section E, rather than being hardcoded.
- **Animation:** Icon-level motion (e.g. a chevron rotating on accordion expand) uses the same Framer Motion conventions as Section H, kept under 200ms.

---

## SECTION H — ANIMATION SYSTEM

Framer Motion is the official animation library, already locked in V5 Part 1 §7.

- **Scroll Reveal:** Section-level fade/slide-up on scroll, powered by the `useIntersectionObserver` hook (V5 Part 3 §34), applied to Section Components (V5 Part 3 §31) — not applied to every individual element, to avoid a "confetti" effect.
- **Page Transition:** Subtle cross-fade between route changes; no heavy full-page slide transitions, to keep navigation feeling instant per the Performance goals in Section L.
- **Loading:** Skeleton loaders (Loading Components, V5 Part 3 §31) rather than spinners wherever content shape is predictable (cards, lists); spinners reserved for indeterminate actions (form submission).
- **Hover:** Buttons and cards receive a subtle scale (1.02x) and shadow increase (Section D) on hover, under 200ms.
- **Buttons:** Press state (scale down slightly, ~0.97x) on click for tactile feedback.
- **Cards:** Hover lift (Section D shadow token increase) plus the 1.02x scale above.
- **Dashboard:** Minimal motion — data-heavy views prioritize instant rendering over decorative animation; only state transitions (row added/removed, toast appearing) are animated.
- **Sidebar:** Slide-in/out on mobile, instant on desktop (no animation needed for a persistently visible sidebar).
- **Navigation bar:** Background/blur transitions in on scroll (from transparent-over-hero to solid), rather than being static.
- **Mobile:** All animations reduced in complexity on mobile (fewer simultaneous animated elements) both for performance (Section L) and to respect `prefers-reduced-motion` (Section J).

---

## SECTION I — RESPONSIVE RULES

Proposed breakpoint scale, aligned to Tailwind's default breakpoints to avoid deviating from the protected `tailwind.config.ts` without cause:

| Breakpoint | Width | Target |
|---|---|---|
| Mobile | < 640px | Phones |
| Mobile Landscape | 640–767px | Phones, landscape orientation |
| Tablet | 768–1023px | Tablets, foldables (unfolded) |
| Laptop | 1024–1279px | Small laptops |
| Desktop | 1280–1535px | Standard desktop monitors |
| Ultra Wide | ≥ 1536px | Large/ultra-wide monitors, content max-width capped (proposed 1440px) rather than stretched edge-to-edge |
| Foldable | Variable | Treated as Tablet breakpoint by default; no foldable-specific CSS unless a real device issue is reported |

---

## SECTION J — ACCESSIBILITY

- **Standard:** WCAG 2.1 AA, with AAA contrast targeted specifically for GreenCare Digital Hospital given its healthcare/YMYL sensitivity, per V5 Part 2 §23.5 and V5 Part 3 §39.
- **Keyboard:** Full keyboard operability for all interactive components (nav, forms, modals, dashboard); no mouse-only interactions.
- **Screen Reader:** Semantic HTML first; ARIA attributes used only to fill genuine gaps semantic HTML can't cover (per V5 Part 3 §39).
- **Focus States:** A single, consistent visible focus ring (using the Accent color token from Section E) across every interactive element — never suppressed.
- **Contrast:** Minimum 4.5:1 for body text, 3:1 for large text/UI components, verified against the Section E palette before it is finalized.
- **Motion Reduction:** All Framer Motion animations respect `prefers-reduced-motion`, falling back to instant state changes.

---

## SECTION K — SEO

This restates and slightly expands V5 Part 4, Section 49 rather than introducing new decisions.

- **Meta / OpenGraph / Twitter Cards:** Generated per-route via `generateMetadata`, per V5 Part 3 §33 (SEO helpers) and Part 4 §49.
- **Schema / Structured Data / JSON-LD:** Organization, Website, per-project schema (varying by vertical), Breadcrumb, and Blog/Article schema, per V5 Part 4 §49.
- **Robots / Sitemap:** Dynamically generated `robots.txt` and `sitemap.xml` via Next.js conventions, per V5 Part 4 §49 — not yet implemented in the live repository (V5 Part 6 §64).
- **Canonical URLs:** Set on every route referencing `NEXT_PUBLIC_SITE_URL` (V5 Part 4 §47).

No new SEO decisions are introduced here; this section exists so V7 Part 1 is self-contained.

---

## SECTION L — PERFORMANCE

Restates V5 Part 3 §39 and V5 Part 4 §41/§50 together:

- **Code Splitting / Lazy Loading:** Automatic per-route via App Router; manual `next/dynamic` splitting for heavy, below-the-fold, or project-specific widgets (e.g. maps).
- **Caching / ISR / SSR:** Static generation with Incremental Static Regeneration for marketing/content pages; server-side rendering or client fetching for user-specific/dashboard data. Exact ISR intervals remain **PENDING VERIFICATION** (V5 Part 3 §39).
- **Image Optimization:** Next.js `<Image>` throughout, WebP/AVIF negotiation, responsive `sizes`.
- **Bundle Optimization:** Avoiding duplicate icon/animation libraries (Section G), tree-shaking via ES modules, no unnecessary client-side JavaScript on static marketing pages (favor Server Components per V5 Part 3 §58/§31).
- **Core Web Vitals:** LCP, CLS, and INP tracked as the primary metrics, per V5 Part 3 §39.

---

## SECTION M — SECURITY

Restates V5 Part 4 §48 together with the live repository finding from V5 Part 6 §63:

- **Headers:** `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` — already partially implemented in `next.config.mjs` per the V5 Part 6 audit, ahead of where the specification assumed the project stood.
- **CSP:** Planned, restricting script/style/image origins to trusted domains (Firebase, Google Analytics); exact directives **PENDING VERIFICATION** until third-party integrations (payments, affiliate networks — Part 2) are finalized.
- **Firebase Security:** Least-privilege, role-based Firestore/Storage rules philosophy, per V5 Part 4 §45–46 — rules syntax itself is deferred to implementation, not written in specification documents.
- **Environment / Secrets:** Environment variable names documented (V5 Part 4 §47), no values ever committed; `.env`/`.env.*` already excluded via `.gitignore` per the V5 Part 6 audit, with `.env.example` still missing and flagged as a to-do.
- **Rate Limiting:** Planned via Firebase App Check and/or Cloud Functions for abuse-prone endpoints (contact form, reviews) — not yet implemented, per V5 Part 4 §45/§48.
- **Validation:** Shared validators in `lib/` (Section B above) applied to every form (contact, auth, job requests, appointments) rather than duplicated per form.

---

## End of Part 1

**Status:** Draft — Sections A–C ready to lock as-is (they restate already-approved decisions). Sections D–M are proposals awaiting explicit Founder approval before being treated as locked specification, per Golden Rule Zero and Golden Rule One.

**Open decisions carried into approval, before Part 2 can safely reference them:**
1. Section B — definition and scope of the "CMS" folder/system (new question, not previously answered).
2. Section D — approve, reject, or scope-limit Neumorphism as a design element.
3. Section E — approve or revise the proposed color palette (ideally reconciled against the real logo once the Google Drive asset export is available).
4. Section F — approve or revise the proposed font pairing (Inter + a display face), and resolve the display-font licensing question.
5. Section G — confirm no second icon library (Heroicons) is actually needed alongside Lucide React.
6. All open items already carried from V5 Part 6, Section 66 (`docs/`, `styles/`, `pages/`, `projects/`, `scripts/`, `seo/`, `tsconfig.json` aliases, README content, Google Drive asset export) remain open and are inherited by this document rather than re-litigated.

**Next Document:** Part 2 — Firebase Architecture, Firestore Schema, Homepage & Ecosystem Sites, Component Library, Dashboard/CMS, Search, Analytics, Monetization, AI Integration, Coding Standards, Deployment, and Production Checklist.
# SMARTVERSE STUDIO MASTER SPECIFICATION V7 ULTIMATE — PART 2

## PART 2 — COMPLETE IMPLEMENTATION, FIREBASE, COMPONENT LIBRARY, DASHBOARDS & FUTURE ECOSYSTEM

*(Continuation of Part 1. Part 1 is not restated or rewritten below — it remains in force. Where Part 2's source brief conflicts with something already locked in Parts 1–6 of V5 or V6 Part 1, that conflict is flagged explicitly rather than silently resolved, per Golden Rule One and Golden Rule Two.)*

---

## SECTION N — FIREBASE ENTERPRISE ARCHITECTURE

Restates and extends V5 Part 4, Section 41.

- **Firebase Authentication** — verified active (Email/Password, Google), per V5 Part 1 §15.
- **Firestore** — verified active; full schema in Section O below.
- **Cloud Storage** — verified active, structure per V5 Part 3 §36 and V5 Part 4 §46.
- **Cloud Functions** — reserved for future server-side logic (scheduled deal refresh, webhooks), not yet implemented, per V5 Part 4 §41.
- **Firebase Hosting** — one of three compatible hosting candidates (with Vercel, Netlify); final selection remains **PENDING VERIFICATION** per V5 Part 4 §50.
- **Firebase App Check** — reserved for future implementation to protect Firestore/Storage from abuse, recommended before any payment- or health-data-handling project ships, per V5 Part 4 §41.
- **Security Rules** — least-privilege, role-based philosophy locked in V5 Part 4 §45; actual rules syntax is an implementation artifact, not a specification artifact, and is intentionally not written here.
- **Composite Indexes** — required wherever a Firestore query filters/sorts on more than one field (e.g. listings filtered by city + trade for GharFix/KarigarHub, or by price + location for Smart Rent Universe). Specific indexes cannot be finalized until the actual query patterns behind each dashboard/search feature are implemented — flagged as an implementation-time task, not invented here.
- **Backup Strategy** — scheduled Firestore/Storage export recommended, especially for `payments`, `appointments`, and `documents`; exact schedule remains **PENDING VERIFICATION** per V5 Part 4 §50.
- **Recovery Plan** — restore from the latest backup plus redeploy from the last known-good Git commit; a formal, tested disaster-recovery runbook is still **PENDING VERIFICATION** per V5 Part 4 §50.
- **Multi-Environment Support** — Development / Staging / Production Firebase projects (or Firebase project aliases) are a new decision not previously addressed anywhere in Parts 1–6. Whether the ecosystem uses three separate Firebase projects, three environments within one project, or a single production-only project during this early stage is **PENDING VERIFICATION** — this materially affects the environment variable strategy in V5 Part 4 §47 and should be decided before Cloud Functions or CI/CD (Section X) are built.

---

## SECTION O — COMPLETE FIRESTORE DATABASE DESIGN

**Naming conflict flagged first:** V5 Part 4 §44 already documented a collection list (`users`, `profiles`, `projects`, `ebooks`, `travel`, `categories`, `newsletter`, `contacts`, `appointments`, `rentListings`, `workers`, `payments`, `subscriptions`, `analytics`, `settings`, `notifications`, `activityLogs`, `auditLogs`). The Part 2 brief supplies an overlapping but not identical list (`newsletters` vs. `newsletter`, `contact_messages` vs. `contacts`, `audit_logs`/`activity_logs` vs. `auditLogs`/`activityLogs`, plus new collections: `tools`, `blog`, `destinations`, `media`, `assets`, `tags`, `comments`, `feedback`, `partners`, `affiliates`). Per V5 Part 3 §38 (Naming Standards), Firestore collection names were not previously pinned to a specific case convention, and this is the first place a plural-snake_case pattern (`contact_messages`, `activity_logs`) appears alongside the earlier camelCase pattern (`activityLogs`, `auditLogs`). **This casing convention must be decided once, and applied to every collection** — recommend camelCase (`contactMessages`, `activityLogs`, `auditLogs`, `newsletter`) to stay consistent with the TypeScript/JavaScript-facing naming standards already locked in V5 Part 3 §38, but this is a proposal pending Founder approval, not a unilateral decision.

**Consolidated collection list** (merging both prior lists, deduplicated, in the recommended camelCase form — pending approval):

| Collection | Purpose | Status |
|---|---|---|
| `users` | Core account records, anchor collection | Locked concept (V5 Pt.4 §44) |
| `profiles` | Extended profile data, 1:1 with `users` | Locked concept |
| `projects` | Structured sub-project records (Section T) | Locked concept |
| `tools` | Smart Tools Universe individual tool records | New — schema PENDING VERIFICATION |
| `ebooks` | Digital Reads Studio catalog | Locked concept, content PENDING VERIFICATION |
| `blog` | Ecosystem-wide blog posts (Section S) | New — supersedes no prior collection, additive |
| `travel` | ExploreVista/TravelScope 360 deals | Locked concept |
| `destinations` | ExploreVista destination guides, distinct from `travel` deals | New — relationship between `travel` and `destinations` needs a one-line ownership rule before implementation (which collection is canonical for a given destination page) |
| `media` | Centralized media-library metadata (references into Storage) | New — likely backs the CMS Media module in Section R |
| `assets` | Ecosystem-wide asset metadata (logos, icons) | New — potential overlap with `media`; needs a defined boundary (e.g. `assets` = brand/system assets, `media` = content-author-uploaded assets) before implementation, flagged rather than assumed |
| `categories` | Shared taxonomy (blog, ebooks, trades, property types) | Locked concept |
| `tags` | Shared tagging, distinct from `categories` | New — additive |
| `comments` | User comments on blog posts | New |
| `notifications` | In-app notification records | Locked concept |
| `analytics` | Internal application-level analytics events | Locked concept, necessity still PENDING VERIFICATION |
| `settings` | Ecosystem-wide and per-project config | Locked concept |
| `payments` | Transaction records | Locked concept |
| `subscriptions` | Premium tier / plan state | Locked concept |
| `invoices` | Billing records distinct from `payments` | New — relationship to `payments` (one invoice → many payments, or 1:1) is PENDING VERIFICATION |
| `auditLogs` | Admin/Super Admin/Founder action log | Locked concept |
| `activityLogs` | General user activity log | Locked concept |
| `feedback` | General user feedback submissions | New |
| `contactMessages` | Shared contact form submissions | Renamed from `contacts` — pending approval |
| `newsletter` | Newsletter subscriber records | Kept singular per V5 Pt.4 §44, pending approval |
| `partners` | Partner/affiliate organization records | New |
| `affiliates` | Individual affiliate accounts/links, distinct from `partners` | New — boundary between `partners` and `affiliates` PENDING VERIFICATION |
| `appointments` | GreenCare Digital Hospital bookings | Locked concept |
| `rentListings` | Smart Rent Universe property listings | Locked concept |
| `workers` | GharFix/KarigarHub worker profiles (see Section T naming flag) | Locked concept |

**Per-collection documentation requirements** (applies uniformly to every collection above, per the Part 2 brief): document structure, field naming rules, timestamps, ownership, validation, and indexing strategy. Per Golden Rule One, **no field-level schema is invented here** — actual field names and types are defined at implementation time against real product requirements for each collection, following these shared conventions once approved:

- **Timestamps:** every document gets `createdAt` and `updatedAt` (Firestore `Timestamp` type), and `deletedAt` where soft-delete is used instead of hard delete.
- **Ownership:** every user-generated document carries an `ownerId` (or `userId`) field referencing `users/{uid}`, used by the least-privilege security rules in V5 Part 4 §45.
- **Validation:** enforced both client-side (shared validators in `lib/`, V5 Part 3 §33) and server-side (Firestore security rules field validation, V5 Part 4 §45) — never client-side only.
- **Indexing:** single-field indexes are automatic; composite indexes are added only when a real query requires them (Section N above), not pre-emptively for every possible filter combination.

---

## SECTION P — AUTHENTICATION & AUTHORIZATION

**New item flagged:** GitHub Login is introduced here for the first time. V5 Part 4 §42 verified only Email/Password and Google Sign-In as active, with "Future Social Providers" explicitly reserved but unscoped. Whether GitHub Login is meant for end-users (unusual for a consumer-facing ecosystem spanning travel/health/real estate) or specifically for Admin/Editor/Author accounts (more typical, since GitHub identity maps naturally to a technical/content-contributor role) is **PENDING VERIFICATION** — recommend scoping GitHub Login to Admin/Editor/Author roles only, pending Founder confirmation.

**Authentication methods:** Email/Password, Google Login (both locked), GitHub Login (new, scope pending), Password Reset, Email Verification, Session Management — all per the lifecycle already documented in V5 Part 4 §42.

**Role conflict flagged:** V5 Part 4 §43 already locked seven roles: Guest, Registered User, Premium User, Admin, Super Admin, Founder, Future Moderator. The Part 2 brief supplies a different seven: Super Admin, Admin, Editor, Author, Premium User, Free User, Guest. These are not the same list — `Founder` is missing, `Registered User` has become `Free User`, and `Editor`/`Author` replace the earlier `Future Moderator`. Per Golden Rule Two (never destroy existing decisions without approval), this is **not resolved unilaterally**. Proposed reconciliation, pending Founder approval:

| Role | Reconciliation |
|---|---|
| Founder | Kept — this is Muhammad Ali's ownership-tier role (V5 Pt.1 §2) and should not be silently dropped. |
| Super Admin | Kept as-is from both lists. |
| Admin | Kept as-is from both lists. |
| Editor | New — proposed as a content-focused role, narrower than Admin, for CMS/blog content management (Section S). |
| Author | New — proposed as the narrowest content role: can write/submit blog posts, cannot publish or manage other users' content, until an Editor/Admin approves. |
| Premium User | Kept — identical concept in both lists. |
| Free User | Proposed as the new name for what V5 Part 4 §43 called "Registered User" — same permission set, renamed for clarity. Requires Founder confirmation that this is a rename and not a scope change. |
| Guest | Kept — identical concept in both lists. |
| Future Moderator | Proposed to fold into the new Editor role rather than existing as a separate future role, since their responsibilities (content/comment moderation) overlap substantially — pending Founder approval. |

**Permission Matrix** — cannot be responsibly invented at the field/action level without real page and API surface to check it against (Golden Rule One). The matrix below documents access **by resource area only**, consistent with the level of detail already used in V5 Part 4 §43; a full action-by-action matrix (e.g. "can Editor delete another Author's draft?") is deferred to implementation review once the role list above is approved.

| Role | Public Pages | Dashboard | Own Content | Others' Content | Users/Roles Mgmt | Ecosystem Settings |
|---|---|---|---|---|---|---|
| Guest | Read | No | No | No | No | No |
| Free User | Read | Own only | Read/Write own | No | No | No |
| Premium User | Read | Own only, + premium features | Read/Write own | No | No | No |
| Author | Read | Content only | Read/Write own (draft) | No | No | No |
| Editor | Read | Content only | Read/Write own | Read/Write, publish | No | No |
| Admin | Read | Assigned project scope | Full | Full (assigned scope) | Limited (assigned scope) | Limited (assigned scope) |
| Super Admin | Read | All | Full | Full | Full | Full |
| Founder | Read | All | Full | Full | Full | Full, ultimate authority |

---

## SECTION Q — COMPLETE COMPONENT LIBRARY

This extends, rather than replaces, the component tree already locked in V5 Part 3, Section 31. Every item below maps to an existing folder in that tree; nothing here introduces a new top-level component category.

- **Buttons, Cards, Inputs, Forms** → `components/sections/` foundational atoms (V5 Pt.3 §31), each with default/hover/active/disabled/loading states, built to the Design System tokens proposed in V7 Part 1, Sections D–F (pending approval).
- **Tables, Charts** → new additions to `components/dashboard/` — required for the Analytics and Content modules in Section R below; not present in the V5 Part 3 tree because dashboards were not yet scoped in detail at that point.
- **Dashboard Widgets** → `components/dashboard/`, parameterized per module (Section R).
- **Navbar, Footer, Sidebar** → `components/layout/`, already specified in V5 Pt.3 §31.
- **Hero Sections, Pricing Tables, FAQ, Testimonials** → `components/hero/` and `components/sections/`, already specified in V5 Pt.3 §31.
- **Search Components** → new addition, backing `useSearch` (V5 Pt.3 §34) and the Search Engine described in Section S/Y below; proposed home: `components/search/`.
- **Blog Components** → `components/blog/`, already specified in V5 Pt.3 §31.
- **CMS Components** → new addition, proposed home: `components/cms/` — content editor UI, category/tag manager, media picker; depends on the CMS scope decision still open from V7 Part 1, Section B.
- **Modal System, Toast System, Loading States, Skeleton Loaders** → `components/modal/`, `components/toast/`, `components/loading/`, already specified in V5 Pt.3 §31.
- **Empty States, Error Components, Success Components** → new additions, proposed home: `components/feedback/` — shown when a list/query returns nothing, when an operation fails, or when an operation succeeds, respectively; distinct from the transient `Toast` system since these are in-layout states, not overlays.

Every component in this library — new or previously specified — must satisfy Accessibility (V7 Pt.1 §J), Responsiveness (V7 Pt.1 §I), Dark Mode (status still open — V6/V7 has not yet confirmed dark mode is in scope ecosystem-wide, only flagged as a possibility for Smart Tools Universe in V5 Pt.2 §23.1), Animation Rules (V7 Pt.1 §H), and Strict TypeScript (V5 Pt.3 §58).

No component is generated as code in this document. Actual component code generation follows the seven-step workflow already locked in V5 Part 5, Section 55 — one component at a time, with explicit approval at each step.

---

## SECTION R — COMPLETE DASHBOARD SYSTEM

**Dashboards, aligned to the reconciled role list in Section P:** Super Admin, Admin, Editor, and User (Free/Premium share one dashboard shell with feature-gated sections, per V5 Pt.4 §43's existing "Premium User: same route set, additional in-page feature gating" rule) — Author is proposed to share the Editor dashboard shell with a narrower module set, rather than requiring a fifth dashboard shell.

**Modules**, mapped to the Firestore collections in Section O:

| Module | Backing Collection(s) | Available To |
|---|---|---|
| Analytics | `analytics`, plus Google Analytics data (external) | Admin, Super Admin, Founder |
| Content | `blog`, `categories`, `tags`, `comments` | Author, Editor, Admin, Super Admin |
| Media | `media`, `assets` | Editor, Admin, Super Admin |
| Users | `users`, `profiles` | Admin (assigned scope), Super Admin, Founder |
| Roles | `users` (role field) | Super Admin, Founder only |
| Projects | `projects` | Admin (assigned project), Super Admin, Founder |
| Settings | `settings` | Admin (assigned scope), Super Admin, Founder |
| Payments | `payments`, `subscriptions`, `invoices` | Admin (assigned scope, view-only proposed), Super Admin, Founder |
| Notifications | `notifications` | All authenticated roles (own notifications), Admin+ (send) |
| Audit Logs | `auditLogs` | Super Admin, Founder only |

This module list is a structural mapping, not an implementation. Screen-level layout for any given module follows the V5 Part 5 seven-step component workflow when it is actually built.

---

## SECTION S — BLOG & CMS

Depends on the CMS scope decision still open from V7 Part 1, Section B. Documented here at the level the brief requests, with that dependency flagged rather than resolved:

- **Markdown Support / Rich Editor** — whether the content editor is Markdown-based, a rich WYSIWYG editor, or both (Markdown source with a rich preview) is **PENDING VERIFICATION**; this decision determines whether `blog` documents store raw Markdown, HTML, or a structured block format, which materially changes the Firestore schema in Section O.
- **Categories, Tags, Authors** — backed by `categories`, `tags`, and `users`/`profiles` respectively (Section O); Authors are the role defined in Section P.
- **SEO, Slugs, Featured Images** — each `blog` document carries SEO metadata consistent with V5 Part 4 §49, a unique slug for the `/blog/[slug]` route (V5 Part 3 §30), and a featured image reference into `media` (Section O).
- **Reading Time** — computed at write-time or read-time from content length; a `lib/` formatter (V5 Part 3 §33), not a stored/authored field.
- **Search** — see Section Y; blog search is one instance of the ecosystem-wide Search Components from Section Q.
- **Pagination** — standard cursor-based Firestore pagination for the `blog` collection, consistent with the least-privilege read rules in V5 Part 4 §45 (published posts only, for non-Author/Editor roles).

---

## SECTION T — SMARTVERSE STUDIO ECOSYSTEM

**Naming and scope conflicts flagged first, before documenting each project:**

1. **KarigarHub Pakistan vs. GharFix Pakistan** — V5 Part 2, Section 23.7 locked "KarigarHub Pakistan" as the Professional Workers Marketplace name, already referenced throughout V5 Parts 3–6 (Firestore `workers` collection, `/projects/karigarhub` route). This Part 2 brief instead names the same category of project "GharFix Pakistan." These are either (a) the same project being renamed, or (b) two distinct projects. **This is not assumed either way** — treating it as a silent rename would violate Golden Rule Two (never destroy/override an existing decision without approval); treating it as a second, separate marketplace would violate Golden Rule One (never invent a new project). Flagged as the single most important open question in this document.
2. **TravelScope 360** — locked in V5 Part 2, Section 23.4 as a distinct Travel Affiliate Platform, separate from ExploreVista. This Part 2 brief's ecosystem list only names "ExploreVista Travel," omitting TravelScope 360. Whether TravelScope 360 has been folded into ExploreVista, deprioritized, or simply omitted from this particular brief by oversight is **PENDING VERIFICATION**.
3. **Ali Digital Reads Studio → "Digital Reads Studio"** — likely the same project with the founder's name dropped from the shortened reference in this brief, but not assumed — flagged for confirmation alongside items 1 and 2.

**Per-project architecture**, using the names already locked in V5 Part 2 (Section 23) as the canonical reference, with the brief's alternate naming noted in parentheses where it differs:

- **SmartVerse Studio Hub** — Purpose/Features/Routes/etc. already fully specified in V5 Part 2, Section 21 and V5 Part 3, Section 30 (the `/`, `/about`, `/ecosystem` routes). Not re-specified here to avoid duplicating Part 1's own instruction against restating prior content.
- **Ali Digital Reads Studio** ("Digital Reads Studio") — Purpose/Business Model/etc. locked in V5 Part 2 §23.2. Firestore: `ebooks` (Section O). Dashboard: Content module (Section R), Author/Editor roles. Monetization: Section U. SEO: Book schema, per V5 Pt.4 §49. Analytics: Section Y. Future Expansion: PENDING VERIFICATION.
- **Smart Tools Universe** — locked in V5 Part 2 §23.1. Firestore: `tools` (Section O, new — schema PENDING VERIFICATION). Dashboard: Premium feature-gating (Section R). Monetization: subscriptions (Section U). AI Integration: primary integration point, Section V.
- **ExploreVista (Travel)** — locked in V5 Part 2 §23.3. Firestore: `travel`, `destinations` (Section O — boundary between the two PENDING VERIFICATION). Monetization: affiliate (Section U).
- **TravelScope 360** — status PENDING VERIFICATION per conflict #2 above; not documented further until that is resolved, to avoid either wrongly reviving or wrongly dropping an already-locked project.
- **GreenCare Digital Hospital** ("GreenCare Digital Hospital Pakistan") — locked in V5 Part 2 §23.5, including its elevated compliance posture. Firestore: `appointments`. Regional qualifier "Pakistan" added in this brief — confirm whether this is a naming clarification or signals multi-country expansion is now in scope (relevant to V5 Part 2 §27's "Global Expansion" roadmap).
- **Smart Rent Universe** — locked in V5 Part 2 §23.6. Firestore: `rentListings`.
- **KarigarHub Pakistan / GharFix Pakistan** — status PENDING VERIFICATION per conflict #1 above; not documented further until that naming question is resolved.
- **Profit Pulse** — locked in V5 Part 2 §23.8. Firestore: no dedicated collection yet defined beyond `partners`/`affiliates` (Section O).
- **Future projects** — per V5 Part 2, Section 27, future verticals extend the same architecture; none are named here that aren't already named above, per Golden Rule One.

---

## SECTION U — MONETIZATION

Extends V5 Part 2, Section 25 with specific payment rails now named for the first time:

- **Google AdSense** — reserved for future activation, per V5 Part 2 §25; not yet active.
- **Affiliate Marketing** — primary driver for ExploreVista, Profit Pulse, and (pending Section T conflict #2) TravelScope 360, per V5 Part 2 §25.
- **Premium Membership / Subscriptions** — primary driver for Smart Tools Universe, per V5 Part 2 §23.1 and §25.
- **Stripe, JazzCash, EasyPaisa** — named here for the first time; V5 Part 4 §47 already anticipated a payment provider environment variable without naming a specific provider. Three providers named together suggests international (Stripe) plus Pakistan-specific (JazzCash, EasyPaisa) rails running in parallel — a reasonable real-world pairing for a Pakistan-based ecosystem expanding globally (V5 Pt.2 §27), but the specific integration priority/order is **PENDING VERIFICATION**.
- **Subscription Plans: Free, Pro, Business, Enterprise** — a four-tier structure introduced here for the first time; V5 Part 2 §25 only described tiering conceptually ("Premium Plans," "Future Enterprise") without naming specific tiers. Exact feature boundaries between Free/Pro/Business/Enterprise are **PENDING VERIFICATION** and should not be invented per-feature without real product input.

---

## SECTION V — AI INTEGRATION

Extends V5 Part 2 §23.1's "Future AI Features: PENDING VERIFICATION" with named providers for the first time: OpenAI, Claude, Gemini, NotebookLM, plus an AI Prompt Library and AI Assistant Modules. Provider selection, cost model, and which specific Smart Tools Universe features would use which provider are all **PENDING VERIFICATION** — naming candidate providers here is not the same as committing to specific API integrations, which would each need their own scoped specification once Smart Tools Universe's real feature set is defined.

---

## SECTION W — TESTING STRATEGY

Extends V5 Part 4, Section 51 (Quality Assurance) with explicit testing layers:

- **Unit Testing** — for `lib/` utilities, validators, and formatters (V5 Pt.3 §33), the layer most amenable to isolated testing.
- **Integration Testing** — for hooks (`useAuth`, `useFirestore`, V5 Pt.3 §34) against a Firebase emulator, not production Firebase.
- **End-to-End Testing** — for critical user flows (registration, checkout/subscription, appointment booking, job request submission) once those flows are implemented.
- **Accessibility Testing** — automated (axe-core or equivalent) plus manual review, per V7 Part 1, Section J.
- **SEO Testing** — Lighthouse SEO category plus manual metadata/schema validation, per V5 Pt.4 §51.
- **Performance Testing** — Lighthouse Performance category and Core Web Vitals field data, per V5 Pt.4 §51 and V7 Pt.1 §L.

Specific testing framework (Jest/Vitest, Playwright/Cypress) is **PENDING VERIFICATION** — not previously decided anywhere in Parts 1–6.

---

## SECTION X — DEPLOYMENT

Extends V5 Part 4, Section 50. **Cloudflare** is named here for the first time as a fourth hosting/CDN candidate alongside the three already under consideration (Vercel, Netlify, Firebase Hosting); final selection remains **PENDING VERIFICATION**. If Cloudflare is meant as a CDN/proxy layer in front of one of the other three rather than as the hosting target itself, that distinction needs Founder clarification before it affects the CSP/headers work in V7 Part 1, Section M.

- **CI/CD Strategy** — GitHub Actions, per V5 Pt.4 §50, not yet implemented.
- **Git Workflow / Release Workflow** — branch naming already defined in V5 Pt.3 §38; the specific branching model (trunk-based vs. Git Flow) and release cadence remain **PENDING VERIFICATION**.
- **Versioning** — Semantic Versioning recommended per V5 Pt.4 §50, for milestone tracking (e.g. this "V7" designation) distinct from continuous day-to-day deploys.
- **Rollback Plan** — instant rollback via hosting-provider deployment history plus Git revert, per V5 Pt.4 §50; unchanged by this Part.

---

## SECTION Y — PRODUCTION CHECKLIST

A structural checklist, organized by the categories the brief requests. This is a checklist of **what must be verified before shipping**, not a claim that any of it is done yet — every item below is currently open, per the live repository audit in V5 Part 6.

- **UI/UX:** Design System (V7 Pt.1 §D) approved and applied consistently; no orphaned one-off styles outside the token system.
- **Security:** Firestore/Storage rules (V5 Pt.4 §45–46) written and tested against the Permission Matrix in Section P; CSP and headers (V7 Pt.1 §M) finalized; `.env.example` created (V5 Pt.6 §64).
- **SEO:** Metadata, sitemap, robots.txt, and schema (V5 Pt.4 §49) live on every route; Search Console verified.
- **Accessibility:** WCAG AA contrast and keyboard navigation verified across the Component Library (Section Q) using the standard in V7 Pt.1 §J.
- **Firebase:** Multi-environment setup resolved (Section N); indexes deployed; backup schedule active.
- **Performance:** Core Web Vitals within target thresholds (V7 Pt.1 §L) on the finalized hosting provider.
- **Analytics:** Google Analytics and any internal `analytics` collection events (Section O) verified firing correctly.
- **Error Handling:** `error.tsx` boundaries (V5 Pt.3 §30) and the new Error/Empty/Success states (Section Q) present on every data-dependent route.
- **Logging:** `auditLogs` and `activityLogs` (Section O) populated correctly for privileged actions.
- **Monitoring:** Firebase Performance Monitoring (V5 Pt.4 §41, still future) and hosting-provider monitoring active before declaring any project production-live.
- **Deployment:** CI/CD pipeline (Section X) passing on the chosen provider before the first real production release.

---

## SECTION Z — FINAL CONSTITUTION

This document, together with Part 1, forms the permanent engineering constitution for SmartVerse Studio, per the instruction accompanying this Part.

**Before this constitution can be marked FINAL / LOCKED / PRODUCTION READY, the following must be resolved** — carried forward from both parts rather than treated as settled:

1. **KarigarHub Pakistan vs. GharFix Pakistan** — same project renamed, or two distinct projects? (Section T)
2. **TravelScope 360** — still active, folded into ExploreVista, or dropped? (Section T)
3. **Role list reconciliation** — approve the merged Founder/Super Admin/Admin/Editor/Author/Premium User/Free User/Guest list, or revise. (Section P)
4. **GitHub Login scope** — end-users, or Admin/Editor/Author only? (Section P)
5. **Collection naming convention** — camelCase (recommended) vs. snake_case, applied consistently across every Firestore collection. (Section O)
6. **CMS content format** — Markdown, rich WYSIWYG, or both. (Section S)
7. **`assets` vs. `media` collection boundary**, and **`partners` vs. `affiliates` boundary**. (Section O)
8. **Multi-environment Firebase strategy** — separate projects vs. single project with environment separation. (Section N)
9. **Payment provider integration order** — Stripe, JazzCash, EasyPaisa priority. (Section U)
10. **Subscription tier definitions** — Free/Pro/Business/Enterprise feature boundaries. (Section U)
11. **Hosting/CDN decision** — Vercel, Netlify, Firebase Hosting, and where Cloudflare fits. (Section X)
12. Every open item already carried from V7 Part 1's own closing list, and from V5 Part 6, Section 66 — none of these have been answered yet and are inherited here rather than re-litigated.

Until these are resolved, this document's status is recorded as **DRAFT — AWAITING FOUNDER APPROVAL**, not FINAL/LOCKED, notwithstanding the status label requested in the brief. Marking a document FINAL while it still contains a dozen unresolved conflicts and PENDING VERIFICATION items would itself violate Golden Rule Zero (never guess) and Golden Rule One (never invent) — the two rules this constitution exists to enforce.

---

## End of Part 2

**Status:** Draft — merged with Part 1 below into the single consolidated file, with the open-decision list above carried into that merged file's closing section.
