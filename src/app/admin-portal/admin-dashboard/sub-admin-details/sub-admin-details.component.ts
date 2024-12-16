import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sub-admin-details',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,],
  templateUrl: './sub-admin-details.component.html',
  styleUrl: './sub-admin-details.component.css'
})
export class SubAdminDetailsComponent {
    tableData = [
      {
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        AccountID: '001263',
        Status: 'Suspend',
        isExpanded: false,
      },
      {
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        AccountID: '001263',
        Status: 'Suspend',
        isExpanded: false,
      },
      {
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Deepak Kumar',
        Email: 'deepakkumar034@gmail.com',
        AccountID: '001263',
        Status: 'Active',
        isExpanded: false,
      },
      {
        Name: 'Manish Sharma',
        Email: 'manishsharma97@gmail.com',
        AccountID: '001263',
        Status: 'Active',
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

  item = { Status: 'Active' }; // or 'Suspend' for testing

  updateStatus(item: any, newStatus: string) {
    item.Status = newStatus;
  }

  }

