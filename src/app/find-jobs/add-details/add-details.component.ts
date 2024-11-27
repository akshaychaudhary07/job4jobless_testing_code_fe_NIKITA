import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FindCardComponent } from '../find-card/find-card.component';
import { LoginJobsComponent } from '../login-jobs/login-jobs.component';
import { ApplyJobsComponent } from '../apply-jobs/apply-jobs.component';
import { Router } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';


@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FindCardComponent,LoginJobsComponent,ApplyJobsComponent,AddContactComponent,AddResumeComponent,
    ReviewApplicationComponent, FormSubmitComponent
  ],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.css'
})
export class AddDetailsComponent {
  activeStep: number = 1; // First step is active by default

  // Method to set the active step when a dot is clicked
  activateStep(step: number): void {
    this.activeStep = step;
  }
    // Navigate to the next step
    nextPage(): void {
      if (this.activeStep < 3) {
        this.activeStep++; // Increment to the next step
      }
    }
  isMobileView = false;
  constructor() {
    this.checkMobileView(); // Check on initial load
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
  }

  // Check if the screen width is 768px or smaller
  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }

}
