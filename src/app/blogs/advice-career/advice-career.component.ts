import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogsComponent } from '../blogs.component';


@Component({
  selector: 'app-advice-career',
  standalone: true,
  imports: [CommonModule,BlogsComponent,],
  templateUrl: './advice-career.component.html',
  styleUrl: './advice-career.component.css'
})
export class AdviceCareerComponent {
  heading: string = 'Career Advice'; // Dynamic heading
      // Full list of cards
  cards = Array.from({ length: 30 }, (_, i) => ({
    image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
    title: `How to Manage Time Effectively to Maintain Work-Life Balance ${i + 1}`,
    description: `In today’s fast-paced work environment, we often lose track of maintaining our...`,
    fullDescription: `In today’s fast-paced work environment, we often lose track of maintaining our mental and physical well-being. It is important to prioritize self-care for a balanced work-life.',
       ${i + 1}.`,
    isExpanded: false,
  }));
  
    // Initially display only the first 3 cards
    visibleCards = this.cards.slice(0, 9);
                                                             
// Pagination
itemsPerPage = 3; // Number of cards per page
currentPage = 1; // Current page
totalPages = Math.ceil(this.cards.length / this.itemsPerPage); // Total number of page


  // Method to update visible cards when a page is selected
  changePage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleCards = this.cards.slice(startIndex, endIndex);
  }

  // Navigate to the first page
  goToFirstPage(): void {
    this.changePage(1);
  }

  // Navigate to the last page
  goToLastPage(): void {
    this.changePage(this.totalPages);
  }




// Toggle Read More/Read Less
toggleDescription(card: any): void {
  card.isExpanded = !card.isExpanded;
}
}

