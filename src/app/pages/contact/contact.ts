import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { PORTFOLIO } from '../../data/portfolio.data';
import { SocialLink } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ...HlmButtonImports],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactPage {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly profile = PORTFOLIO;
  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    PORTFOLIO.location.mapEmbedUrl,
  );

  protected readonly subjects = [
    'Frontend Development',
    'Fullstack Project',
    'Collaboration',
    'Open Source',
    'Other',
  ] as const;

  protected fullName = '';
  protected email = '';
  protected subject: (typeof this.subjects)[number] = 'Frontend Development';
  protected message = '';
  protected readonly submitted = signal(false);

  protected social(icon: SocialLink['icon']): SocialLink | undefined {
    return this.profile.socials.find((link) => link.icon === icon);
  }

  protected socialHandle(icon: SocialLink['icon']): string {
    const url = this.social(icon)?.url ?? '';
    switch (icon) {
      case 'email':
        return url.replace(/^mailto:/, '');
      case 'telegram':
        return '@' + url.replace(/^https?:\/\/t\.me\//, '');
      case 'linkedin':
        return url.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '');
      case 'github':
        return url.replace(/^https?:\/\/(www\.)?github\.com\//, '');
      default:
        return url;
    }
  }

  protected sendMessage(): void {
    const email = this.socialHandle('email');
    const subject = encodeURIComponent(`[Portfolio] ${this.subject} — ${this.fullName || 'Inquiry'}`);
    const body = encodeURIComponent(
      [
        `Name: ${this.fullName || '—'}`,
        `Email: ${this.email || '—'}`,
        `Subject: ${this.subject}`,
        '',
        this.message || '—',
      ].join('\n'),
    );

    this.submitted.set(true);
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  }
}
