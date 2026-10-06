import { TestBed } from '@angular/core/testing';
import { TvShow } from './tv-show';

describe('TvShow', () => {
  let service: TvShow;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShow);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
