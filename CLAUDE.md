# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # TypeScript compile + start Next.js dev server
yarn build      # TypeScript compile + production build
yarn start      # Serve the production build
yarn lint       # Prettier format + ESLint fix (--max-warnings=0)
yarn compile    # TypeScript type-check only (tsc --build)
yarn clean      # Remove build-tsc and .next directories
yarn sitemap    # Generate sitemap via next-sitemap
```

There are no tests in this project.

## Architecture

This is a single-page Next.js (v14) personal resume/portfolio site using TypeScript, Tailwind CSS, and SCSS.

### Data layer

All resume content lives in **`src/data/data.tsx`** — this is the primary file to edit when updating personal information. It exports named constants consumed directly by section components:

- `homePageMeta` → `<Page>` (SEO meta)
- `heroData` → `<Hero>`
- `aboutData` → `<About>`
- `education`, `experience` → `<Resume>` (rendered as `<TimelineItem>` entries)
- `skills` → `<Resume>` → `<SkillGroup>`
- `portfolioItems` → `<Portfolio>`
- `testimonial` → `<Testimonials>`
- `contact` → `<Contact>`
- `socialLinks` → `<Header>`, `<Footer>`
- `SectionId` (enum) → used by all section components for scroll targeting

Type definitions for all data structures are in **`src/data/dataDef.ts`**.

### Page structure

The single route (`src/pages/index.tsx`) renders sections in order: Header → Hero → About → Resume → Portfolio → Testimonials → Contact → Footer. `Header` is dynamically imported with `ssr: false` (it uses scroll observation to highlight the active nav item).

`src/components/Layout/Page.tsx` wraps everything and injects `<Head>` meta tags.

`src/components/Layout/Section.tsx` is the base wrapper for every section — it sets the `id` attribute used by anchor navigation.

### Styling

- **Tailwind CSS** for utility classes (configured in `tailwind.config.js`)
- **SCSS** (`src/globalStyles.scss`) for global styles and custom animations
- Custom Tailwind keyframes: `typing`, `blink`, `rotate-loader`
- Custom Tailwind screen: `touch` (pointer: coarse)
- Plugins: `@tailwindcss/forms`, `@tailwindcss/typography`

### ESLint rules to be aware of

- **`react-memo/require-memo`** — all components must be wrapped in `memo()`
- **`react-memo/require-usememo`** — objects/arrays passed as props must be wrapped in `useMemo`
- **`react/jsx-sort-props`** — JSX props must be sorted alphabetically
- **`simple-import-sort/imports`** — imports are auto-sorted; run `yarn lint` to fix

### Game page

`src/pages/game.tsx` renders the Godot 4 web export at `/game` via an iframe pointing to `/game/OutlawKev_v4.4.1-stable_win64.exe.html`. The COOP/COEP headers in `next.config.js` are required for Godot 4's SharedArrayBuffer threading. When re-exporting the game from Godot, replace the files in `public/game/` and update the `src` in `game.tsx` if the filename changes.

### Contact form

`src/components/Sections/Contact/ContactForm.tsx` has a stub `handleSendMessage` that logs to console. Wire up a backend or third-party service here to make it functional.

### Images

Local images live in `src/images/`. Remote images are allowed from `images.unsplash.com` and `source.unsplash.com` (configured in `next.config.js`). The PDF resume is at `public/resume.pdf`.
