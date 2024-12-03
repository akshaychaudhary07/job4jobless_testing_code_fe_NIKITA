import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule,ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  stars: boolean[] = [false, false, false, false, false]; // 5 stars

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required, Validators.minLength(10)]],
      consent: [false],
    });
  }

  // Toggle star rating
  toggleStar(index: number): void {
    this.stars[index] = !this.stars[index]; // Toggle the selected star
  }

  // Submit form data
  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const feedbackData = {
        ...this.feedbackForm.value,
        rating: this.stars.filter((star) => star).length, // Calculate rating
      };
      console.log('Feedback submitted:', feedbackData);
      alert('Thank you for your feedback!');
    }
  }


}
