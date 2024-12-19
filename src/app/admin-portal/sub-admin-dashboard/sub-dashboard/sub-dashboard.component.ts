import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { SubAdminDashboardComponent } from '../sub-admin-dashboard.component';
import { DashboardComponent } from '../../admin-dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-sub-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,SubAdminDashboardComponent,DashboardComponent,],
  templateUrl: './sub-dashboard.component.html',
  styleUrl: './sub-dashboard.component.css'
})
export class SubDashboardComponent {

}
