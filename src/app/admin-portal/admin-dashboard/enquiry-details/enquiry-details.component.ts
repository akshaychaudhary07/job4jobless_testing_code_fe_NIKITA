import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';

@Component({
  selector: 'app-enquiry-details',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,],
  templateUrl: './enquiry-details.component.html',
  styleUrl: './enquiry-details.component.css'
})
export class EnquiryDetailsComponent {

}
