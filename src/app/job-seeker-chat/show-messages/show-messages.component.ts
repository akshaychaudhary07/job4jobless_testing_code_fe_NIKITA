import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoMessagesComponent } from '../no-messages/no-messages.component';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-show-messages',
  standalone: true,
  imports: [CommonModule,RouterModule,NoMessagesComponent,MessagesComponent,],
  templateUrl: './show-messages.component.html',
  styleUrl: './show-messages.component.css'
})
export class ShowMessagesComponent {

}
