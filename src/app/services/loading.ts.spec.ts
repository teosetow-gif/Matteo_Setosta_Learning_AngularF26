import { TestBed } from '@angular/core/testing';
import { LoadingTs } from './loading.ts';

describe('LoadingTs', () => {
  let service: LoadingTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
