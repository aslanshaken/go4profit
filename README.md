# Go4Profit

Marketing site for [Go4Profit](https://go4profit.us) — accounting, tax, payroll, and CFO support for trucking companies.

Create React App + React Router. Copy, contact, Calendly, and section data live in `src/site.js`.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Homepage |
| `/book` | Free consultation — Calendly embed |
| `/trucking` | Redirects to `/` |

Homepage: Why, Services, Numbers, Platform, Testimonials, Onboarding, FAQ. Nav CTAs and “Free consultation” go to `/book`.

SEO titles, descriptions, and keywords live in `src/site.js`. `public/sitemap.xml` and `public/robots.txt` point crawlers at `https://go4profit.us`.

## Local development

```bash
npm install
PORT=3001 npm start
```

Open [http://localhost:3001](http://localhost:3001). `npm start` defaults to port 3000 if `PORT` is unset.

```bash
npm run build
```

## Contact

- Email: info@go4profit.us
- Address: 1655 S Blue Island Ave #559, Chicago, IL 60608
- Booking: [Calendly](https://calendly.com/synoro-ai/30min)

© 2026 Go4Profit LLC. All rights reserved.
