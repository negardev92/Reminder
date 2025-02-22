import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync('animations'),provideHttpClient(),provideToastr()]
};
