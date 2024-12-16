import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { AdminPortalComponent } from '../../admin-portal.component';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sub-admin',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminDashboardComponent,AdminPortalComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './create-sub-admin.component.html',
  styleUrl: './create-sub-admin.component.css'
})
export class CreateSubAdminComponent {
  subAdminForm!: FormGroup;
  passwordVisible: boolean = false;
  subAdmin: any = {
    name: '',
    email: '',
    password: '',
    permissions: {
      manageUsers: false,
      manageEmployers: false,
      postJob: false,
      applyJob: false,
      manageBlogs: false,
      pushNotification: false,
      enquiry: false,
      approveJobDetails: false
    }
  };

  constructor(private fb: FormBuilder) {
    this.subAdminForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      permissions: this.fb.group({
        manageUsers: false,
        manageEmployers: false,
        postJob: false,
        applyJob: false,
        manageBlogs: false,
        pushNotification: false,
        enquiry: false,
        approveJobDetails: false
      })
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if (this.subAdminForm.valid) {
      // Submit form data
      console.log(this.subAdminForm.value);
    }
  }
}
