import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {TV_CONFIG} from './shared/config/tv-config';
import { TvShowService} from './services/tv-show';
import { MockTvService } from './services/MockTvService'

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
    /**to change back to the real data from [MOCK] Data, all you need to do is either fully
     * remove the UseClass provider or comment it out and it will switch  back to the real data
     */
    {provide: TvShowService, useClass: MockTvService },
],
};
