import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sub-admin',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminDashboardComponent,AdminPortalComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './create-sub-admin.component.html',
  styleUrl: './create-sub-admin.component.css'
})

export class CreateSubAdminComponent {
  subAdminForm: FormGroup;
  passwordVisible: boolean = false;

  // Permissions list for checkboxes
  permissionsList = [
    { key: 'manageUsers', label: 'Manage Users' },
    { key: 'manageEmployers', label: 'Manage Employers' },
    { key: 'postJob', label: 'Post Job' },
    { key: 'applyJob', label: 'Apply Job' },
    { key: 'manageBlogs', label: 'Manage Blogs' },
    { key: 'pushNotification', label: 'Push Notification' },
    { key: 'enquiry', label: 'Enquiry' },
    { key: 'approveJobDetails', label: 'Approve Job Details' }
  ];

  constructor(private fb: FormBuilder) {
    this.subAdminForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      permissions: this.fb.group(
        {
          manageUsers: [false],
          manageEmployers: [false],
          postJob: [false],
          applyJob: [false],
          manageBlogs: [false],
          pushNotification: [false],
          enquiry: [false],
          approveJobDetails: [false]
        },
        { validators: this.atLeastOneCheckboxValidator() } // Add custom validator
      )
    });
  }

  // Custom Validator to check at least one checkbox is selected
  atLeastOneCheckboxValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const permissionsGroup = group as FormGroup;
      const atLeastOneSelected = Object.values(permissionsGroup.value).some(value => value === true);
      console.log('Permissions control values:', Object.values(permissionsGroup.value));
      return atLeastOneSelected ? null : { atLeastOneRequired: true };
    };
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    console.log('Attempting to submit form...');
    if (this.subAdminForm.valid) {
      console.log('Form is valid.');
      console.log('Form Data:', this.subAdminForm.value);
      alert('Form submitted successfully!');
    } else {
      console.log('Form is invalid. Please fill all required fields correctly.');
      this.subAdminForm.markAllAsTouched(); // Trigger validation errors
    }
  }
}