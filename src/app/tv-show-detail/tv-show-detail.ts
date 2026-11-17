import {Component, computed, inject, input} from '@angular/core';
import {TvShowService} from '../services/tv-show';
import {RouterLink} from '@angular/router';
import {DecimalPipe, UpperCasePipe} from '@angular/common';
import {StatusLabelPipe} from '../pipes/status-label-pipe';
import {TruncatePipe} from '../pipes/truncate-pipe';

@Component({
  imports: [RouterLink, DecimalPipe, UpperCasePipe, StatusLabelPipe, TruncatePipe],
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
