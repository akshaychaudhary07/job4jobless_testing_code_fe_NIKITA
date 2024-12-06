import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from '../company.component';

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [CommonModule,RouterModule,CompanyComponent],
  templateUrl: './company-page.component.html',
  styleUrl: './company-page.component.css'
})
export class CompanyPageComponent { 
  companies = [
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.5, reviews: 7345, jobs: 3, status: 'Following' },
    { name: 'HP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdf5gr7aXXDi54ys87m_dK1RZftVkn4mubw&s', rating: 3.8, reviews: 6200, jobs: 2, status: 'Follow' },
    { name: 'Target', logo: 'https://banner2.cleanpng.com/20180331/abw/aviuj5j4m.webp', rating: 4.2, reviews: 5800, jobs: 4, status: 'Following' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png', rating: 4.9, reviews: 8900, jobs: 6, status: 'Following' },
    { name: 'KB Construction', logo: 'https://banner2.cleanpng.com/20180406/yqw/avggp90y7.webp', rating: 3.6, reviews: 3300, jobs: 1, status: 'Follow' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.7, reviews: 1200, jobs: 3, status: 'Following' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.0, reviews: 700, jobs: 5, status: 'Following' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png', rating: 4.9, reviews: 8900, jobs: 6, status: 'Following' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.3, reviews: 3400, jobs: 3, status: 'Following' },
    { name: 'HP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdf5gr7aXXDi54ys87m_dK1RZftVkn4mubw&s', rating: 3.8, reviews: 6200, jobs: 2, status: 'Follow' },
    { name: 'Target', logo: 'https://banner2.cleanpng.com/20180331/abw/aviuj5j4m.webp', rating: 4.2, reviews: 5800, jobs: 4, status: 'Following' },
    { name: 'KB Construction', logo: 'https://banner2.cleanpng.com/20180406/yqw/avggp90y7.webp', rating: 3.6, reviews: 3300, jobs: 1, status: 'Follow' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.0, reviews: 700, jobs: 5, status: 'Following' },
    { name: 'KB Construction', logo: 'https://banner2.cleanpng.com/20180406/yqw/avggp90y7.webp', rating: 3.6, reviews: 3300, jobs: 1, status: 'Follow' },
    { name: 'Target', logo: 'https://banner2.cleanpng.com/20180331/abw/aviuj5j4m.webp', rating: 4.2, reviews: 5800, jobs: 4, status: 'Following' },
  ];

  currentPage = 0; // Initially on the first page
  pageSize = 9; // Display 3 companies at a time
  displayedCompanies = this.companies.slice(0, this.pageSize); // Display first 3 companies initially

  get totalPages() {
    return Math.ceil(this.companies.length / this.pageSize); // Total pages for pagination
  }

  nextPage() {
    console.log('Next Page clicked'); // Debugging
    this.currentPage = (this.currentPage + 1) % this.totalPages; // Loop to first page
    this.updateDisplayedCompanies();
  }

  prevPage() {
    console.log('Prev Page clicked'); // Debugging
    this.currentPage =
      (this.currentPage - 1 + this.totalPages) % this.totalPages; // Loop to last page
    this.updateDisplayedCompanies();
  }

  updateDisplayedCompanies() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.displayedCompanies = this.companies.slice(start, end);
    console.log('Displayed Companies:', this.displayedCompanies); // Debugging
  }

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push('full');
      else if (rating >= i - 0.5) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }
}
