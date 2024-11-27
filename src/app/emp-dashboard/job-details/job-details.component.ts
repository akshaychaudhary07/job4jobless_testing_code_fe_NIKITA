import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VerticalSliderComponent } from '../vertical-slider/vertical-slider.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,VerticalSliderComponent,RouterLink,FormsModule,JobDetailsComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  jobPost = {
    number: '',
    jobTitle: '',
    companyName: '',
    location: '',
    experience: '',
    description: '',
    jobtype: '',

     // Add this line
  };

  isDisabled = true; // Fields and buttons are disabled by default

  constructor(private router: Router) {}

  // Enable fields and buttons on form click
  enableFields(): void {
    this.isDisabled = false;
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.jobPost);
      // Navigate to the next page or handle data here
    } else {
      console.log('Form is invalid');
    }
  }
  goToPrevPage(): void {
    this.router.navigate(['/previous-page']); // Replace with actual route
  }

  goToNextPage(): void {
    this.router.navigate(['/next-page']);
  }
}
