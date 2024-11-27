import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { CreateJobPostComponent } from './create-job-post/create-job-post.component';
import { ReviewJobPostComponent } from './review-job-post/review-job-post.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { VerticalSliderComponent } from './vertical-slider/vertical-slider.component';
import { PostJobComponent } from './post-job/post-job.component';
import { AppliedUsersComponent } from './applied-users/applied-users.component';


@Component({
  selector: 'app-emp-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,CreateJobPostComponent,ReviewJobPostComponent,JobDetailsComponent,VerticalSliderComponent,PostJobComponent,AppliedUsersComponent],  // Include HeaderComponent
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent {
  employerNavItems = [
    { label: 'Post Job', link: '/post-job' },
    { label: 'Job Posted', link: '/job-posted' },
    { label: 'Applied Users', link: '/applied-users' },
    // { label: 'Manage Jobs', link: '/employer/manage-jobs' }
  ];
}


