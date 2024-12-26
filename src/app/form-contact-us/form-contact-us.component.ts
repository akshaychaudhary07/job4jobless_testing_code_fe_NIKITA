import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-contact-us',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule,],
  templateUrl: './form-contact-us.component.html',
  styleUrl: './form-contact-us.component.css'
})
export class FormContactUsComponent {

  formData = {
    email: '',
    name: '',
    message: '',
  };

  onSubmit() {
    console.log('Form Submitted:', this.formData);
  }
}
