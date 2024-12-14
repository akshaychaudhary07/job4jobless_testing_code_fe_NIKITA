import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SubAdminLoginComponent } from './sub-admin-login/sub-admin-login.component';
import { CompanyDetailsComponent } from '../company/company-details/company-details.component';
import { JobProvidedComponent } from './admin-dashboard/job-provided/job-provided.component';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminLoginComponent,SubAdminLoginComponent,CompanyDetailsComponent,JobProvidedComponent,],
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css'
})
export class AdminPortalComponent {

}
