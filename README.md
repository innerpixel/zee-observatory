# A Field Guide for an Alien Learning to Listen

A statically deployable SvelteKit story engine for interactive chapters about listening, perspective, burden, and relational change.

## Run locally

```bash
npm install
npm run dev
```

## Validate and build

```bash
npm run check
npm run build
npm run preview
```

The static site is written to `build/`.

## Routes

- `/` — introduction
- `/chapter/invitation-to-speak/` — published Chapter One
- `/archive/` — published and upcoming transmissions
- `/prototype/` — preserved single-file reference version

## Add a chapter

1. Create a typed file in `src/lib/chapters/` following `chapter-01.ts`.
2. Add the complete chapter to `src/lib/chapters/registry.ts` when published.
3. Add its lightweight card to `src/lib/chapters/manifest.ts`.
4. Place its artwork in `static/images/`.
5. Run `npm run check && npm run build`; published registry slugs are automatically prerendered.

Create a new component only when a chapter introduces a genuinely new interactive instrument.
