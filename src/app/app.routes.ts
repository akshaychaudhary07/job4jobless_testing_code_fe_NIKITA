import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployerComponent } from './employer/employer.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: ContentboxComponent }, // Home page
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'login-page', component: LoginPageComponent }, // Login page
  { path: '**', redirectTo: '/', pathMatch: 'full' } // Wildcard for 404 redirects
];
