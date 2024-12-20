import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { NgModel } from '@angular/forms';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-sub-admin-details',
  standalone: true,
  imports: [CommonModule,RouterLink,AdminPortalComponent,AdminDashboardComponent,EditAccountComponent,DeleteConfirmationModalComponent,],
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
    showEditAccount = false;

  selectedItem: any = null;
  editMode: boolean = false; // Tracks whether the edit component should be displayed

  deleteItem: any = null; // Holds the item to be deleted
  // showDeleteConfirmation: boolean = false;

  itemToDelete: any = null; // Item being prepared for deletion
  showDeleteConfirmation: boolean = false;
  prepareDelete(item: any) {
    this.itemToDelete = item;
    this.showDeleteConfirmation = true;
  }

  confirmDelete() {
    if (this.itemToDelete) {
      this.tableData = this.tableData.filter(row => row !== this.itemToDelete);
      this.cancelDelete();
    }
  }

  cancelDelete() {
    this.itemToDelete = null;
    this.showDeleteConfirmation = false;
  }




  
  showEditComponent(item: any) {
    this.editMode = true;
    this.selectedItem = item; // Pass the selected item to the EditAccountComponent
  }

  closeEditComponent() {
    this.editMode = false;
    this.selectedItem = null; // Reset the selected item
  }
  editAccount(item: any) {
    this.selectedItem = item;
    this.showEditAccount = true;
    this.showDeleteConfirmation = false;
  }

  deleteRow(item: any) {
    this.tableData = this.tableData.filter((row) => row !== item);
    this.cancelProcess();
  }

  cancelProcess() {
    this.showEditAccount = false;
    this.showDeleteConfirmation = false;
    this.selectedItem = null;
  }


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

