import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, max = 100): string {
    const text = (value ?? '').replace(/<[^>]*>/g, '').trim();
    if (text.length <= max) return text;
    return text.slice(0, max) + '...';
  }
}
