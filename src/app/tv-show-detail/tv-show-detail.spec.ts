import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowDetail } from './tv-show-detail';

describe('TvShowDetail', () => {
  let component: TvShowDetail;
  let fixture: ComponentFixture<TvShowDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
