import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule],
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

  selectedItem = 'Account';

  selectItem(title: string) {
    this.selectedItem = title;
  }
}
