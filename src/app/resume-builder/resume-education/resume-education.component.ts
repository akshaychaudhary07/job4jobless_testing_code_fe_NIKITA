import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-education',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeBuilderComponent,ResumeHeaderComponent,ResumeExperienceComponent,ResumeSkillsComponent,
    ResumeSummaryComponent,ReactiveFormsModule,FormsModule,],
  templateUrl: './resume-education.component.html',
  styleUrl: './resume-education.component.css'
})
export class ResumeEducationComponent {

  formGroup: FormGroup;
    // showAddButton: boolean = true; // Initial visibility of the "Add" button
  
    constructor(private fb: FormBuilder) {
      // Initialize the form with controls and form array
      this.formGroup = this.fb.group({
        fieldsArray: this.fb.array([]),
        schoolCollege: ['', Validators.required],
        location: ['', Validators.required],
        startDate: [''],
        endDate: [''],
        degree: ['', Validators.required],
        fieldOfStudy: ['', Validators.required],
        degreeDropdown: ['', Validators.required],
        assignedToRole: [false], // Checkbox control for current role assignment
        customFields: this.fb.array([]) // Initialize the customFields FormArray
      });
      if (this.formGroup) {
        this.formGroup.get('assignedToRole')?.valueChanges.subscribe(value => {
          this.onAssignedToRoleChange(value);
        });
      
  }
    }
  
    // Getter for custom fields FormArray
    get customFields(): FormArray {
      return this.formGroup.get('customFields') as FormArray;
    }
  
    // Add a new custom field
    addCustomField(): void {
      const fieldGroup = this.fb.group({
        fieldName: ['', Validators.required], // Field Name control
        fieldValue: ['', Validators.required], // Field Value control
      });
  
      this.customFields.push(fieldGroup); // Add the new FormGroup to the FormArray
      this.formGroup.markAsDirty(); // Mark the form as dirty
      this.formGroup.updateValueAndValidity(); 

      this.showAddButton = this.customFields.length > 1 ? false : true; // Toggle "Add More Fields" button visibility
      console.log('Added field:', this.customFields.value);
        // Mark the form as dirty so it recognizes changes
        
    }
  
    removeCustomField(index: number): void {
      this.customFields.removeAt(index);
      this.formGroup.markAsDirty();
      this.formGroup.updateValueAndValidity();
      this.showAddButton = true;
    }
    showAddButton: boolean = true; // Initialize the state to show the button
    duplicateCustomField(index: number): void {
      const field = this.customFields.at(index).value;
       // Toggle the visibility of the "Add" button
      this.showAddButton = !this.showAddButton;
      
    }
  
    // Ensure the custom fields have correct names after any change
    // private updateFieldNames(): void {
    //   this.customFields.controls.forEach((control, index) => {
    //     control.get('fieldName')?.setValue(`customField_${index}`); // Update fieldName control with the new index
    //   });
    // }
  //   private updateFieldNames(): void {
  //     this.customFields.controls.forEach((control, index) => {
  //         control.patchValue({ fieldName: `customField_${index}` });
  //     });
  // }
  
    @Output() prevClicked = new EventEmitter<void>(); // New output event for previous page navigation
  
  
    onPrev(): void {
      console.log('Previous button clicked');
      this.prevClicked.emit();
    }
    @Output() continueClicked = new EventEmitter<void>();
  
    onContinue(): void {
      if (this.formGroup.valid) {
        // Perform actions (e.g., save data or send to API)
        console.log('Form submitted:', this.formGroup.value);
    
        // Navigate to the next page
          // Emit the event when the Continue button is clicked
          this.continueClicked.emit();
          

      }
      
      else {
        this.formGroup.markAllAsTouched(); // Highlight errors
        this.formGroup.updateValueAndValidity(); // Ensure form state is up-to-date
      }
      

    }
  


    onDegreeSelect(event: Event): void {
      const selectedValue = (event.target as HTMLSelectElement).value;
      this.formGroup.get('degree')?.setValue(selectedValue); // Sync selected value with 'degree' field
    }
    onAssignedToRoleChange(isChecked: boolean): void {
      const assignedToRoleControl = this.formGroup.get('assignedToRole');
      const endDateControl = this.formGroup.get('endDate');
  
      if (assignedToRoleControl && endDateControl) {
        if (isChecked) {
          const today = new Date().toISOString().split('T')[0];
          endDateControl.setValue(today);
        } else {
          endDateControl.reset();
        }
      }
    }
}
