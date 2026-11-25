import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideSpartanHlm } from '@spartan-ng/helm/utils';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// New v18 ngx-translate providers
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideSpartanHlm(),
    provideHttpClient(),
    // Provide translation service with HTTP loader
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      }),
      // active language on startup
      lang: 'en',
      // fallback language if translation missing
      fallbackLang: 'en'
    })
  ]
};
