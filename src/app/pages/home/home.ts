import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';
import { SocialLink } from '../../models/portfolio.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage implements OnInit {
  private readonly route = inject(ActivatedRoute);

  protected readonly profile = PORTFOLIO;
  protected readonly selectedCategory = signal<'all' | 'commercial' | 'apps'>('all');

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        queueMicrotask(() => this.scrollTo(fragment));
      }
    });
  }

  protected setCategory(cat: 'all' | 'commercial' | 'apps'): void {
    this.selectedCategory.set(cat);
  }

  protected scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected social(icon: SocialLink['icon']): SocialLink | undefined {
    return this.profile.socials.find((link) => link.icon === icon);
  }
}
