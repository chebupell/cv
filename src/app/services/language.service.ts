import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

type Lang = 'en' | 'ru';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly currentLang = signal<Lang>(this.getInitialLanguage());

  constructor() {
    this.translate.addLangs(['en', 'ru']);
    // this.translate.setDefaultLang('en'); // setDefaultLang removed in ngx-translate v18
    this.translate.use(this.currentLang());
    this.updateDocumentLang(this.currentLang());
  }

  changeLanguage(lang: Lang): void {
    this.currentLang.set(lang);
    if (this.isBrowser) { localStorage.setItem('preferred_lang', lang); }
    this.translate.use(lang);
    this.updateDocumentLang(lang);
  }

  private getInitialLanguage(): Lang {
    let saved: Lang | null = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      saved = localStorage.getItem('preferred_lang') as Lang | null;
    }
    if (saved) return saved;
    const browser = this.translate.getBrowserLang() as Lang | null;
    return (browser && ['en', 'ru'].includes(browser)) ? browser : 'en';
  }

  private updateDocumentLang(lang: Lang): void {
    if (this.isBrowser) {
      this.document.documentElement.lang = lang;
    }
  }
}
