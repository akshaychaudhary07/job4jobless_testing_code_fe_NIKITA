import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RejectedJobsComponent } from '../rejected-jobs/rejected-jobs.component';
import { PostJobComponent } from '../../post-job/post-job.component';

interface Job {
  title: string;
  company: string;
  jobId: string;
  location: string;
  experience: string;
  salary: string;
  date: string;  // String date (e.g., '2024-11-10')
}

@Component({
  selector: 'app-approved-jobs',
  standalone: true,  // Mark this component as standalone
  imports: [CommonModule, FormsModule,RouterLink,RejectedJobsComponent,PostJobComponent],  // Import necessary modules
  templateUrl: './approved-jobs.component.html',
  styleUrls: ['./approved-jobs.component.css'],
})
export class ApprovedJobsComponent implements OnInit {
  @Input() heading: string = 'Approved Jobs'; // Default value
  currentPage: number = 1; // Track current page
  itemsPerPage: number = 3; // Number of items per page
  totalPages: number = 0; // Total pages
  items: Job[] = [
    { title: 'Account Executive', company: 'Company xyz', jobId: '670e394592514', location: 'New York', experience: '2-5 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-11-10' },
    { title: 'Graphic Designer', company: 'Company xyz', jobId: '670e394592514', location: 'San Francisco', experience: '1-3 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-11-07' },
    { title: 'Account Manager', company: 'Company xyz', jobId: '670e394592514', location: 'Remote', experience: '3-5 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-10-15' },
    { title: 'UI/UX Designer', company: 'Company xyz', jobId: '670e394592514', location: 'New York', experience: '2-5 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-11-10' },
    { title: 'Web Developer', company: 'Company xyz', jobId: '670e394592514', location: 'San Francisco', experience: '1-3 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-11-07' },
    { title: 'Sales Manager', company: 'Company xyz', jobId: '670e394592514', location: 'Remote', experience: '3-5 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-10-15' },
    { title: 'Account Executive', company: 'Company xyz', jobId: '670e394592514', location: 'New York', experience: '2-5 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-11-10' },
    { title: 'Account Executive', company: 'Company xyz', jobId: '670e394592514', location: 'San Francisco', experience: '1-3 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-11-07' },
    { title: 'Product Manager', company: 'Company xyz', jobId: '670e394592514', location: 'Remote', experience: '3-5 years', salary: '₹15,000 - ₹60,000 a month', date: '2024-10-15' },
    // Add more items as needed
  ];

  filteredItems: Job[] = [];  // This will hold the filtered items
  selectedFilter: string = 'today';  // Default filter is set to 'today'
  router: any;


  ngOnInit() {
    // Ensure that the filter is applied on component initialization
    this.applyFilter();
  }

  applyFilter() {
    const today = new Date();
    const todayString = today.toDateString(); // Get today's date string without time
    let filtered = [...this.items]; // Copy of items to apply filters on
  
    // Apply filter based on the selected filter option
    if (this.selectedFilter === 'today') {
      // When 'today' is selected, show all cards without any filtering
      filtered = [...this.items]; // No filtering applied, showing all items
    } else if (this.selectedFilter === '3days') {
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(today.getDate() - 3);
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= threeDaysAgo;
      });
    } else if (this.selectedFilter === '1month') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(today.getMonth() - 1);
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= oneMonthAgo;
      });
    }
  
    // 'all' shows all items, so we don't need to filter
    this.filteredItems = filtered;
  }
  showLastCard: boolean = false; // Control the visibility of the last card

  toggleLastCard() {
    this.showLastCard = !this.showLastCard; // Toggle visibility
  }
  toggleEdit(item: any) {
    item.isEditing = !item.isEditing; // Toggle edit mode
  }
  goToPrevPage(): void {
    this.router.navigate(['/post-job']); // Replace with actual route
  }

  goToNextPage(): void {
    this.router.navigate(['/rejected-jobs']);
  }

    // State to toggle information
    showFullInfo: boolean = true;

     // Toggle the state
  toggleInfo(): void {
    this.showFullInfo = !this.showFullInfo;
  }
}
