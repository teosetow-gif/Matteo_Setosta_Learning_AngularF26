import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import {TV_CONFIG} from './shared/config/tv-config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {loadingInterceptor} from './interceptors/loading-interceptor';
import {errorInterceptor} from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
{
  provide: TV_CONFIG,
  useValue: {
    apiBaseUrl: 'https://api.tvmaze.com',
      defaultGenre: 'all',
  },
},
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    /**to change back to the real data from [MOCK] Data, all you need to do is either fully
     * remove the UseClass provider or comment it out and it will switch  back to the real data
     */

],
};
