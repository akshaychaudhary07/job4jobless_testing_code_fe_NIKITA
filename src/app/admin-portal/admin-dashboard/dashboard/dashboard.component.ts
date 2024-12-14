import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { JobFinderProfileComponent } from '../job-finder-profile/job-finder-profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,AdminPortalComponent,AdminDashboardComponent,JobFinderProfileComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tableData = [
    {
      article: 'Career Objective',
      views: '2.9k',
      comments: '15',
      status: 'Published',
      statusIcon: 'fa fa-check-circle',
      statusColor: 'text-success',
      isExpanded: false,
    },
    {
      article:
        'How to Manage Time Effectively to Maintain Work Life Balance – 6 Best Ways',
      views: '0',
      comments: '0',
      status: 'Schedule',
      statusIcon: 'fa fa-calendar-check',
      statusColor: 'text-warning',
      isExpanded: false,
    },
    {
      article: 'Boost Your Job Application',
      views: '2.9k',
      comments: '15',
      status: 'Published',
      statusIcon: 'fa fa-check-circle',
      statusColor: 'text-success',
      isExpanded: false,
    },
    {
      article: 'Career Objective On Hold',
      views: '2.9k',
      comments: '15',
      status: 'On Hold',
      statusIcon: 'fa fa-exclamation-circle',
      statusColor: 'text-danger',
      isExpanded: false,
    },
  ];
}
