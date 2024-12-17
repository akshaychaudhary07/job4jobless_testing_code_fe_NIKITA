import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../admin-portal.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { SubAdminLoginComponent } from '../sub-admin-login/sub-admin-login.component';
import { SubAdminDashboardComponent } from '../sub-admin-dashboard/sub-admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobFinderProfileComponent } from './job-finder-profile/job-finder-profile.component';
import { JobProvidedComponent } from './job-provided/job-provided.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EnquiryDetailsComponent } from './enquiry-details/enquiry-details.component';
import { SubAdminDetailsComponent } from './sub-admin-details/sub-admin-details.component';
import { CreateSubAdminComponent } from './create-sub-admin/create-sub-admin.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,AdminPortalComponent,AdminLoginComponent,SubAdminLoginComponent,
    SubAdminDashboardComponent,DashboardComponent,JobFinderProfileComponent,JobProvidedComponent,CompanyDetailsComponent,EnquiryDetailsComponent,
  SubAdminDetailsComponent,CreateSubAdminComponent,PushNotificationComponent,BlogsComponent,AdminLogoutComponent,SendNotificationComponent,],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  sidebarItems = [
    { title: 'Dashboard', icon: 'fa-solid fa-table-columns', heading: 'Dashboard' },
      { title: 'Job Finder Profile', icon: 'fa-solid fa-user', heading: 'Seekers Details' },
      { title: 'Company Details', icon: 'fa-solid fa-key', heading: 'Company Details' },
      { title: 'Jobs Provided', icon: 'fa-solid fa-hand-holding-heart', heading: 'Jobs Provided' },
      { title: 'Enquiry Details', icon: 'fa-solid fa-circle-info', heading: 'Enquiry Details' },
      { title: 'Create Sub Admin', icon: 'fa-solid fa-user-plus', heading: 'Create Sub Admin' },
      { title: 'Sub Admin Details', icon: 'fa-solid fa-user-check', heading: 'Sub Admin Details' },
      { title: 'Push Notification', icon: 'fa-regular fa-bell', heading: 'Push Notification' },
      { title: 'Blogs', icon: 'fa-solid fa-file-lines', heading: 'Blogs' },
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

 // State variable to toggle between components
  currentComponent: string = 'JobFinderProfile'; // Default is 'JobFinderProfile'
  currentComponent1: string = 'CompanyDetails';
// Method to switch between components
switchComponent(componentName: string) {
  this.currentComponent = componentName;
}
switchComponent1(componentName: string) {
  this.currentComponent1 = componentName;
}




}