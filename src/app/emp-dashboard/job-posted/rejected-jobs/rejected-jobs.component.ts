import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobPostedComponent } from '../job-posted.component';
import { ApprovedJobsComponent } from '../approved-jobs/approved-jobs.component';

@Component({
  selector: 'app-rejected-jobs',
  standalone: true,
  imports: [CommonModule,JobPostedComponent,ApprovedJobsComponent],
  templateUrl: './rejected-jobs.component.html',
  styleUrl: './rejected-jobs.component.css'
})
export class RejectedJobsComponent {

}
