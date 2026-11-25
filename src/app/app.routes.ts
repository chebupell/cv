import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projects/projects';
import { StackPage } from './pages/stack/stack';
import { ContactPage } from './pages/contact/contact';
import { BeregCaseStudy } from './pages/case-studies/bereg/bereg';
import { SkillszenCaseStudy } from './pages/case-studies/skillszen/skillszen';
import { FinanceDashboardCaseStudy } from './pages/case-studies/finance-dashboard/finance-dashboard';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects/bereg', component: BeregCaseStudy },
  { path: 'projects/skillszen', component: SkillszenCaseStudy },
  { path: 'projects/finance-dashboard', component: FinanceDashboardCaseStudy },
  { path: 'projects', component: ProjectsPage },
  { path: 'stack', component: StackPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
