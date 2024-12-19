import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubAdminDashboardComponent } from '../sub-admin-dashboard.component';

@Component({
  selector: 'app-sub-admin-logout',
  standalone: true,
  imports: [CommonModule,RouterLink,SubAdminDashboardComponent,],
  templateUrl: './sub-admin-logout.component.html',
  styleUrl: './sub-admin-logout.component.css'
})
export class SubAdminLogoutComponent {

}
