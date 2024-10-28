import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Correct import

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Pass the correct 'routes' constant here
    // other providers, if any
  ]
})
.catch(err => console.error(err));
