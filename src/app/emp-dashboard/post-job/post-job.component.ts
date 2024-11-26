import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpDashboardComponent } from '../emp-dashboard.component';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [CommonModule,RouterModule,EmpDashboardComponent],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  employerNavItems = [
    { label: 'Post Job', link: '/post-job' },
    { label: 'Job Posted', link: '/job-posted' },
    { label: 'Applied Users', link: '/applied-users' },
    // { label: 'Manage Jobs', link: '/employer/manage-jobs' }
  ];
}
