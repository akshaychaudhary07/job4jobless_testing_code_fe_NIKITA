import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateJobPostComponent } from '../create-job-post/create-job-post.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vertical-slider',
  standalone: true,
  imports: [CommonModule,CreateJobPostComponent,FormsModule,RouterLink],
  templateUrl: './vertical-slider.component.html',
  styleUrl: './vertical-slider.component.css'
})
export class VerticalSliderComponent {
  activeStep: number = 1;  // Default to first circle being active

  // Method to change active step
  setActive(step: number) {
    this.activeStep = step;
  }
}
