import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { SubAdminDetailsComponent } from '../sub-admin-details/sub-admin-details.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,SubAdminDetailsComponent,ReactiveFormsModule,FormsModule,],
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.css'
})
export class EditAccountComponent  {

  @Input() selectedItem: any;


  @Input() item: any; // Receives the item to edit
  @Output() closeEdit = new EventEmitter<void>(); // Emits an event to close the edit component

  save() {
    console.log('Attempting to submit form...');
    if (this.subAdminForm.valid) {
      console.log('Form is valid.');
      console.log('Form Data:', this.subAdminForm.value);
      alert('Form submitted successfully!');
    } else {
      console.log('Form is invalid. Please fill all required fields correctly.');
      this.subAdminForm.markAllAsTouched(); // Trigger validation errors
    }
    // Save logic here
    this.close(); // Close after saving
  }

  close() {
    this.closeEdit.emit();
  }
// --------------------------
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




  
}
