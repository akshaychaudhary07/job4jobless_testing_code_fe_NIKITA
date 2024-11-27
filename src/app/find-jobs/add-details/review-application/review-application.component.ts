import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FindJobsComponent } from '../../find-jobs.component';
import { AddDetailsComponent } from '../add-details.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { AddResumeComponent } from '../add-resume/add-resume.component';
import { FormsModule } from '@angular/forms';
import { FormSubmitComponent } from '../form-submit/form-submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-application',
  standalone: true,
  imports: [CommonModule,FindJobsComponent,AddDetailsComponent,AddContactComponent,AddResumeComponent,FormsModule,FormSubmitComponent],
  templateUrl: './review-application.component.html',
  styleUrl: './review-application.component.css'
})
export class ReviewApplicationComponent {
  constructor(private router: Router) { }
  @Output() continueClicked = new EventEmitter<void>();

  onContinue(): void {
    // Emit the event when the Continue button is clicked
    this.continueClicked.emit();
  }
   // Form data
   contactInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  resumeFile: string = 'No file selected';

  // Edit states
  editContact: boolean = false;
  editResume: boolean = false;

  // Email updates toggle
  emailUpdates: boolean = true;

  // Toggle edit mode
  toggleEdit(section: string): void {
    if (section === 'contact') {
      this.editContact = !this.editContact;
    } else if (section === 'resume') {
      this.editResume = !this.editResume;
    }
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.resumeFile = input.files[0].name;
    }
  }

  // Function to handle form submission
  submitForm(): void {
    console.log('Form submitted', {
      contactInfo: this.contactInfo,
      resumeFile: this.resumeFile,
      emailUpdates: this.emailUpdates,
    });

    // alert('Details submitted successfully!');
    
    // Navigate to the 'app-form-submit' page after form submission
    this.router.navigate(['/app-form-submit']);
  }

}
