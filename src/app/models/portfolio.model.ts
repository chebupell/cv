export interface Project {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  language?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
  snippetTitle?: string;
  snippet?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'telegram' | 'email';
}

export interface Principle {
  title: string;
  description: string;
  icon: 'bolt' | 'grid' | 'shield';
}

export type StackCategory = 'Frontend' | 'Backend' | 'Data' | 'Tooling';

export interface StackItem {
  name: string;
  category: StackCategory;
  description: string;
  tags: string[];
  level: 'Core' | 'Proficient' | 'Working';
  snippetTitle?: string;
  snippet?: string;
}

export interface PortfolioProfile {
  name: string;
  brand: string;
  role: string;
  tagline: string;
  summary: string;
  ecosystemTitle: string;
  ecosystemBody: string;
  ecosystemTags: string[];
  githubRepos: number;
  githubAchievements: string;
  principles: Principle[];
  skills: string[];
  stack: StackItem[];
  projects: Project[];
  socials: SocialLink[];
  location: {
    city: string;
    timezone: string;
    mapEmbedUrl: string;
  };
}
