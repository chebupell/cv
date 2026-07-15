# Portfolio trust & accuracy — design

Date: 2026-07-15  
Status: approved for planning

## Goal

Remove trust-breaking mismatches between the portfolio UI / README and reality: inflated GitHub stars & achievements, inconsistent framework versions, and a default Angular CLI README.

## Decisions (locked)

| Topic | Choice |
| --- | --- |
| Project stars / forks | Live from GitHub REST API (client-side) |
| GitHub Insights block | Static honest `public_repos` count only; drop Major Achievements |
| Ecosystem tags | Align with real projects; no Next.js unless a Next.js project exists |
| Live site URL | https://mikhailportfol.netlify.app/ |
| README screenshot | User-provided image → `docs/screenshot.png` |

Baseline from GitHub (verified 2026-07-15): `chebupell` has **26** public repos; SkillsZen **0** stars / **1** fork; finance-dashboard **0** stars / **0** forks.

## Scope

### In

1. **Live repo stats**
   - Add `GithubRepoStatsService` that parses `owner/repo` from each project’s `repoUrl` and fetches `https://api.github.com/repos/{owner}/{repo}`.
   - Expose `stars` and `forks` to `featured-repo` and `project-card`.
   - Register `provideHttpClient()` in `app.config.ts`.
   - On error / rate limit / SSR-before-browser: show `0` (or stable fallback), never invented numbers.
   - Remove hardcoded `stars` / `forks` from `portfolio.data.ts` and from the `Project` model.

2. **GitHub Insights**
   - Set `githubRepos` to `26` (static; update manually if the profile count changes materially).
   - Remove `githubAchievements` from model, data, and home template (second stat column gone; layout stays one metric or one metric + non-numeric decorative chrome only).

3. **Version consistency**
   - Replace `ecosystemTags` with: `['React 19', 'Angular 21', 'Node.js', 'Prisma', 'PostgreSQL']`.
   - Do not mention Next.js anywhere in portfolio copy/tags unless a Next.js project is added later.
   - Project `tech` arrays already use React 19 / Angular 21 — leave as source of truth for those apps.

4. **README**
   - Replace Angular CLI boilerplate with: short portfolio description, embedded `docs/screenshot.png`, link to https://mikhailportfol.netlify.app/, brief local run (`ng serve`), optional stack note (this site is Angular 22).

### Out

- Authenticated GitHub tokens / caching proxies
- Live-fetching of `public_repos` (kept static per product decision C)
- Replacing zero stars with fake social proof, or hiding stars UI entirely
- Deploy / Netlify config changes

## Architecture

```
portfolio.data (static projects + githubRepos)
        │
        ▼
home / projects pages
        │
        ├── featured-repo / project-card ──► GithubRepoStatsService ──► GitHub API
        └── github insights ──► profile.githubRepos only
```

- Service caches in-memory per `owner/repo` for the session to avoid duplicate requests when the same project appears twice.
- Implement with `HttpClient` + signals (or Observables consumed via `async`/toSignal); match existing Angular 22 patterns; no new libraries.

## Error handling

- Network / 403 / 404 → treat as `{ stars: 0, forks: 0 }`.
- Invalid `repoUrl` → same fallback; do not throw into the template.
- No user-facing error toast required for this feature.

## Testing / verification

- Manual: load home + projects with network open; confirm SkillsZen / finance-dashboard show 0★ and correct forks; Insights shows 26 only.
- Manual: truncate network / block `api.github.com` → UI still renders with 0.
- Grep: no `Next.js`, no `githubAchievements`, no hardcoded project `stars:` in data.
- README renders screenshot and live URL locally on GitHub.

## Success criteria

- A recruiter clicking through to GitHub sees the same star/fork counts as the UI.
- Ecosystem tags match listed project stack versions; no Next.js claim.
- README describes this portfolio, shows a real screenshot, and links the live Netlify site.
