import { Routes } from '@angular/router';
import { App } from './app';
import { Todos } from './components/todos/todos';
import { About } from './components/about/about';

export const routes: Routes = [
    {
    path: '',
    component: Todos,
  },
  {
    path: 'about',
    component: About,
  },
];
