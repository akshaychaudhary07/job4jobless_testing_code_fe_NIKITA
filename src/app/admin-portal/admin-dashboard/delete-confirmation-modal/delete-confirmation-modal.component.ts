import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { AdminPortalComponent } from '../../admin-portal.component';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { SubAdminDetailsComponent } from '../sub-admin-details/sub-admin-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-confirmation-modal',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,FormsModule,AdminPortalComponent,AdminDashboardComponent,SubAdminDetailsComponent,],
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrl: './delete-confirmation-modal.component.css'
})
export class DeleteConfirmationModalComponent {
  @Input() itemName: string = ''; // Name of the item to delete
  @Output() onDelete = new EventEmitter<void>(); // Event for confirming delete
  @Output() onCancel = new EventEmitter<void>(); // Event for canceling delete
  @Input() showDeleteConfirmation: boolean = false; // Input from parent
  
  @Input() itemToDelete: any;
  @Output() onConfirm = new EventEmitter<void>();

  confirmDelete() {
    this.onConfirm.emit();
  }

  cancelDelete() {
    this.onCancel.emit();
  }
}
