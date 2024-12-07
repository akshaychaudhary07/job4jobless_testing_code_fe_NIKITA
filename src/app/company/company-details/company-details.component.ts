import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompanyPageComponent } from '../company-page/company-page.component';
import { CompanyComponent } from '../company.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule,CompanyPageComponent,CompanyComponent,RouterModule,],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {

  companies = [
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.5, reviews: 7345, jobs: 3, status: 'Following', founded: '2001', businessSize: '1,001 to 5,000', industry: 'Automotive', website: 'https://www.volkswagen.com' },
    { name: 'HP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdf5gr7aXXDi54ys87m_dK1RZftVkn4mubw&s', rating: 3.8, reviews: 6200, jobs: 2, status: 'Follow', founded: '1939', businessSize: '200,001+', industry: 'Technology', website: 'https://www.hp.com' },
    { name: 'Target', logo: 'https://banner2.cleanpng.com/20180331/abw/aviuj5j4m.webp', rating: 4.2, reviews: 5800, jobs: 4, status: 'Following', founded: '1902', businessSize: '400,001+', industry: 'Retail', website: 'https://www.target.com' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png', rating: 4.9, reviews: 8900, jobs: 6, status: 'Following', founded: '1916', businessSize: '100,001 to 500,000', industry: 'Automotive', website: 'https://www.bmw.com' },
    { name: 'KB Construction', logo: 'https://banner2.cleanpng.com/20180406/yqw/avggp90y7.webp', rating: 3.6, reviews: 3300, jobs: 1, status: 'Follow', founded: '1987', businessSize: '1,001 to 5,000', industry: 'Construction', website: 'https://www.kbconstruction.com' },
   
   
   
   
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.5, reviews: 7345, jobs: 3, status: 'Following', founded: '2001', businessSize: '1,001 to 5,000', industry: 'Automotive', website: 'https://www.volkswagen.com' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.5, reviews: 7345, jobs: 3, status: 'Following', founded: '2001', businessSize: '1,001 to 5,000', industry: 'Automotive', website: 'https://www.volkswagen.com' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png', rating: 4.9, reviews: 8900, jobs: 6, status: 'Following', founded: '1916', businessSize: '100,001 to 500,000', industry: 'Automotive', website: 'https://www.bmw.com' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.3, reviews: 3400, jobs: 3, status: 'Following' },
    { name: 'HP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdf5gr7aXXDi54ys87m_dK1RZftVkn4mubw&s', rating: 3.8, reviews: 6200, jobs: 2, status: 'Follow', founded: '1939', businessSize: '200,001+', industry: 'Technology', website: 'https://www.hp.com' },
    { name: 'Target', logo: 'https://banner2.cleanpng.com/20180331/abw/aviuj5j4m.webp', rating: 4.2, reviews: 5800, jobs: 4, status: 'Following', founded: '1902', businessSize: '400,001+', industry: 'Retail', website: 'https://www.target.com' },
    { name: 'KB Construction', logo: 'https://banner2.cleanpng.com/20180406/yqw/avggp90y7.webp', rating: 3.6, reviews: 3300, jobs: 1, status: 'Follow', founded: '1987', businessSize: '1,001 to 5,000', industry: 'Construction', website: 'https://www.kbconstruction.com' },
    { name: 'Volkswagen', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkrL0osmFNtQJ78o-cvEcWhYUc1KYL1su0w&s', rating: 4.5, reviews: 7345, jobs: 3, status: 'Following', founded: '2001', businessSize: '1,001 to 5,000', industry: 'Automotive', website: 'https://www.volkswagen.com' },
    { name: 'KB Construction', logo: 'https://banner2.cleanpng.com/20180406/yqw/avggp90y7.webp', rating: 3.6, reviews: 3300, jobs: 1, status: 'Follow', founded: '1987', businessSize: '1,001 to 5,000', industry: 'Construction', website: 'https://www.kbconstruction.com' },
    { name: 'Target', logo: 'https://banner2.cleanpng.com/20180331/abw/aviuj5j4m.webp', rating: 4.2, reviews: 5800, jobs: 4, status: 'Following', founded: '1902', businessSize: '400,001+', industry: 'Retail', website: 'https://www.target.com' },
  ];

  selectedCompany: {
    name?: string;
    logo?: string;
    founded?: string;
    businessSize?: string;
    industry?: string;
    website?: string;
    status?: string;
  } = {};


  constructor(private route: ActivatedRoute, private router: Router) {}
  navigateToAddDetails() {
    this.router.navigate(['/add-details']);
  }
  ngOnInit(): void {
    const companyName = this.route.snapshot.paramMap.get('companyName');
    this.selectedCompany = this.companies.find(
      (company) => company.name === companyName
    ) || {
      founded: '2001',
      businessSize: '1,001 to 5,000',
      industry: 'Insurance',
      website: '#'
    };
  }
  toggleFollowStatus(): void {
    // Toggle the status between 'Follow' and 'Following'
    if (this.selectedCompany) {
      this.selectedCompany.status =
        this.selectedCompany.status === 'Following' ? 'Follow' : 'Following';
    }
  }
  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) stars.push('full');
      else if (rating > i) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }
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
    visibleCards = this.cards.slice(0, 6);
}
