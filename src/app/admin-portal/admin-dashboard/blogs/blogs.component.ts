import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

    tableData = [
      {
        article: 'Career Objective',
        views: '2.9k',
        comments: '15',
        status: 'Published',
        statusIcon: 'fa fa-check-circle',
        statusColor: 'text-success',
        isExpanded: false,
      },
      {
        article:
          'How to Manage Time Effectively to Maintain Work Life Balance – 6 Best Ways',
        views: '0',
        comments: '0',
        status: 'Schedule',
        statusIcon: 'fa fa-calendar-check',
        statusColor: 'text-warning',
        isExpanded: false,
      },
      {
        article: 'Boost Your Job Application',
        views: '2.9k',
        comments: '15',
        status: 'Published',
        statusIcon: 'fa fa-check-circle',
        statusColor: 'text-success',
        isExpanded: false,
      },
      {
        article: 'Career Objective On Hold',
        views: '2.9k',
        comments: '15',
        status: 'On Hold',
        statusIcon: 'fa fa-exclamation-circle',
        statusColor: 'text-danger',
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
  


  }
