import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AddDetailsComponent } from '../add-details.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddResumeComponent } from '../add-resume/add-resume.component';
import { FindJobsComponent } from '../../find-jobs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule,AddDetailsComponent,AddContactComponent,AddResumeComponent,FindJobsComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
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

  // onContinue(): void {
 
  //   this.continueClicked.emit();
  // }
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





  // onSubmit(): void {
  //   if (this.form.valid) {
  //     alert('Form Submitted Successfully!');
  //     console.log(this.form.value);
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }