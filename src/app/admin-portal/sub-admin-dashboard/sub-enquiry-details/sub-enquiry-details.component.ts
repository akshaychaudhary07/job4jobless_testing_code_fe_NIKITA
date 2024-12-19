import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnquiryDetailsComponent } from '../../admin-dashboard/enquiry-details/enquiry-details.component';
import { SubAdminDashboardComponent } from '../sub-admin-dashboard.component';
import { AdminPortalComponent } from '../../admin-portal.component';

@Component({
  selector: 'app-sub-enquiry-details',
  standalone: true,
  imports: [CommonModule,RouterLink,EnquiryDetailsComponent,SubAdminDashboardComponent,AdminPortalComponent,],
  templateUrl: './sub-enquiry-details.component.html',
  styleUrl: './sub-enquiry-details.component.css'
})
export class SubEnquiryDetailsComponent {

}
