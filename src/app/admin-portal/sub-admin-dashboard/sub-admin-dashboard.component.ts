import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../admin-portal.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { SubAdminLoginComponent } from '../sub-admin-login/sub-admin-login.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminLoginComponent,SubAdminLoginComponent,AdminDashboardComponent,FormsModule,],
  templateUrl: './sub-admin-dashboard.component.html',
  styleUrl: './sub-admin-dashboard.component.css'
})
export class SubAdminDashboardComponent {

}
