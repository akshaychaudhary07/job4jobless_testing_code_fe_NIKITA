import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignupEmployerComponent } from '../../signup-employer/signup-employer.component';
import { Route, Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { JobSeekerSignupComponent } from '../../job-seeker-signup/job-seeker-signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,LoginComponent,SignupEmployerComponent,RouterLink,FormsModule,JobSeekerSignupComponent] ,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isPasswordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is not valid');
    }
  }
  constructor(private router: Router) {}
    accountCreated(){
      this.router.navigate(['/job-seeker-signup']);
    }
 
  }

