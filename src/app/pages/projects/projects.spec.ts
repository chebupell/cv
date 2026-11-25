import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectsPage } from './projects';

describe('ProjectsPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render projects heading and featured repo', async () => {
    const fixture = TestBed.createComponent(ProjectsPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Projects');
    expect(compiled.textContent).toContain('SkillsZen');
    expect(compiled.textContent).toContain('Finance Dashboard');
  });
});
