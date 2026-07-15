import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projects/projects';
import { StackPage } from './pages/stack/stack';
import { ContactPage } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'stack', component: StackPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
