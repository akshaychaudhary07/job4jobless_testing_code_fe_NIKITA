import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FindJobsComponent } from '../find-jobs.component';
import { ApplyJobsComponent } from '../apply-jobs/apply-jobs.component';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { FindCardComponent } from '../find-card/find-card.component';
import { AddDetailsComponent } from '../add-details/add-details.component';

@Component({
  selector: 'app-login-jobs',
  standalone: true,
  imports: [CommonModule,FindJobsComponent,ApplyJobsComponent,FindCardComponent,AddDetailsComponent],
  templateUrl: './login-jobs.component.html',
  styleUrl: './login-jobs.component.css'
})
export class LoginJobsComponent {
  heading: string = 'Career Advice';

  // Full list of cards
  cards = Array.from({ length: 30 }, (_, i) => ({
    heading: `Account Executive `,
    experience: '2-4 Years',
    company: 'Xyz Company',
    salary: '₹40,000 - ₹60,000',
    location: 'Delhi, India',
    description: `This is a full-time on-site role for a Senior Account Executive.
The Senior Account Executive is responsible for managing and
retaining existing clients, developing new business opport......`,
    buttonText: 'Apply Now',
    datePosted: '2024-11-01'
  }));
  constructor(private router: Router) {}
  navigateToAddDetails() {
    this.router.navigate(['/add-details']);
  }
    // Initially display only the first 5 cards
    visibleCards = this.cards.slice(0, 1);







    
}
