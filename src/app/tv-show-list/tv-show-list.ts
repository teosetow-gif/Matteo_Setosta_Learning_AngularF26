import { Component, inject } from '@angular/core';
import {TvShow} from '../shared/models/tvShow';
import {TvShowListItem} from '../tv-show-list-item/tv-show-list-item';
import {TvShowEvent} from '../shared/models/tvShowEvent';
import {TvShowService} from '../services/tv-show';

@Component({
  imports: [TvShowListItem],
  selector: 'app-tv-show-list',
  styleUrl: './tv-show-list.css',
  templateUrl: './tv-show-list.html',
})
export class TvShowList {
 private tvShowService = inject(TvShowService);

 shows = this.tvShowService.showList;

 running = this.tvShowService.runningShows;


protected openedIds: number[] = [];

  onShowOpened(event: TvShowEvent): void {
      console.log(`Show ${event.id} was ${event.action}`);
      if (event.action === 'opened' && !this.openedIds.includes(event.id)) {
        this.openedIds.push(event.id);
        }
      }

  protected readonly status = status;
}
