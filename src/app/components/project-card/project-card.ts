import { Component, input } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-project-card',
  imports: [...HlmButtonImports],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
