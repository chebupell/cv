import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PORTFOLIO } from './data/portfolio.data';
import { SocialLink } from './models/portfolio.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PORTFOLIO;
  protected readonly year = new Date().getFullYear();

  protected social(icon: SocialLink['icon']): SocialLink | undefined {
    return this.profile.socials.find((link) => link.icon === icon);
  }
}
