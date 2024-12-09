import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobSeekerChatComponent } from '../job-seeker-chat.component';
import { MessagesComponent } from '../messages/messages.component';
import { ShowMessagesComponent } from '../show-messages/show-messages.component';

@Component({
  selector: 'app-no-messages',
  standalone: true,
  imports: [CommonModule,RouterModule,JobSeekerChatComponent,MessagesComponent,ShowMessagesComponent],
  templateUrl: './no-messages.component.html',
  styleUrl: './no-messages.component.css'
})
export class NoMessagesComponent {

}
