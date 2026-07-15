import { TestBed } from '@angular/core/testing';
import { ContactPage } from './contact';

describe('ContactPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage],
    }).compileComponents();
  });

  it('should render contact heading and form', async () => {
    const fixture = TestBed.createComponent(ContactPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain("Let's build something together");
    expect(compiled.textContent).toContain('Direct Message');
    expect(compiled.textContent).toContain('Gomel, Belarus');
  });
});
