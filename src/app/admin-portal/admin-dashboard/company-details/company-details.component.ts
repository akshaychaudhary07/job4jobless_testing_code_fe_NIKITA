import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { JobFinderProfileComponent } from '../job-finder-profile/job-finder-profile.component';
import { FormsModule } from '@angular/forms';
import { JobProvidedComponent } from '../job-provided/job-provided.component';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,JobFinderProfileComponent,FormsModule,JobProvidedComponent,],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  tableData = [
    {
      Name: 'Manish Sharma',
      Company: 'Xyz Company',
      Email: 'manishsharma97@gmail.com',
      Phone: '+91-9926485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: ['Deactivate','Activate'],
      isExpanded: false,
    },
    {
      Name: 'Deepak Kumar',
      Company: 'Xyz Company',
      Email: 'deepakkumar034@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Manish Sharma',
      Company: 'Xyz Company',
      Email: 'manishsharma97@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Deepak Kumar',
      Company: 'Xyz Company',
      Email: 'deepakkumar034@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Manish Sharma',
      Company: 'Xyz Company',
      Email: 'manishsharma97@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Deepak Kumar',
      Company: 'Xyz Company',
      Email: 'deepakkumar034@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Manish Sharma',
      Company: 'Xyz Company',
      Email: 'manishsharma97@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Deepak Kumar',
      Company: 'Xyz Company',
      Email: 'deepakkumar034@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Manish Sharma',
      Company: 'Xyz Company',
      Email: 'manishsharma97@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Deepak Kumar',
      Company: 'Xyz Company',
      Email: 'deepakkumar034@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
      isExpanded: false,
    },
    {
      Name: 'Manish Sharma',
      Company: 'Xyz Company',
      Email: 'manishsharma97@gmail.com',
      Phone: '+91-8326485631',
      Description:'Lorem Ipsum',
      Notification: 'Send Notification',
      Actions: 'Activate',
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
  @Output() changeComponent = new EventEmitter<string>();

  // Emit event to show SendNotificationComponent
  openSendNotification() {
    this.changeComponent.emit('SendNotification');
  }

}
