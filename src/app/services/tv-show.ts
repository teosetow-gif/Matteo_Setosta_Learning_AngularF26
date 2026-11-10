import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {TvShow} from '../shared/models/tvShow';
import {TV_CONFIG} from '../shared/config/tv-config';

@Injectable({ providedIn: 'root'})
export class TvShowService {


  private shows = signal<TvShow[]>([
    {id: 1, name: 'Breaking Bad', genres: ['Crime'], status:'Ended', rating: {average: 9.5}, summary: 'A chemistry teacher turns to making drugs'},
    {id: 2, name: 'The Bear', genres: ['Drama'], status:'Running', rating: {average: 8.5}, },
    {id: 3, name: 'The Office', genres: ['Comedy'], status: 'Ended', rating: {average: 9.5}},
    {id: 4, name: 'Family guy', genres: ['Comedy'], status:'Running', rating: {average: 9.5}},
    {id: 5, name: 'Suits', genres: ['Legal Drama'], status: 'Ended', rating: {average: 9.5}, summary: 'A man with best memory becomes lawyer without going to law school.'},
    {id: 6, name: 'Friends', genres: ['sitcom'], status: 'Ended', rating: {average: 9.5}}

  ]);
showList = this.shows.asReadonly();

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

constructor() {
  effect(() => {
    console.log('Tv show count is now', this.shows().length);
  });
}

removeShow(id: number) {
  this.shows.update(list => list.filter(s =>s .id !== id));
}

updateShow(updated: TvShow) {
  this.shows.update(list => list.map(s => s.id === updated.id ? updated: s));
}

  private config = inject(TV_CONFIG);
  readonly dataSourceUrl = this.config.apiBaseUrl;


}
