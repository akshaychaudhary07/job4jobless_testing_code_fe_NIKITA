import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationComponent } from '../notification.component';
import { EmpDashboardComponent } from '../../emp-dashboard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-no-notification',
  standalone: true,
  imports: [CommonModule,NotificationComponent,EmpDashboardComponent,RouterModule],
  templateUrl: './no-notification.component.html',
  styleUrl: './no-notification.component.css'
})
export class NoNotificationComponent {

}
