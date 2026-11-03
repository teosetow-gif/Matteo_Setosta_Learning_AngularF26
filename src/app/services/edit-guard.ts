import {Service, signal} from '@angular/core';

@Service()
export class EditGuardService {
  guardEnabled = signal(true);

  toggle(): void {
    this.guardEnabled.update(v => !v);
  }
}
