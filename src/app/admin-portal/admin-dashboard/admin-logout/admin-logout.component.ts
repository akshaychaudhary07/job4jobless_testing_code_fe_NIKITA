import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';

@Component({
  selector: 'app-admin-logout',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,],
  templateUrl: './admin-logout.component.html',
  styleUrl: './admin-logout.component.css'
})
export class AdminLogoutComponent {

}
