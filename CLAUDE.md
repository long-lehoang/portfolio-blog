# Project: Personal Profile/Blog Site

## Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Blog**: Notion API (@notionhq/client + notion-to-md), ISR with revalidate: 60
- **Site Data**: TypeScript config file (`src/content/data.ts`)
- **Icons**: lucide-react
- **Theme**: next-themes (dark/light toggle)
- **Testing**: Vitest + React Testing Library (unit), Playwright (E2E)
- **CI/CD**: GitHub Actions → Vercel
- **Deployment**: Vercel (free tier)

## Project Structure
- `src/app/` — Next.js App Router pages
- `src/components/` — React components (Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer, ThemeToggle, ScrollReveal, PageTransition)
- `src/content/data.ts` — All site data (experience, projects, skills, social links, bio)
- `src/lib/notion.ts` — Notion API client for blog posts
- `public/images/` — Static images (profile photo, project screenshots)
- `public/cv.pdf` — Downloadable CV
- `__tests__/components/` — Unit tests for each component
- `__tests__/e2e/` — Playwright E2E tests
- `.github/workflows/ci.yml` — CI pipeline

## Development Workflow (MUST FOLLOW)

### Vibe Coding Loop (per task/step)
1. Write/vibe code (implement the feature or fix)
2. Add unit tests (`__tests__/components/`) and E2E tests (`__tests__/e2e/`)
3. Run all checks: `npm run lint && npm run test && npm run build && npm run test:e2e`
4. Spawn a separate Agent for code review (quality, security, accessibility, performance)
5. If ANY check fails OR review finds issues → fix and loop back to step 3
6. All checks pass + review approved → git commit & push

### Git Push Rules
- NEVER push until: lint passes, all unit tests pass, build succeeds, all E2E tests pass, code review approved
- Each step gets its own commit with a clear message
- Push after each completed step (not batched)

### Code Review Agent Checklist
- Code quality and readability
- Security (no secrets, XSS prevention, safe API usage)
- Accessibility (semantic HTML, ARIA labels, keyboard navigation)
- Performance (no unnecessary re-renders, optimized images, lazy loading)
- Best practices (TypeScript strict mode, proper error handling)

## Commands
- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run test` — Unit tests (Vitest)
- `npm run test:e2e` — E2E tests (Playwright)
- `npm run test:coverage` — Unit test coverage

## Content Updates
- **Site data** (experience, projects, skills): Edit `src/content/data.ts` → git push → Vercel auto-deploys
- **Blog posts**: Write in Notion → site auto-updates within 60s (ISR, no git push needed)

## Environment Variables
- `NOTION_API_KEY` — Notion integration API key
- `NOTION_DATABASE_ID` — Notion database ID for blog posts

## Design
- Clean, minimal, neutral palette + indigo accent
- Mobile-first responsive
- Dark/light mode toggle
- Framer Motion animations: scroll reveals, hover effects, page transitions
- Hero: centered layout
- Experience: vertical timeline
- Projects: card grid
- Blog: card grid
