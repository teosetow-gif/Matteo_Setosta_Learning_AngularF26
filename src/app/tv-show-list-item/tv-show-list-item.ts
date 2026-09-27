import { Component } from '@angular/core';
import {TvShow} from '../shared/models/tv-show';

@Component({
  imports: [],
  selector: 'app-tv-show-list-item',
  styleUrl: './tv-show-list-item.css',
  templateUrl: './tv-show-list-item.html',
})
export class TvShowListItem {
  item = input.required<TvShow>();


  }
