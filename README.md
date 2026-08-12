# Sol Kin Ecovillage

A static, evidence-led biodiversity and community website for the Yucatan Peninsula. It is built with Astro and exports plain HTML, CSS, JavaScript, images, XML, and text files for standard Hostinger hosting.

## Local development

Requirements:

- Node.js 18.17.1 or newer
- npm 9.6.5 or newer

```bash
npm ci
cp .env.example .env
npm run dev
```

Set these values in `.env`:

```dotenv
PUBLIC_SITE_URL=https://your-real-domain.example
PUBLIC_CONTACT_EMAIL=your-confirmed-public-address@example.org
```

`PUBLIC_SITE_URL` controls canonical URLs, Open Graph URLs, structured data, `robots.txt`, and the sitemap. `PUBLIC_CONTACT_EMAIL` enables the static interest form to open a prefilled message in the visitor's email application. Without it, the form only copies/prepares text and explicitly says nothing was submitted.

## Validation and build

```bash
npm test
npm run typecheck
npm run build
```

The deployable site is written to **`dist/`**. No Node.js process, database, payment processor, or server function is required in production.

## Hostinger deployment

1. Set the final `PUBLIC_SITE_URL` and confirmed public contact address in `.env`.
2. Run `npm ci && npm test && npm run build`.
3. Open Hostinger hPanel and use **File Manager** for the target domain.
4. Open `public_html/` and remove only the default placeholder files for that domain.
5. Upload the **contents of `dist/`**, not the `dist` directory itself.
6. Confirm that `index.html`, `projects/`, `sitemap-index.xml`, `robots.txt`, and `_astro/` sit directly inside `public_html/`.
7. Enable Hostinger SSL, force HTTPS, and check the final domain on mobile and desktop.
8. Verify canonical and sitemap URLs use the production domain before announcing launch.

For repeat deployments, replace generated site files with the new `dist/` contents. Preserve any unrelated Hostinger files intentionally managed outside this project.

## Content model

Repeatable public content is kept in typed local files:

| Content | File |
| --- | --- |
| Projects and project detail routes | `src/data/projects.ts` |
| Organizations and relationship status | `src/data/organizations.ts` |
| Updates and events | `src/data/updates.ts` |
| Standards and learning facts | `src/data/standards.ts` |
| Site name, description, navigation | `src/data/site.ts` |
| Shared content types | `src/data/types.ts` |

### Add a project

Add one object to `projects` in `src/data/projects.ts`. The `slug` creates `/projects/{slug}/` automatically. Include:

- an honest `status` and `evidenceState`;
- a concise public summary and purpose;
- `known` facts;
- `openItems`;
- every repository source in `sourceRefs`;
- a participation statement that does not promise placement, booking, funding, or membership.

### Add a community

The public community roster is intentionally empty because no verified roster exists in the source library. Before adding a community data collection and route entry, confirm its public name, location granularity, authorized steward, participation offer, safeguards, and public contact with the community.

### Add an update or event

Add a dated update or confirmed event in `src/data/updates.ts`. Do not publish an event without a real date, host, venue/access details, and registration status. Field reports should name the method, author, observation date, project, limitations, and source evidence.

### Add Spanish

The current site is complete in English and preserves selected Spanish source text. It is **not** a complete bilingual edition. Use the `LocalizedText` type in `src/data/types.ts` when adding approved Spanish copy, and add a language route/switcher only after every critical navigation, page, form label, error, metadata field, and legal/safety message has a reviewed translation.

## Evidence rules

- Keep original files under `Photos/` and `Project References/` unchanged.
- Do not present repository organization logos or descriptions as endorsements or partnerships until confirmed.
- Do not claim a Sol Kin initiative is accredited, registered, issuing credits, accepting payments, taking bookings, or delivering measured outcomes without a primary source.
- Add approved authentic photography to `public/media/` with useful alt text, dimensions, caption, credit, and consent/license record.
- The optimized logo in `public/brand/sol-kin-logo.webp` is derived from the original green logo without overwriting it.

## Pre-launch factual checklist

- Replace the placeholder domain through `PUBLIC_SITE_URL`.
- Configure and test the confirmed public contact address.
- Confirm the public descriptions, stewards, locations, and safeguards for all three projects.
- Obtain a verified local community roster before publishing identities.
- Confirm any organization relationship and logo-use permission.
- Add authentic approved project imagery if available.
- Confirm the current status of X-Hazil forestry certification, permits, and statistics before describing them as active.
- Complete and review Spanish translation before labeling the site bilingual.
