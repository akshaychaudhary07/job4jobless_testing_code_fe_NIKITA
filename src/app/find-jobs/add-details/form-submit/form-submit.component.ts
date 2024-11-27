import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FindJobsComponent } from '../../find-jobs.component';
import { AddDetailsComponent } from '../add-details.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { AddResumeComponent } from '../add-resume/add-resume.component';
import { ReviewApplicationComponent } from '../review-application/review-application.component';
import { Router } from '@angular/router';
import { FindCardComponent } from '../../find-card/find-card.component';

@Component({
  selector: 'app-form-submit',
  standalone: true,
  imports: [CommonModule,FindJobsComponent,AddDetailsComponent,AddContactComponent,AddResumeComponent,ReviewApplicationComponent,FindCardComponent],
  templateUrl: './form-submit.component.html',
  styleUrl: './form-submit.component.css'
})
export class FormSubmitComponent {
  constructor(private router: Router) {}

  // Navigate back to job search
  backToJobSearch(): void {
    this.router.navigate(['/find-jobs']); // Replace '/job-search' with the appropriate route
  }
}
