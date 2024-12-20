import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';

@Component({
  selector: 'app-enquiry-details',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,],
  templateUrl: './enquiry-details.component.html',
  styleUrl: './enquiry-details.component.css'
})
export class EnquiryDetailsComponent {
    tableData = [
      {
        HelpType: 'Account Verification',
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        Company: 'Microsoft',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Billing',
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        Company: 'Apple',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Account Verification',
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        Company: 'Microsoft',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Billing',
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        Company: 'Apple',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Account Verification',
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        Company: 'Microsoft',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Billing',
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        Company: 'Apple',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Account Verification',
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        Company: 'Microsoft',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Billing',
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        Company: 'Tech Mahindra',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Account Verification',
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        Company: 'Oracle',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Billing',
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        Company: 'Alphabet',
        Phone: '9953624578',
        isExpanded: false,
      },
      {
        HelpType: 'Account Verification',
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        Company: 'Microsoft',
        Phone: '9953624578',
        isExpanded: false,
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

 
  }

