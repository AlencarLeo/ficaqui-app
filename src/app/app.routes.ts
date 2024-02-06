import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(i => i.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/about/about.component').then(i => i.AboutComponent)
  }
];
