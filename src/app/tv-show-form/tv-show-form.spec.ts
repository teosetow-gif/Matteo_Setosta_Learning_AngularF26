import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowForm } from './tv-show-form';

describe('TvShowForm', () => {
  let component: TvShowForm;
  let fixture: ComponentFixture<TvShowForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
