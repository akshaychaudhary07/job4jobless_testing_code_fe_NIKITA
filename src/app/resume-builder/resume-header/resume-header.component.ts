import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-resume-header',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeBuilderComponent,ResumeExperienceComponent,
    ResumeSkillsComponent,ResumeSummaryComponent,ResumeEducationComponent,FormsModule,ReactiveFormsModule,],
  templateUrl: './resume-header.component.html',
  styleUrl: './resume-header.component.css'
})
export class ResumeHeaderComponent {
  resumeForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.resumeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Mobile number pattern
      jobTitle: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]], // Email validation
      address: ['', [Validators.required]],
    });
  }
  
  directImage: string | null = null; // URL of the selected direct image
  uploadedImageName: string | null = null; // Name of the uploaded image
  uploadedImage: string | null = null; // Base64 string of the uploaded image

  @ViewChild('directFileInput') directFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('libraryFileInput') libraryFileInput!: ElementRef<HTMLInputElement>;

  openFileInput(type: string): void {
    if (type === 'direct') {
      this.directFileInput.nativeElement.click();
    } else if (type === 'library') {
      this.libraryFileInput.nativeElement.click();
    }
  }
  onFileSelected(event: any, type: 'direct' | 'library'): void {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            if (type === 'direct') {
                this.directImage = URL.createObjectURL(file);
                this.uploadedImageName = file.name; // Show the selected file name
            } else if (type === 'library') {
                this.uploadedImageName = file.name; // Show the selected file name
                this.uploadedImage = e.target.result; // Store the file data URL for later use
            }
        };
        reader.readAsDataURL(file);
    }
}

onUploadAgain(type: 'direct' | 'library'): void {
    if (type === 'direct') {
        this.directImage = null; // Clear the image URL
        this.uploadedImageName = 'No file chosen'; // Reset the file name display
    } else if (type === 'library') {
        this.uploadedImage = null; // Clear the image data URL
        this.uploadedImageName = 'No file chosen'; // Reset the file name display
    }
}

uploadPhoto(): void {
    if (!this.uploadedImage) {
        return; // Do nothing if no image is selected
    }
    // Your logic to handle the uploaded image
    console.log('Uploading image:', this.uploadedImage);
    this.directImage = this.uploadedImage;
    // Add your logic to upload the image or process it as required
}

// Save data and navigate to the next page
saveDataAndNavigate(): void {
  if (this.resumeForm.valid) {
    console.log('Form Data:', this.resumeForm.value);
    this.router.navigate(['/next-page']);
  } else {
    console.log('Form is invalid');
  }
}


// this.router.navigate(['/next-page']); // Navigate to the next page

}




