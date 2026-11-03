import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {TvShowService} from '../services/tv-show';
import {TvShow} from '../shared/models/tvShow';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-tv-show-form',
  styleUrl: './tv-show-form.css',
  templateUrl: './tv-show-form.html',
})
export class TvShowForm {

  private fb = inject(FormBuilder);
  private tvShowService = inject(TvShowService);

  showForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    genre: ['', Validators.required],
    status: ['Running'],
    rating: [0],
    summary: [''],
  })

  onSubmit(): void {
    if (this.showForm.invalid) return;
    const value = this.showForm.getRawValue();
    this.tvShowService.addShow({id: Date.now(), ...value} as TvShow);
    this.showForm.reset({status: 'Running', rating: 0});
  }
}
