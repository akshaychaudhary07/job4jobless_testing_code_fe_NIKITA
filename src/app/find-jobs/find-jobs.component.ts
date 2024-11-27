import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { ContentboxComponent } from '../contentbox/contentbox.component';
import { ApplyJobsComponent } from './apply-jobs/apply-jobs.component';
import { LoginJobsComponent } from './login-jobs/login-jobs.component';
import { Router } from '@angular/router';
import { FindCardComponent } from './find-card/find-card.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AddContactComponent } from './add-details/add-contact/add-contact.component';
import { AddResumeComponent } from './add-details/add-resume/add-resume.component';
import { ReviewApplicationComponent } from './add-details/review-application/review-application.component';
import { FormSubmitComponent } from './add-details/form-submit/form-submit.component';

export interface Card {
  heading: string;
  experience: string;
  company: string;
  salary: string;
  location: string;
  description: string;
  buttonText: string;
  datePosted: string;
}

@Component({
  selector: 'app-find-jobs',
  standalone: true,
  imports: [CommonModule, HammerModule, ContentboxComponent,ApplyJobsComponent,LoginJobsComponent,FindCardComponent,AddDetailsComponent,AddContactComponent
    ,AddResumeComponent,ReviewApplicationComponent,FormSubmitComponent
  ],
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.css']
})
export class FindJobsComponent {
  heading: string = 'Career Advice';

  // Full list of cards
  cards = Array.from({ length: 30 }, (_, i) => ({
    heading: `Account Executive ${i + 1}`,
    experience: '2-4 Years',
    company: 'Company A',
    salary: '₹40,000 - ₹60,000',
    location: 'Delhi',
    description: `This is a full-time on-site role for a Senior Account Executive.
The Senior Account Executive is responsible for managing and
retaining existing clients, developing new business opport......`,
    buttonText: 'Apply Now',
    datePosted: '2024-11-01'
  }));

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login-jobs']);
  }
  // Initially display only the first 5 cards
  visibleCards = this.cards.slice(0, 5);
  filteredCards: Card[] = this.cards;

  itemsPerPage = 5;
  currentPage = 1;
  totalPages = 10; // Fixed to 10 pages for consistent filters

  changePage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleCards = this.filteredCards.slice(startIndex, endIndex);
  }

  goToFirstPage(): void {
    this.changePage(1);
  }

  goToLastPage(): void {
    this.changePage(this.totalPages);
  }

  sortCards(filterBy: string) {
    const currentDate = new Date();
    let filtered = this.cards;

    switch (filterBy) {
      case '1month':
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(currentDate.getMonth() - 1);
        filtered = this.cards.filter(card => new Date(card.datePosted) >= oneMonthAgo);
        break;
      case '3days':
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(currentDate.getDate() - 3);
        filtered = this.cards.filter(card => new Date(card.datePosted) >= threeDaysAgo);
        break;
      case 'today':
        const today = new Date();
        filtered = this.cards.filter(card => new Date(card.datePosted).toDateString() === today.toDateString());
        break;
      default:
        filtered = [...this.cards];
    }

    // Update the filtered cards and reset pagination
    this.filteredCards = filtered;
    this.currentPage = 1; // Reset to first page
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleCards = this.filteredCards.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.filteredCards.length / this.itemsPerPage);
  }

  // Always show page numbers from 1 to 10 (or the total pages if fewer than 10)
  get pageNumbers(): number[] {
    // Always show pages 1 to 10, but limit to available total pages
    const total = Math.min(10, this.totalPages);
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  get dynamicHeading(): string {
    const jobCount = this.filteredCards.length;
    return `${jobCount}+ Jobs found based on your search`;
  }
}
