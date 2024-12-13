import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../admin-portal.component';
import { SubAdminLoginComponent } from '../sub-admin-login/sub-admin-login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { profile } from 'console';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, RouterLink, AdminPortalComponent, SubAdminLoginComponent, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  isPasswordVisible: boolean = false;
  selectedRole: string = '';

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // Check selected role
      if (this.selectedRole === 'admin') {
        console.log('Admin selected, routing to admin dashboard...');
        this.router.navigate(['/admin-dashboard']);
      } else if (this.selectedRole === 'sub-admin') {
        console.log('Sub-admin selected, routing to sub-admin dashboard...');
        this.router.navigate(['/sub-admin-dashboard']);
      } else {
        console.log('No role selected');
      }
    } else {
      console.log('Form is not valid');
    }
  }

  constructor(private router: Router) {}

  accountCreated() {
    this.router.navigate(['/job-seeker-signup']);
  }
}

