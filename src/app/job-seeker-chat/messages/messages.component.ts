import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobSeekerChatComponent } from '../job-seeker-chat.component';
import { NoMessagesComponent } from '../no-messages/no-messages.component';
import { ShowMessagesComponent } from '../show-messages/show-messages.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule,RouterModule,JobSeekerChatComponent,NoMessagesComponent,ShowMessagesComponent,FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  chatList = [
    { id: 1, name: 'John Doe', message: 'Hey there!', photo: 'path/to/photo1.jpg' },
    { id: 2, name: 'Jane Smith', message: 'Hello!', photo: 'path/to/photo2.jpg' },
    { id: 3, name: 'Bob Johnson', message: 'How are you?', photo: 'path/to/photo3.jpg' },
    { id: 4, name: 'Alice Brown', message: 'Let’s catch up soon.', photo: 'path/to/photo4.jpg' }
    // Add more chat objects as needed
  ];
  activeChat: any = null;

  constructor() {}

  ngOnInit(): void {}

  selectChat(chat: any): void {
    this.activeChat = chat;
  }
}
