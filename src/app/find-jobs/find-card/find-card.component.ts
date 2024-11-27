import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FindJobsComponent } from '../find-jobs.component';
import { ApplyJobsComponent } from '../apply-jobs/apply-jobs.component';
import { LoginJobsComponent } from '../login-jobs/login-jobs.component';
import { AddDetailsComponent } from '../add-details/add-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-card',
  standalone: true,
  imports: [CommonModule,FindJobsComponent,ApplyJobsComponent,LoginJobsComponent,AddDetailsComponent],
  templateUrl: './find-card.component.html',
  styleUrl: './find-card.component.css'
})
export class FindCardComponent {
  constructor(private router: Router) {}
  navigateToAddDetails() {
    this.router.navigate(['/add-details']);
  }
  heading: string = 'Similar Jobs'; // Dynamic heading
  viewAllText: string = 'View All'; // Text for View All
  showAll: boolean = false; // To track whether all cards are shown

  // Full list of cards
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
  // Initially display only the first 3 cards
  visibleCards = this.cards.slice(0, 3);

  // Toggle between showing all cards and the initial 3
  toggleViewAll(): void {
    this.showAll = !this.showAll;
    this.visibleCards = this.showAll ? this.cards : this.cards.slice(0, 3);
  }
}
