import { Routes } from '@angular/router';
import {TvShowList} from './tv-show-list/tv-show-list';
import {TvShowDetail} from './tv-show-detail/tv-show-detail';
import {TvShowForm} from './tv-show-form/tv-show-form';
import {editGuard} from './guards/edit-guard';

export const routes: Routes = [
  {path: '', redirectTo: 'shows', pathMatch: 'full'},
  {path: 'shows', component: TvShowList},

  {path: 'shows/new', loadComponent: () => import('./tv-show-form/tv-show-form').then(m => m.TvShowForm)},

  {path: 'shows/edit/:id', loadComponent: () => import('./tv-show-form/tv-show-form').then(m => m.TvShowForm), canActivate: [editGuard]},

  {path: 'shows/:id', loadComponent: () => import('./tv-show-detail/tv-show-detail').then(m => m.TvShowDetail)},

];
