import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UnaryOperator } from '@angular/compiler';

@Component({
  selector: 'app-resume-experience',
  standalone: true,
  imports: [CommonModule, RouterModule, ResumeHeaderComponent, ResumeSkillsComponent, ResumeSummaryComponent, ResumeEducationComponent,
    ResumeBuilderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.css']
})

export class ResumeExperienceComponent {
  form: FormGroup;
  // showAddButton: boolean = true; // Initial visibility of the "Add" button

  constructor(private fb: FormBuilder) {
    // Initialize the form with controls and form array
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      employer: ['', Validators.required],
      startDate: [''],
      endDate: [''],
      jobDescription: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      assignedToRole: [false], // Checkbox control for current role assignment
      customFields: this.fb.array([]) // Initialize the customFields FormArray
    });
  }

  // Getter for custom fields FormArray
  get customFields(): FormArray {
    return this.form.get('customFields') as FormArray;
  }

  // Add a new custom field
  addCustomField(): void {
    const fieldGroup = this.fb.group({
      fieldName: ['', Validators.required], // Field Name control
      fieldValue: ['', Validators.required], // Field Value control
    });

    this.customFields.push(fieldGroup); // Add the new FormGroup to the FormArray
    this.updateFieldNames(); // Ensure correct naming after addition
    this.showAddButton = this.customFields.length > 1 ? false : true; // Toggle "Add More Fields" button visibility
    console.log('Added field:', fieldGroup);
      // Mark the form as dirty so it recognizes changes
  this.form.markAsDirty(); 
  }

  removeCustomField(index: number): void {
    this.customFields.removeAt(index);
    this.showAddButton = true;
  }
  showAddButton: boolean = true; // Initialize the state to show the button
  duplicateCustomField(index: number): void {
    const field = this.customFields.at(index).value;
     // Toggle the visibility of the "Add" button
    this.showAddButton = !this.showAddButton;
    
  }

  // Ensure the custom fields have correct names after any change
  private updateFieldNames(): void {
    this.customFields.controls.forEach((control, index) => {
      control.get('fieldName')?.setValue(`customField_${index}`); // Update fieldName control with the new index
    });
  }

  @Output() prevClicked = new EventEmitter<void>(); // New output event for previous page navigation


  onPrev(): void {
    console.log('Previous button clicked');
    this.prevClicked.emit();
  }
  @Output() continueClicked = new EventEmitter<void>();

  onContinue(): void {
    if (this.form.valid) {
      // Perform actions (e.g., save data or send to API)
      console.log('Form submitted:', this.form.value);
  
      // Navigate to the next page
        // Emit the event when the Continue button is clicked
        this.continueClicked.emit();
    } else {
      // Mark all controls as touched to show errors
      this.form.markAllAsTouched();
    }
  }

}