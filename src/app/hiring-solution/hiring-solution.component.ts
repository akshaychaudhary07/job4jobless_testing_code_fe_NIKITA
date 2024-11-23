import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { HeaderComponent } from '../header/header.component';
import { EmpDashboardComponent } from '../emp-dashboard/emp-dashboard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hiring-solution',
  standalone: true,
  imports: [CommonModule, TopBannerComponent,EmpDashboardComponent,RouterModule],  // Removed HeaderComponent from here
  templateUrl: './hiring-solution.component.html',
  styleUrls: ['./hiring-solution.component.css']
})
export class HiringSolutionComponent {
  employerNavItems = [
    { label: 'Hiring-solution', link: '/hiring-solution' },
    { label: 'Dashboard', link: '/dashboard' },
    // { label: 'Manage Jobs', link: '/employer/manage-jobs' }
  ];
}
