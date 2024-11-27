import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FindJobsComponent } from '../../find-jobs.component';
import { AddDetailsComponent } from '../add-details.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-resume',
  standalone: true,
  imports: [CommonModule,FindJobsComponent,AddDetailsComponent,ReactiveFormsModule,FormsModule,],
  templateUrl: './add-resume.component.html',
  styleUrl: './add-resume.component.css'
})
export class AddResumeComponent {
  form: FormGroup;
  uploadedFileName: string = ''; // To display the uploaded file name
  showUploadError: boolean = false; // To show the error message
  isCreateResumeSelected: boolean = false;
  router: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
    });
  }
  @Output() continueClicked = new EventEmitter<void>();

  onContinue() {
    // Check if at least one option is selected
    if (this.uploadedFileName || this.isCreateResumeSelected) {
      console.log('Proceeding with:', {
        uploadedFileName: this.uploadedFileName,
        isCreateResumeSelected: this.isCreateResumeSelected,
      });
      this.showUploadError = false; // No error
      this.continueClicked.emit(); // Emit event for successful validation
    } else {
      this.showUploadError = true; // Trigger error message
    }
  }
    // Trigger file input click
    uploadResume() {
      const fileInput = document.getElementById('resumeFile') as HTMLInputElement;
      fileInput.click();
    }
  
    // Handle file selection
    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        this.uploadedFileName = input.files[0].name; // Display the file name
        this.showUploadError = false; // Hide the error message
      }
    }
  
    // Navigate to Create Resume Page or Show Modal
    createResume() {
      this.isCreateResumeSelected = true; // Mark "Create Resume" as selected
      this.showUploadError = false; // Reset error state
      this.router.navigate(['/create-resume']); // Replace with your actual route
      // OR Open a Modal:
      // this.openCreateResumeModal();
    }

}
