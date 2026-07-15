import { Component, input } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-featured-repo',
  imports: [...HlmButtonImports],
  templateUrl: './featured-repo.html',
  styleUrl: './featured-repo.scss',
})
export class FeaturedRepo {
  readonly project = input.required<Project>();
  readonly label = input('FEATURED REPOSITORY');
}
