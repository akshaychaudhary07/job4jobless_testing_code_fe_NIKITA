import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VerticalSliderComponent } from '../vertical-slider/vertical-slider.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobPostSubmittedComponent } from '../job-post-submitted/job-post-submitted.component';

@Component({
  selector: 'app-review-job-post',
  standalone: true,
  imports: [CommonModule,VerticalSliderComponent,FormsModule,RouterLink,JobPostSubmittedComponent,RouterModule],
  templateUrl: './review-job-post.component.html',
  styleUrl: './review-job-post.component.css'
})
export class ReviewJobPostComponent {
  
 // Model to hold job post data
 jobPost = {
  jobTitle: 'Lorem Ipsum',
  companyName: 'Lorem Ipsum',
  numOfOpenings: 1,
  location: 'Lorem Ipsum',
  jobType: 'Lorem Ipsum',
  experienceRequired: 1,
  schedule: 'Lorem Ipsum',
  pay: 'Rs 15000 - 25000/-',
  description: 'Lorem Ipsum'
};
isDisabled = true; // Fields and buttons are disabled by default

constructor(private router: Router) {}
submitbtn(): void {
  // Perform any validation or logic if needed
  this.router.navigate(['/job-post-submitted']); // Adjust the route to your desired target
}
// Enable fields and buttons on form click
enableFields(): void {
  this.isDisabled = false;
}

submitForm(jobForm: NgForm) {
  if (jobForm.valid) {
    console.log('Form Data:', this.jobPost);
  } else {
    console.error('Form is invalid');
  }
}
goToPrevPage(): void {
  this.router.navigate(['/previous-page']); // Replace with actual route
}

goToSubmitPage(): void {
  if (this.jobPost.numOfOpenings && this.jobPost.jobTitle && this.jobPost.companyName) {
    this.router.navigate(['/next-page']); // Replace with actual route
  }
}
// Flag to toggle between view and edit mode
isEditable = false;

// Method to toggle the edit state
toggleEdit() {
  this.isEditable = !this.isEditable;
}
 
}
