import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-push-notification',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,ReactiveFormsModule,],
  templateUrl: './push-notification.component.html',
  styleUrl: './push-notification.component.css'
})
export class PushNotificationComponent {
    subAdminForm: FormGroup;
    constructor(private fb: FormBuilder) {
      this.subAdminForm = this.fb.group({
        Heading: ['', [Validators.required]],
        Description: ['', [Validators.required, ]],
        SelectToken: ['', [Validators.required, ]],
        
      });
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
