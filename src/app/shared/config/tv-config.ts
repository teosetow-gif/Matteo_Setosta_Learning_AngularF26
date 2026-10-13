import {InjectionToken} from '@angular/core';

export interface tvConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const TV_CONFIG = new InjectionToken<tvConfig>('tv.config');
