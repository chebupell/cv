import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-featured-repo',
  imports: [RouterLink, ...HlmButtonImports],
  templateUrl: './featured-repo.html',
  styleUrl: './featured-repo.scss',
})
export class FeaturedRepo {
  readonly project = input.required<Project>();
  readonly label = input('FEATURED REPOSITORY');

  protected caseStudyRoute(name: string): string | null {
    if (name.includes('BÉRÉG')) return '/projects/bereg';
    if (name.includes('SkillsZen')) return '/projects/skillszen';
    if (name.includes('Finance')) return '/projects/finance-dashboard';
    return null;
  }
}
