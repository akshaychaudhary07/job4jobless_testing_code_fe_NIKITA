import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resume-skills',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeBuilderComponent,ResumeSummaryComponent,
    ResumeEducationComponent,ResumeHeaderComponent,ResumeExperienceComponent,FormsModule,ReactiveFormsModule,],
  templateUrl: './resume-skills.component.html',
  styleUrl: './resume-skills.component.css'
})
export class ResumeSkillsComponent implements OnInit {
  formGroup!: FormGroup; // The '!' tells TypeScript that this variable will be initialized
  skillsContent: string = '';  // Add this property to hold the skills text

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // Method to apply text formatting in the textarea
  private initializeForm(): void {
    this.formGroup = this.fb.group({
      skills: new FormControl('', [Validators.required]) // Initialize form control for 'skills'
    });
  }

  content: string = '';

  applyFormatting(command: string, value?: string) {
    const selection = window.getSelection();
      const range = selection?.getRangeAt(0);
    const editor = document.querySelector('.editor-content') as HTMLElement;
    if (editor) {
      editor.focus(); // Ensure the editor is focused before applying the format
    
      if (command === 'foreColor' && selection && range) {
            const span = document.createElement('span');
            span.style.color = value || '';
            range.surroundContents(span); // Wrap selected text with a span having the chosen color
            selection.removeAllRanges();
            selection.addRange(range);
          } else {
            document.execCommand(command, false, value);
          }

    }
  
  
  }
  handleKeyDown(event: KeyboardEvent) {
    const editor = document.querySelector('.editor-content') as HTMLElement;
    const isUndoRedoCommand = event.ctrlKey && (event.key === 'z' || event.key === 'y');
    
    if (isUndoRedoCommand) {
      const command = event.key === 'z' ? 'undo' : 'redo';
      this.applyFormatting(command);
      event.preventDefault();
    }
  }

  
  updateFormControl(event: Event): void {
    const content = (event.target as HTMLElement).innerHTML;
    this.formGroup.get('skills')?.setValue(content.trim()); // Update the form control value
    this.formGroup.get('skills')?.markAsTouched(); // Mark it as touched
  }


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
    } else {
      // Mark all controls as touched to show errors
      this.formGroup.markAllAsTouched();
    }
  }
}



