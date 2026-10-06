import { Component, input, output } from '@angular/core';
import {TvShow} from '../shared/models/tvShow';
import {TvShowEvent} from '../shared/models/tvShowEvent';

@Component({
  imports: [],
  selector: 'app-tv-show-list-item',
  styleUrl: './tv-show-list-item.css',
  templateUrl: './tv-show-list-item.html',
})
export class TvShowListItem {
  item = input.required<TvShow>();
  opened = output<TvShowEvent>();
  remove = output<number>();

  onRemoveClick() {
    this.remove.emit(this.item().id);
  }
  toggle(): void {
    this.opened.emit({id: this.item().id, action: 'opened'});
    }
}

