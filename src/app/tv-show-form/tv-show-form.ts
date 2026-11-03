import {Component, computed, effect, inject, input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {TvShowService} from '../services/tv-show';
import {TvShow} from '../shared/models/tvShow';
import {Router} from '@angular/router';

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
    name: ['', [Validators.required, Validators.minLength(2)]],
    genre: ['', Validators.required],
    status: ['Running' as TvShow['status']],
    rating: [0],
    summary: [''],
  });

  constructor() {
    effect(() => {
      const id = this.id();
      if (id === undefined) return;
      const show = this.tvShowService.showList().find(s => s.id === Number(id));
      if (show) {
        this.showForm.patchValue({ ...show, summary: show.summary ?? '' });
      }
    });
  }

  onSubmit(): void {
    if (this.showForm.invalid) return;

    const formValue = this.showForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : Date.now();

    if (this.isEditMode()) {
      this.tvShowService.updateShow({ id, ...formValue });
    } else {
      this.tvShowService.addShow({ id, ...formValue});
    }

    this.showForm.reset();
    this.router.navigate(['/shows', id]);
  }
}
