import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {TvShow} from '../shared/models/tvShow';
import {TV_CONFIG} from '../shared/config/tv-config';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class TvShowService {
  private http = inject(HttpClient);
  private config = inject(TV_CONFIG);

  private shows = signal<TvShow[]>([]);
  showList = this.shows.asReadonly();

  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.load();
    effect(() => {
      console.log('Tv show count is now', this.shows().length);
    });
  }

  load() {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<TvShow[]>(`${this.config.apiBaseUrl}/shows`, {
      params: { page: 0 },
    }).subscribe({
      next: (list) => {
        this.shows.set(list);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Could not load data.');
        this.isLoading.set(false);
      },
    });
  }

  addShow(newShow: TvShow) {
    this.shows.update(list => [...list, newShow])
  }
  nextId(): number {
    return Math.max(0, ...this.shows().map(s=> s.id)) + 1;
  }
runningShows = computed(()=>
  this.shows().filter(s => s.status === 'Running')
);

  runningSummary = computed(() => `${this.runningShows().length} shows currently running`);

removeShow(id: number) {
  this.shows.update(list => list.filter(s =>s .id !== id));
}

updateShow(updated: TvShow) {
  this.shows.update(list => list.map(s => s.id === updated.id ? updated: s));
}

  readonly dataSourceUrl = this.config.apiBaseUrl;


}
