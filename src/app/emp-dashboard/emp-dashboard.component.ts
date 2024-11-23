import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { CreateJobPostComponent } from './create-job-post/create-job-post.component';
import { VerticalSliderComponent } from './vertical-slider/vertical-slider.component';

@Component({
  selector: 'app-emp-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,CreateJobPostComponent,VerticalSliderComponent],  // Include HeaderComponent
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
