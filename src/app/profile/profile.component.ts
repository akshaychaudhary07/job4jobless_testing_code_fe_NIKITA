import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbstractControl, FormsModule, NgModel, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  sidebarItems = [
    { title: 'Account', icon: 'fa-solid fa-user' },
    { title: 'Password', icon: 'fa-solid fa-key' },
    { title: 'Your Data', icon: 'fa-solid fa-database' },
    { title: 'Delete Account', icon: 'fa-solid fa-trash' },
    { title: 'Logout', icon: 'fa-solid fa-sign-out-alt' },
  ];

  // selectedItem = 'Account';

  selectItem(title: string) {
    this.selectedItem = title;
  }
  // Track the selected item
  selectedItem: string = this.sidebarItems[0].title; // Set default to "Account"

// -------data for password----
employee = {
  email: '',
  newPassword: '',
  currentPassword: '',
  verifyPassword: ''
};
passwordsMismatch = false; // For new and verify password mismatch
passwordsConflict = false; // For current and new password conflict

// Validate Passwords
validatePasswords(): void {
  this.passwordsMismatch =
    !!this.employee.newPassword &&
    !!this.employee.verifyPassword &&
    this.employee.newPassword !== this.employee.verifyPassword;

  this.passwordsConflict =
    !!this.employee.currentPassword &&
    !!this.employee.newPassword &&
    this.employee.currentPassword === this.employee.newPassword;
}

// Handle form submission
onSubmit(form: any): void {
  if (form.valid && !this.passwordsMismatch && !this.passwordsConflict) {
    console.log('Form submitted successfully:', this.employee);
    alert('Password updated successfully!');
  } else {
    alert('Please fix the errors before submitting.');
  }
}



// ----------------data for Your Data-----------------
isEditing = false;

tableData = {
  firstName: 'John',
  lastName: 'Doe',
  company: 'Xyz Company',
  email: 'xyz.zxy98@gmail.com',
  phone: '+91 9926325692',
  country: 'India',
  state: 'Delhi',
  city: 'Delhi',
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};

enableEditing() {
  this.isEditing = true;
}

saveChanges() {
  this.isEditing = false;
  console.log('Updated Data:', this.tableData);
}

// ------------Deleted Account------------
isDeleting = false;
isDeleted = false;
showDeleteConfirmationCard = false; // Flag to control visibility of second card
confirmText = ''; // User input for confirmation

// Show the second card for deletion confirmation
showDeleteConfirmation() {
  this.showDeleteConfirmationCard = true;
}

// Simulate account deletion
deleteAccount() {
  if (this.confirmText === 'Delete') {
    this.isDeleting = true;

    // Simulate an API call to delete the account
    setTimeout(() => {
      this.isDeleted = true;
      this.isDeleting = false;
      this.confirmText = ''; // Clear the input field
    }, 2000); // Simulate a delay (2 seconds)
  }
}
}
