import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { JobFinderProfileComponent } from '../job-finder-profile/job-finder-profile.component';
import { FormsModule } from '@angular/forms';
import { JobProvidedComponent } from '../job-provided/job-provided.component';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,JobFinderProfileComponent,FormsModule,JobProvidedComponent,],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {


}
