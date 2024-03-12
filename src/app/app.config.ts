import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './interceptors/log.interceptor';

export const APP_TITLE = new InjectionToken<string>('App title', {
  providedIn: 'root',
  factory: () => 'Pokémon List'
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([logInterceptor])), 
    provideRouter(routes, withComponentInputBinding()), 
    provideClientHydration()
  ]
};
