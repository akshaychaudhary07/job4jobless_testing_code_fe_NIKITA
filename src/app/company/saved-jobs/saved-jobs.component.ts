import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompanyComponent } from '../company.component';
import { Card } from '../../find-jobs/find-jobs.component';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [CommonModule,RouterLink,CompanyComponent,],
  templateUrl: './saved-jobs.component.html',
  styleUrl: './saved-jobs.component.css'
})
export class SavedJobsComponent {
  heading: string = 'Career Advice';

  // Full list of cards
  cards = Array.from({ length: 30 }, (_, i) => ({
    heading: `Account Executive ${i + 1}`,
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

  navigateToLogin() {
    this.router.navigate(['/login-jobs']);
  }
  // Initially display only the first 5 cards
  visibleCards = this.cards.slice(0, 6);
  filteredCards: Card[] = this.cards;

  itemsPerPage = 6;
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

}
