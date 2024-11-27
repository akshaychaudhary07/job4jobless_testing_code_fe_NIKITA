import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FindJobsComponent } from '../find-jobs.component';
import { LoginJobsComponent } from '../login-jobs/login-jobs.component';
import { AddDetailsComponent } from '../add-details/add-details.component';

@Component({
  selector: 'app-apply-jobs',
  standalone: true,
  imports: [CommonModule,FindJobsComponent,LoginJobsComponent,AddDetailsComponent],
  templateUrl: './apply-jobs.component.html',
  styleUrl: './apply-jobs.component.css'
})
export class ApplyJobsComponent {

}
