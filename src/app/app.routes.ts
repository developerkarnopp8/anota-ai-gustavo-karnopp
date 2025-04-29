import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/page/home/home.component').then(m => m.HomeComponent),
        title: 'Home | Anota AI | GK'
      },
      {
        path: '',
        loadComponent: () => import('./features/page/home/home.component').then(m => m.HomeComponent),
        title: 'Home | Anota AI | GK'
      },
];
