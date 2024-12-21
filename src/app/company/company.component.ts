import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule,RouterModule,CompanyPageComponent,CompanyDetailsComponent,SavedJobsComponent,],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
 navItems = [
    { label: 'Find Jobs', link: '/find-jobs' },
    { label: 'Company Reviews', link: '/company-reviews' },
    { label: 'Saved Jobs', link: '/saved-jobs' },
    { label: 'Resume Builder', link: '/resume-builder' },
    { label: 'Notifications', link: '/notification' },
    { label: 'Messages', link: '/job-seeker-chat' },
  ]; // 6 labels for these routes
}
