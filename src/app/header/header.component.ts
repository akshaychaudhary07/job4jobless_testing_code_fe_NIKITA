import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

import { NgModule } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginPageComponent,RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {


  
  @Input() navItems: { label: string; link: string; isDropdown?: boolean; dropdownItems?: { label: string, link: string }[] }[] = [];
  @Input() buttonText: string = 'Start Job Hunting'; // default text
    @Input() buttonLink: string = ''
    @Input() showNotificationIcon: boolean = true; // Accept the input
    notifications = [
      { id: 1, status: 'unread' },
      { id: 2, status: 'unread' },
      { id: 3, status: 'read' },
      { id: 4, status: 'read' },
    ];
    unreadCount: number = 0;
    ngOnInit(): void {
      // Count unread notifications
      this.unreadCount = this.notifications.filter(
        (notification) => notification.status === 'unread'
      ).length;
    }
  
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  renderer: any;
  constructor(private zone: NgZone, renderer: Renderer2, private router: Router) {}
  ngAfterViewInit() {
    // Add any other after view initialization code here
  }
    // Navigate to the notification page when the notification icon is clicked
    navigateToNotifications(): void {
      this.router.navigate(['/notification']); // Navigate to the notification page
    }
  openModal() {
    this.zone.run(() => {
      const modalElement = document.getElementById('loginModal');
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }
  isCollapsed: boolean = true; 

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed; 
  }
  
}
