import { Routes } from '@angular/router';
import {TvShowList} from './tv-show-list/tv-show-list';
import {TvShowDetail} from './tv-show-detail/tv-show-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'shows', pathMatch: 'full'},
  {path: 'shows', component: TvShowList},
  {path: 'shows/:id', component: TvShowDetail},

];
