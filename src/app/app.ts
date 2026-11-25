import { Component, signal, inject } from '@angular/core';
import { LanguageService } from './services/language.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PORTFOLIO } from './data/portfolio.data';
import { SocialLink } from './models/portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PORTFOLIO;
  protected readonly year = new Date().getFullYear();
  protected readonly mobileMenuOpen = signal(false);
  protected readonly languageService = inject(LanguageService);
  protected readonly currentLang = this.languageService.currentLang;

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected setLang(lang: 'EN' | 'RU'): void {
    const map = { EN: 'en', RU: 'ru' } as const;
    this.languageService.changeLanguage(map[lang]);

  }

  protected social(icon: SocialLink['icon']): SocialLink | undefined {
    return this.profile.socials.find((link) => link.icon === icon);
  }
}
