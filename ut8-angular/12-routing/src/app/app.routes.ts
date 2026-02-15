import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Users } from './features/users/pages/users/users';
import { About } from './features/about/pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users',
    component: Users,
  },
  {
    path: 'about',
    component: About,
  },
];
