import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { JobFinderProfileComponent } from '../job-finder-profile/job-finder-profile.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-notification',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,JobFinderProfileComponent,CompanyDetailsComponent,ReactiveFormsModule,],
  templateUrl: './send-notification.component.html',
  styleUrl: './send-notification.component.css'
})
export class SendNotificationComponent {
  selectedHeading: string = 'Send Notification';
    subAdminForm: FormGroup;
    constructor(private fb: FormBuilder, private router:Router) {
      this.subAdminForm = this.fb.group({
        Heading: ['', [Validators.required]],
        SubHeading:['',[Validators.required]],
        Description: ['', [Validators.required, ]],
        NotificationSend: ['', [Validators.required, ]],
        
      });
    }

    @Output() switchComponent = new EventEmitter<string>();

    submitForm() {
      console.log('Attempting to submit form...');
      if (this.subAdminForm.valid) {
        console.log('Form is valid.');
        console.log('Form Data:', this.subAdminForm.value);
        alert('Form submitted successfully!');
        this.router.navigate(['/admin-portal']); // Redirect to the previous component
      } else {
        console.log('Form is invalid. Please fill all required fields correctly.');
        this.subAdminForm.markAllAsTouched(); // Trigger validation errors
      }
    }
  }
