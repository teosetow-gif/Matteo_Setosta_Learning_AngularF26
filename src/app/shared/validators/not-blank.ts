import {FormGroup, ValidationErrors} from '@angular/forms';


export function notBlank(control: FormGroup): ValidationErrors | null {
  const value = control.value;
  return typeof value === 'string' && value.length > 0 && value.trim() === ''
  ? {blank: true}
    : null;
}
