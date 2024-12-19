import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SubAdminLoginComponent } from './sub-admin-login/sub-admin-login.component';
import { CompanyDetailsComponent } from '../company/company-details/company-details.component';
import { JobProvidedComponent } from './admin-dashboard/job-provided/job-provided.component';
import { EnquiryDetailsComponent } from './admin-dashboard/enquiry-details/enquiry-details.component';
import { SubAdminDetailsComponent } from './admin-dashboard/sub-admin-details/sub-admin-details.component';
import { CreateSubAdminComponent } from './admin-dashboard/create-sub-admin/create-sub-admin.component';
import { PushNotificationComponent } from './admin-dashboard/push-notification/push-notification.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { AdminLogoutComponent } from './admin-dashboard/admin-logout/admin-logout.component';
import { SendNotificationComponent } from './admin-dashboard/send-notification/send-notification.component';
import { SubAdminDashboardComponent } from './sub-admin-dashboard/sub-admin-dashboard.component';
import { SubDashboardComponent } from './sub-admin-dashboard/sub-dashboard/sub-dashboard.component';
import { SubEnquiryDetailsComponent } from './sub-admin-dashboard/sub-enquiry-details/sub-enquiry-details.component';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminLoginComponent,SubAdminLoginComponent,CompanyDetailsComponent,JobProvidedComponent,
    EnquiryDetailsComponent,SubAdminDetailsComponent,CreateSubAdminComponent,PushNotificationComponent,BlogsComponent,AdminLogoutComponent,
    SendNotificationComponent,SubAdminDashboardComponent,SubDashboardComponent,SubEnquiryDetailsComponent,],
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css'
})
export class AdminPortalComponent {

}
