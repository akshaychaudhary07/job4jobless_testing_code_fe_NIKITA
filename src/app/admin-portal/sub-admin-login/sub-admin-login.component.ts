import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../admin-portal.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-sub-admin-login',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminLoginComponent,],
  templateUrl: './sub-admin-login.component.html',
  styleUrl: './sub-admin-login.component.css'
})
export class SubAdminLoginComponent {

}
