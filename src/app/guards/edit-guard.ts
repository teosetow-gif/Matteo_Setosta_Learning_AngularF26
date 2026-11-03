import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {EditGuardService} from '../services/edit-guard';

export const editGuard: CanActivateFn = (route, state) => {
  const guard = inject(EditGuardService);
  const router = inject(Router);

  return guard.guardEnabled() ? router.parseUrl('/shows'): true;
};
