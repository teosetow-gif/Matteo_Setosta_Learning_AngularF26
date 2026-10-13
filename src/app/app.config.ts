import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {TV_CONFIG} from './shared/config/tv-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
{
  provide: TV_CONFIG,
  useValue: {
    apiBaseUrl: 'https://placeholder.example.com/api',
      defaultGenre: 'all',
  },
},
],
};
