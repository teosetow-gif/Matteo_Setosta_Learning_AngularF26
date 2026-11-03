import { Routes } from '@angular/router';
import {TvShowList} from './tv-show-list/tv-show-list';
import {TvShowDetail} from './tv-show-detail/tv-show-detail';
import {TvShowForm} from './tv-show-form/tv-show-form';
import {editGuard} from './guards/edit-guard';

export const routes: Routes = [
  {path: '', redirectTo: 'shows', pathMatch: 'full'},
  {path: 'shows', component: TvShowList},
  {path: 'shows/new', component: TvShowForm},
  {path: 'shows/edit/:id', component: TvShowForm, canActivate: [editGuard]},
  {path: 'shows/:id', component: TvShowDetail},

];
