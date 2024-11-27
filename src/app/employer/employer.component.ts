import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EmpBannerComponent } from './emp-banner/emp-banner.component';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [CommonModule, EmpBannerComponent],
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  employerNavItems = [
    { label: 'Hiring-solution', link: '/hiring-solution' },
    { label: 'Dashboard', link: '/dashboard' },
  
    // { label: 'Manage Jobs', link: '/employer/manage-jobs' }
  ];
}
// 