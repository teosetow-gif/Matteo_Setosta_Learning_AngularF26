import {Component, computed, effect, inject, input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import {TvShowService} from '../services/tv-show';
import {TvShow} from '../shared/models/tvShow';
import {Router} from '@angular/router';
import {notBlank} from '../shared/validators/not-blank';
import {summaryNotName} from '../shared/validators/summary-not-name';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-tv-show-form',
  styleUrl: './tv-show-form.css',
  templateUrl: './tv-show-form.html',
})
export class TvShowForm {

  private fb = inject(FormBuilder);
  private tvShowService = inject(TvShowService);
  private router = inject(Router);

  id = input<string>();

  isEditMode = computed(() => this.id() !== undefined);

  showForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), notBlank ]],
    genre: ['', Validators.required],
    status: ['Running' as TvShow['status']],
    rating: [0],
    summary: [''],
  }, { validators: summaryNotName  });

  constructor() {
    effect(() => {
      const id = this.id();
      if (id === undefined) return;
      const show = this.tvShowService.showList().find(s => s.id === Number(id));
      if (show) {
        this.showForm.patchValue({
          name: show.name,
          genre: show.genres.length > 0 ? show.genres[0] : '',
          status: show.status,
          rating: show.rating.average === null ? 0 : show.rating.average,
          summary: show.summary == null ? '' : show.summary,
        });
      }
    });
  }

  onSubmit(): void {
    if (this.showForm.invalid) return;

    const formValue = this.showForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : this.tvShowService.nextId();

    const show: TvShow = {
      id,
        name: formValue.name,
        genres: [formValue.genre],
        status: formValue.status,
        rating: { average: formValue.rating},
        summary: formValue.summary,
    };

    if (this.isEditMode()) {
      this.tvShowService.updateShow(show);
    } else {
      this.tvShowService.addShow(show);
    }

    this.showForm.reset();
    this.router.navigate(['/shows', id]);
  }
}
