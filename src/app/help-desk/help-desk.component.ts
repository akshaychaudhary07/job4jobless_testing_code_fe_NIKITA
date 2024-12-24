import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { EmployerHelpDeskComponent } from './employer-help-desk/employer-help-desk.component';
import { JobseekerHelpDeskComponent } from './jobseeker-help-desk/jobseeker-help-desk.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-help-desk',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule,EmployerHelpDeskComponent,JobseekerHelpDeskComponent,FormsModule,],
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css'],
})
export class HelpDeskComponent {



  constructor(private router: Router) {} // Ensure this matches the usage

  navigateToJobSeekerHelp() {
    this.router.navigate(['/jobseeker-help-desk']); // Match the variable name
  }

  navigateToEmployerHelp() {
    this.router.navigate(['/help-desk-employer']);  // Match the variable name
  }

}
