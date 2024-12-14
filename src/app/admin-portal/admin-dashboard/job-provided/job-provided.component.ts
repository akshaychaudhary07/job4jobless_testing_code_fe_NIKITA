import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { JobFinderProfileComponent } from '../job-finder-profile/job-finder-profile.component';

@Component({
  selector: 'app-job-provided',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,CompanyDetailsComponent,JobFinderProfileComponent,],
  templateUrl: './job-provided.component.html',
  styleUrl: './job-provided.component.css'
})
export class JobProvidedComponent {

}
