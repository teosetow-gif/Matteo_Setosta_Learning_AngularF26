import {Component, computed, inject, input, OnDestroy, OnInit} from '@angular/core';
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
export class TvShowDetail implements OnInit, OnDestroy{
  id = input.required<string>();
  private tvShowService = inject(TvShowService);
  private openedAt = 0;

  show = computed(() =>
  this.tvShowService.showList().find(s => s.id === Number(this.id()))
  );
  ngOnInit(): void {
    this.openedAt = Date.now();
    const show = this.tvShowService.showList().find(s => s.id === Number(this.id()));
    console.log(`[lifescycle] opened: ${show ? show.name : 'show ' + this.id()}`);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    const show = this.show();
    console.log(`[lifecycle] closed: ${show ? show.name: 'show ' + this.id()} after ${seconds} seconds`);
  }
}
