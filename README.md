# Reha Demircan — Portfolio

Personal portfolio for **Reha Demircan**, Junior Software Developer. Single-page React app with a dark, mobile-first layout.

**Stack:** Vite · React · TypeScript · Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build
npm run preview
```

## Customize before you share it

| What | Where |
| --- | --- |
| Name, intro, email, GitHub, LinkedIn | `src/data/site.ts` |
| Skills | `src/data/skills.ts` |
| Projects (categories, copy, tags, links) | `src/data/projects.ts` |
| Screenshots | Replace the placeholder area in `src/components/ProjectCard.tsx` (or add images under `public/` and pass a path) |
| GitHub / Live Demo URLs | `github` and `liveDemo` on each project — `github` is `#` until you add repos |
| CV file | Replace `public/Reha-Demircan-CV.pdf` with your real CV |
| Contact form | Create a form at [Formspree](https://formspree.io), then set `formspreeEndpoint` in `src/data/site.ts`. Until then, submit opens a `mailto:` draft. |

## Project filters

Projects are stored in one array with a `category` of `backend`, `frontend`, or `mobile`. `Projects` filters that array; `ProjectCard` renders each item.

- **Backend & SQL:** Financial CRM (WinForms + EF + SQL Server), NovaStore SQL database, ASP.NET Core MVC catalog
- **Frontend:** React + Tailwind CRUD task manager (LocalStorage, Netlify-ready)
- **Mobile:** Coffee Hawai Flutter catalog

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. `vercel.json` rewrites unknown routes to `index.html` so the SPA keeps working if you add client routing later.

You can also deploy with the Vercel CLI:

```bash
npx vercel
```

## License

Personal portfolio. Use and adapt as you like.
