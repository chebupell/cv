import { Component, computed, signal } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { FeaturedRepo } from '../../components/featured-repo/featured-repo';

@Component({
  selector: 'app-projects',
  imports: [FeaturedRepo],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsPage {
  protected readonly profile = PORTFOLIO;
  protected readonly activeFilter = signal<string>('All');

  protected readonly filters = computed(() => {
    const tags = new Set<string>();
    for (const project of this.profile.projects) {
      for (const tag of project.tech) {
        tags.add(tag);
      }
    }
    return ['All', ...Array.from(tags).sort()];
  });

  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.profile.projects;

    const filtered =
      filter === 'All' ? projects : projects.filter((project) => project.tech.includes(filter));

    return [...filtered].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  });

  protected setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }

  protected projectLabel(featured?: boolean): string {
    return featured ? 'FEATURED REPOSITORY' : 'REPOSITORY';
  }
}
