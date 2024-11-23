import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerticalSliderComponent } from '../vertical-slider/vertical-slider.component';

@Component({
  selector: 'app-create-job-post',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,VerticalSliderComponent],
  templateUrl: './create-job-post.component.html',
  styleUrls: ['./create-job-post.component.css']
})
export class CreateJobPostComponent {
  jobPost = {
    email: '',
    jobTitle: '',
    companyName: ''
  };

  isDisabled = true; // Fields and buttons are disabled by default

  constructor(private router: Router) {}

  // Enable fields and buttons on form click
  enableFields(): void {
    this.isDisabled = false;
  }

  onSubmit(): void {
    console.log('Form Submitted', this.jobPost);
  }

  goToPrevPage(): void {
    this.router.navigate(['/previous-page']); // Replace with actual route
  }

  goToNextPage(): void {
    if (this.jobPost.email && this.jobPost.jobTitle && this.jobPost.companyName) {
      this.router.navigate(['/next-page']); // Replace with actual route
    }
  }
}
