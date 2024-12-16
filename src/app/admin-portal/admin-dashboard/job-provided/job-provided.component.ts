import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { JobFinderProfileComponent } from '../job-finder-profile/job-finder-profile.component';

@Component({
  selector: 'app-job-provided',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,CompanyDetailsComponent,JobFinderProfileComponent,],
  templateUrl: './job-provided.component.html',
  styleUrl: './job-provided.component.css'
})
export class JobProvidedComponent {
    tableData = [
      {
        employerName: 'Manish Sharma',
        employerEmail: 'manishsharma97@gmail.com',
        jobTitle:'Business Analyst',
        Company: 'Microsoft',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Deepak Kumar',
        employerEmail: 'deepakkumar034@gmail.com',
        jobTitle:'Quality Control',
        Company: 'Apple',
        Status: ['Disapprove'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Manish Sharma',
        employerEmail: 'manishsharma97@gmail.com',
        jobTitle:'Business Analyst',
        Company: 'Microsoft',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Deepak Kumar',
        employerEmail: 'deepakkumar034@gmail.com',
        jobTitle:'Quality Control',
        Company: 'Apple',
        Status: ['Approve',],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Manish Sharma',
        employerEmail: 'manishsharma97@gmail.com',
        jobTitle:'Business Analyst',
        Company: 'Microsoft',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Deepak Kumar',
        employerEmail: 'deepakkumar034@gmail.com',
        jobTitle:'Quality Control',
        Company: 'Apple',
        Status: ['Disapprove'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Manish Sharma',
        employerEmail: 'manishsharma97@gmail.com',
        jobTitle:'Business Analyst',
        Company: 'Microsoft',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Deepak Kumar',
        employerEmail: 'deepakkumar034@gmail.com',
        jobTitle:'Business Analyst',
        Company: 'Tech Mahindra',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Manish Sharma',
        employerEmail: 'manishsharma97@gmail.com',
        jobTitle:'SEO Developer',
        Company: 'Oracle',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Deepak Kumar',
        employerEmail: 'deepakkumar034@gmail.com',
        jobTitle:'SEO Developer',
        Company: 'Alphabet',
        Status: ['Disapprove'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      {
        employerName: 'Manish Sharma',
        employerEmail: 'manishsharma97@gmail.com',
        jobTitle:'Quality Control',
        Company: 'Microsoft',
        Status: ['Approve'],
        isExpanded: false,
        hidden: false, // Add property to control visibility
      },
      
    ];
  
    pageSize = 7; // Rows per page
    currentPage = 1;
    totalItems = this.pageSize; // Dynamically track total items being displayed
  
    get totalPages() {
      return Math.ceil(this.tableData.length / this.pageSize);
    }
  
    get displayedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.tableData.slice(startIndex, startIndex + this.pageSize);
    }
  
    updatePageData() {
      if (this.currentPage === 1) {
        this.pageSize = 7; // Show 7 items on the main page
        this.totalItems = 7;
      } else {
        this.pageSize = 4; // Show 4 items per page after the first page
        this.totalItems = this.pageSize;
      }
    }
  
    onNext() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updatePageData();
      }
    }
  
    onPrev() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updatePageData();
      }
    }
    currentOpenDropdown: number | null = null; // Track the currently open dropdown by its index
  
    toggleDropdown(index: number): void {
      // If the clicked dropdown is already open, close it
      if (this.currentOpenDropdown === index) {
        this.currentOpenDropdown = null;
      } else {
        // Otherwise, set the clicked dropdown as open
        this.currentOpenDropdown = index;
      }
    }
      // Hide a specific row
      hideRow(item: any): void {
        item.hidden = true;
      }
 
  }
