import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-job-seeker-chat',
  standalone: true,
  imports: [CommonModule,RouterModule,MessagesComponent,],
  templateUrl: './job-seeker-chat.component.html',
  styleUrl: './job-seeker-chat.component.css'
})
export class JobSeekerChatComponent {
  navItems = [
    { label: 'Find Jobs', link: '/find-jobs' },
    { label: 'Company Reviews', link: '/company-reviews' },
    { label: 'Saved Jobs', link: '/saved-jobs' },
    { label: 'Resume Builder', link: '/resume-builder' },
    { label: 'Notifications', link: '/notification' },
    { label: 'Messages', link: '/job-seeker-chat' },
  ]; // 6 labels for these routes
}
