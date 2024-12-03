import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { ReviewJobPostComponent } from '../review-job-post/review-job-post.component';
import { CreateJobPostComponent } from '../create-job-post/create-job-post.component';
import { EmpDashboardComponent } from '../emp-dashboard.component';

@Component({
  selector: 'app-job-post-submitted',
  standalone: true,
  imports: [CommonModule,RouterModule,JobDetailsComponent,ReviewJobPostComponent,CreateJobPostComponent,EmpDashboardComponent],
  templateUrl: './job-post-submitted.component.html',
  styleUrl: './job-post-submitted.component.css'
})
export class JobPostSubmittedComponent {
  constructor(private router: Router) {}

  // Navigate back to job search
  backToHome(): void {
    this.router.navigate(['/post-job']); // Replace '/job-search' with the appropriate route
  }
  employerNavItems = [
    { label: 'Post Job', link: '/post-job' },
    { label: 'Job Posted', link: '/job-posted' },
    { label: 'Applied Users', link: '/applied-users' },
    // { label: 'Manage Jobs', link: '/employer/manage-jobs' }
  ];
}
