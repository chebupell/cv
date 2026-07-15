import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Principle, SocialLink } from '../../models/portfolio.model';
import { FeaturedRepo } from '../../components/featured-repo/featured-repo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FeaturedRepo, ...HlmButtonImports],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage implements OnInit {
  private readonly route = inject(ActivatedRoute);

  protected readonly profile = PORTFOLIO;
  protected readonly featured = PORTFOLIO.projects.find((p) => p.featured) ?? PORTFOLIO.projects[0];

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        queueMicrotask(() => this.scrollTo(fragment));
      }
    });
  }

  protected scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected social(icon: SocialLink['icon']): SocialLink | undefined {
    return this.profile.socials.find((link) => link.icon === icon);
  }

  protected principleIconPath(icon: Principle['icon']): string {
    switch (icon) {
      case 'bolt':
        return 'M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.02-.04 7.42-12.36 7.42-12.36.2-.34.5-.32.5-.1v7.02H18c.55 0 .58.33.36.7L12.1 20.92c-.2.34-.5.28-.5.08H11z';
      case 'grid':
        return 'M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z';
      case 'shield':
        return 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z';
    }
  }
}
