import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SubAdminLoginComponent } from './sub-admin-login/sub-admin-login.component';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminLoginComponent,SubAdminLoginComponent,],
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css'
})
export class AdminPortalComponent {

}
