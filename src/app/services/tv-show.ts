import {Service, signal} from '@angular/core';
import {TvShow} from '../shared/models/tvShow';

@Service()
export class TvShowService {

  private shows = signal<TvShow[]>([
    {id: 1, name: 'Breaking Bad', genre: 'Crime', status:'Ended', rating: 9.5, summary: 'A chemistry teacher turns to making drugs'},
    {id: 2, name: 'The Bear', genre: 'Drama', status:'Running', rating: 8.6, },
    {id: 3, name: 'The Office', genre: 'Comedy', status: 'Ended', rating: 9.0},
    {id: 4, name: 'Family guy', genre: 'Comedy', status:'Running', rating: 9.0},
    {id: 5, name: 'Suits', genre: 'Legal Drama', status: 'Ended', rating: 9.0, summary: 'A man with best memory becomes lawyer without going to law school.'},
    {id: 6, name: 'Friends', genre: 'sitcom', status: 'Ended', rating: 9.0}

  ]);
showList = this.shows.asReadonly();
}
