import {Service, signal} from '@angular/core';

@Service()
export class ErrorService {
  message = signal<string | null>(null);

  setMessage(text: string): void {
    this.message.set(text);
  }

  clear(): void {
    this.message.set(null);
  }
}
