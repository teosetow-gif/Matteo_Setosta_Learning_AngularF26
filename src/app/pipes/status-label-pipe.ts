import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  private labels : Record<string, string> = {
    'Running' : 'Currently Airing',
    'Ended': 'Finished',
    'TBD': 'Undecided',
    'In Development': 'In progress'
  };
  transform(status: string | null | undefined): string {
    if (!status) return '';
    return this.labels[status] ?? status;
  }
}
