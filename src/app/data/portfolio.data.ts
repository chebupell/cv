import { PortfolioProfile } from '../models/portfolio.model';

export const PORTFOLIO: PortfolioProfile = {
  name: 'Mikhail',
  brand: 'Mikhail.dev',
  role: 'Frontend / Fullstack Developer',
  tagline: 'TypeScript · React · Angular · Node.js',
  summary:
    'I specialize in building high-performance web applications with a focus on clean architecture and type-safe solutions.',
  ecosystemTitle: 'Frontend / Fullstack Developer — TypeScript · React · Angular · Node.js',
  ecosystemBody:
    'Passionate about creating digital solutions that combine aesthetic design with robust functionality. Currently exploring the depths of modern frontend ecosystems.',
  ecosystemTags: ['Next.js 14', 'Angular 17', 'Node.js', 'Prisma', 'PostgreSQL'],
  githubRepos: 25,
  githubAchievements: '4+',
  principles: [
    {
      title: 'Fast by Default',
      description: 'Performance optimization is not an afterthought, but a core design principle.',
      icon: 'bolt',
    },
    {
      title: 'Scalable Architecture',
      description: 'Building modular systems that grow with your business needs and complexity.',
      icon: 'grid',
    },
    {
      title: 'Secure Integrity',
      description: 'Prioritizing data safety and type-safety across the entire application stack.',
      icon: 'shield',
    },
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Angular',
    'Node.js',
    'Express',
    'Prisma',
    'PostgreSQL',
    'Tailwind CSS',
    'Vitest',
  ],
  stack: [
    {
      name: 'TypeScript',
      category: 'Frontend',
      description:
        'Primary language across React and Angular apps — strict typing, shared DTOs, and safer refactors.',
      tags: ['Language', 'Type-safe'],
      level: 'Core',
      snippetTitle: 'types.ts',
      snippet: `type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

function unwrap<T>(r: ApiResult<T>): T {
  if (!r.ok) throw new Error(r.error);
  return r.data;
}`,
    },
    {
      name: 'React',
      category: 'Frontend',
      description:
        'Component-driven UI for SkillsZen — hooks, composition, and interactive learning flows.',
      tags: ['UI', 'SPA'],
      level: 'Core',
      snippetTitle: 'LearningPath.tsx',
      snippet: `export function LearningPath() {
  const [progress, setProgress] = useState(0);

  return (
    <Module track="typescript" onDone={setProgress} />
  );
}`,
    },
    {
      name: 'Angular',
      category: 'Frontend',
      description:
        'Standalone components, signals-friendly patterns, and full product shells like Finance Dashboard.',
      tags: ['UI', 'SPA'],
      level: 'Core',
      snippetTitle: 'dashboard.component.ts',
      snippet: `@Component({
  selector: 'app-dashboard',
  standalone: true,
})
export class Dashboard {
  totals = this.finance.summary();
}`,
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description:
        'API layer and tooling for fullstack features — auth, CRUD, and service boundaries.',
      tags: ['Runtime', 'API'],
      level: 'Core',
      snippetTitle: 'server.ts',
      snippet: `app.post('/api/login', async (req, res) => {
  const user = await auth.verify(req.body);
  res.json({ token: sign(user) });
});`,
    },
    {
      name: 'Express',
      category: 'Backend',
      description:
        'Lightweight HTTP APIs with middleware for JWT auth, validation, and resource routes.',
      tags: ['API', 'REST'],
      level: 'Proficient',
      snippetTitle: 'routes.ts',
      snippet: `router.get('/transactions', auth, async (req, res) => {
  const rows = await db.transaction.findMany({
    where: { userId: req.user.id },
  });
  res.json(rows);
});`,
    },
    {
      name: 'Prisma',
      category: 'Data',
      description:
        'Type-safe ORM for schema, migrations, and queries against PostgreSQL.',
      tags: ['ORM', 'Schema'],
      level: 'Proficient',
      snippetTitle: 'schema.prisma',
      snippet: `model Transaction {
  id     String   @id @default(cuid())
  amount Decimal
  userId String
  user   User     @relation(fields: [userId], references: [id])
}`,
    },
    {
      name: 'PostgreSQL',
      category: 'Data',
      description:
        'Relational storage for authenticated apps — categories, aggregates, and durable records.',
      tags: ['Database', 'SQL'],
      level: 'Proficient',
      snippetTitle: 'query.sql',
      snippet: `SELECT category, SUM(amount) AS total
FROM transactions
WHERE user_id = $1
GROUP BY category
ORDER BY total DESC;`,
    },
    {
      name: 'Tailwind CSS',
      category: 'Tooling',
      description:
        'Utility-first styling for fast, consistent UI without fighting CSS specificity.',
      tags: ['Styling', 'DX'],
      level: 'Core',
      snippetTitle: 'card.html',
      snippet: `<article class="rounded-xl border border-border
  bg-card p-6 shadow-sm">
  <h3 class="text-lg font-semibold">{{ title }}</h3>
</article>`,
    },
  ],
  projects: [
    {
      name: 'SkillsZen',
      description:
        'An interactive learning platform designed for mastering TypeScript, JavaScript, and algorithms with AI-powered assistance.',
      highlights: ['Team of 4', 'AI chat', 'Interactive exercises'],
      tech: ['React 19', 'Firebase', 'TypeScript', 'Vite'],
      repoUrl: 'https://github.com/chebupell/SkillsZen',
      demoUrl: 'https://skillszen.netlify.app/',
      language: 'TypeScript',
      stars: 12,
      forks: 1,
      featured: true,
      snippetTitle: 'LearningPath.tsx',
      snippet: `import { useState } from "react";

export function LearningPath() {
  const [progress, setProgress] = useState(0);

  return (
    <Module track="typescript" />
  );
}`,
    },
    {
      name: 'Finance Dashboard',
      description:
        'Personal finance tracker with charts, categories, and secure JWT authentication.',
      highlights: ['Charts & analytics', 'JWT auth', 'Full-stack CRUD'],
      tech: ['Angular 21', 'Express', 'Prisma', 'PostgreSQL'],
      repoUrl: 'https://github.com/chebupell/finance-dashboard',
      demoUrl: 'https://finance-dashboard-jmlf.onrender.com/',
      language: 'TypeScript',
      stars: 3,
      forks: 0,
      snippetTitle: 'dashboard.component.ts',
      snippet: `@Component({
  selector: 'app-dashboard',
  standalone: true,
})
export class Dashboard {
  totals = this.finance.summary();
}`,
    },
  ],
  socials: [
    {
      label: 'Github',
      url: 'https://github.com/chebupell',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mikhail-kremenetsky/',
      icon: 'linkedin',
    },
    {
      label: 'Telegram',
      url: 'https://t.me/Itschebupelli',
      icon: 'telegram',
    },
    {
      label: 'Email',
      url: 'mailto:kremenvov11@gmail.com',
      icon: 'email',
    },
  ],
  location: {
    city: 'Gomel, Belarus',
    timezone: 'UTC+3 (MSK)',
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=30.90%2C52.38%2C31.10%2C52.50&layer=mapnik&marker=52.4412%2C30.9878',
  },
};
