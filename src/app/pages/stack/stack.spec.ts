import { TestBed } from '@angular/core/testing';
import { StackPage } from './stack';

describe('StackPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackPage],
    }).compileComponents();
  });

  it('should render stack heading and technologies', async () => {
    const fixture = TestBed.createComponent(StackPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Tech Stack');
    expect(compiled.textContent).toContain('TypeScript');
    expect(compiled.textContent).toContain('Angular');
  });
});
