import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../admin-portal.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { SubAdminLoginComponent } from '../sub-admin-login/sub-admin-login.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { SubEnquiryDetailsComponent } from './sub-enquiry-details/sub-enquiry-details.component';
import { SubAdminLogoutComponent } from './sub-admin-logout/sub-admin-logout.component';

@Component({
  selector: 'app-sub-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminLoginComponent,SubAdminLoginComponent
    ,AdminDashboardComponent,FormsModule,SubDashboardComponent,SubEnquiryDetailsComponent,SubAdminLogoutComponent,],
  templateUrl: './sub-admin-dashboard.component.html',
  styleUrl: './sub-admin-dashboard.component.css'
})
export class SubAdminDashboardComponent {
  sidebarItems = [
    { title: 'Dashboard', icon: 'fa-solid fa-table-columns', heading: 'Dashboard' },
      { title: 'Enquiry Details', icon: 'fa-solid fa-circle-info', heading: 'Enquiry Details' },
      { title: 'Logout', icon: 'fa-solid fa-sign-out-alt', heading: 'Logout' },
  ];

  selectedItem: string = this.sidebarItems[0].title; // Set default to "Job Finder Profile"
  selectedHeading: string = this.sidebarItems[0].heading; // Set default heading

  selectItem(title: string) {
      const item = this.sidebarItems.find(i => i.title === title);
      if (item) {
          this.selectedItem = item.title;
          this.selectedHeading = item.heading; // Update heading based on selected item
      }
  }
 

}
