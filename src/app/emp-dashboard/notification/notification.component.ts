import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmpDashboardComponent } from '../emp-dashboard.component';
import { Router, RouterModule } from '@angular/router';
import { NoNotificationComponent } from './no-notification/no-notification.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule,EmpDashboardComponent,RouterModule,NoNotificationComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {

  notifications = [
    {
      id: 1,
      icon: 'fa-envelope', // Icon class
      status: 'unread', // status of the notification (unread or read)
      heading: "Haven’t heard back?",
      message: "You are more likely to hear back on your application if you follow up with a message. Xyz Company, Noida",
      time: 'now'
    },
    {
      id: 2,
      icon: 'fa-exclamation', // Icon class for read
      status: 'unread',
      heading: "Crucial Details Missing!",
      message: "Important details in your profile are missing. Update your profile now",
      time: '1 hour ago'
    },
    {
      id: 3,
      icon: 'fa-envelope', // Icon class
      status: 'read',
      heading: "Haven’t heard back?",
      message: "You are more likely to hear back on your application if you follow up with a message. Xyz Company, Delhi",
      time: '2 days ago'
    },
    {
      id: 4,
      icon: 'fa-envelope', // Icon class for read
      status: 'read',
      heading: "Haven’t heard back?",
      message: "You are more likely to hear back on your application if you follow up with a message. Xyz Company, Gurugram",
      time: '1 month ago'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  markAllRead(): void {
    this.notifications.forEach(notification => {
      notification.status = 'read'; // Mark all notifications as read
    });
  }
  markAsRead(notification: any) {
    if (notification.status === 'unread') {
      notification.status = 'read'; // Change the status to read
    }
  }

    // Navigate to the notification page when the notification icon is clicked
    navigateToNoNotifications(): void {
      this.router.navigate(['/no-notification']); // Navigate to the notification page
    }

}