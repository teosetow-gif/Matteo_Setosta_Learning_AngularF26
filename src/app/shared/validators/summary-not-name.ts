import {AbstractControl, ValidationErrors} from '@angular/forms';

export function summaryNotName(group: AbstractControl): ValidationErrors | null {
  const name = group.value.name;
  const summary = group.value.summary;
  return name && summary && name === summary ? { sameAsName: true } : null;
}
