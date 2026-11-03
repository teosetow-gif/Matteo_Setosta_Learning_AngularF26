import {Component, computed, inject, input} from '@angular/core';
import {TvShowService} from '../services/tv-show';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-tv-show-detail',
  styleUrl: './tv-show-detail.css',
  templateUrl: './tv-show-detail.html',
})
export class TvShowDetail {
  id = input.required<string>();
  private tvShowService = inject(TvShowService);

  show = computed(() =>
  this.tvShowService.showList().find(s => s.id === Number(this.id()))
  );
}
