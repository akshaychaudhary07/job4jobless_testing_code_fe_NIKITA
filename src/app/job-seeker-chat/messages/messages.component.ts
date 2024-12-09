import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobSeekerChatComponent } from '../job-seeker-chat.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule,RouterModule,JobSeekerChatComponent,FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  chatList = [
    { id: 1, name: 'John Doe', message: 'Hey there!', photo: 'path/to/photo1.jpg', lastSeen: '12:30 PM', messages: [] as { type: string; text: string }[] , unreadCount: 0, },
    { id: 2, name: 'Jane Smith', message: 'Hello!', photo: 'path/to/photo2.jpg', lastSeen: 'Yesterday', messages: [] as { type: string; text: string }[], unreadCount: 3, },
    { id: 3, name: 'Bob Johnson', message: 'How are you?', photo: 'path/to/photo3.jpg', lastSeen: '12:00 PM', messages: [] as { type: string; text: string }[], unreadCount: 0, },
    { id: 4, name: 'Alice Brown', message: 'Let’s catch up soon.', photo: 'path/to/photo4.jpg', lastSeen: '11:45 AM', messages: [] as { type: string; text: string }[] , unreadCount: 2,}
    // Add more chat objects as needed
  ];
  activeChat: any = null;
  newMessage: string = '';

  constructor() {
    this.initializeMessages();
  }

  ngOnInit(): void {}

  selectChat(chat: any): void {
    this.activeChat = chat;
    chat.unreadCount = 0;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.activeChat.messages.push({ type: 'sent', text: this.newMessage });
      this.newMessage = '';
    }
  }
  private initializeMessages(): void {
    // Example of initializing with some random messages
    this.chatList.forEach(chat => {
      const messages = [
        { type: 'sent', text: 'Hey! How’s it going?' },
        { type: 'received', text: 'Not bad, just chilling. You?' },
        { type: 'sent', text: 'Same here, just relaxing. Any plans for the weekend?' },
        { type: 'received', text: 'Yeah, thinking of going hiking. What about you?' },
        { type: 'sent', text: 'That sounds fun! I’ll probably stay in and watch a movie.' },
      ];
      chat.messages = messages;
    });
  }
  filteredChatList = [...this.chatList];
  searchQuery: string = '';
  filterChatList() {
    this.filteredChatList = this.chatList.filter((chat) =>
      chat.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
