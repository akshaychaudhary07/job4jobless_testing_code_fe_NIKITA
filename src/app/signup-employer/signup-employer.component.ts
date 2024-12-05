import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { LoginComponent } from '../login-page/login/login.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup-employer',
  standalone: true,
  imports: [CommonModule,LoginComponent,LoginPageComponent,FormsModule,RouterModule],
  templateUrl: './signup-employer.component.html',
  styleUrl: './signup-employer.component.css'
})
export class SignupEmployerComponent {
  email: string = '';
  otp: string = '';
  number: string = '';
  showOtpCard: boolean = false;  // Show OTP for email card
  showPhoneCard: boolean = false;  // Show OTP for phone card
  showMobileOtpVerified = false;  // Controls visibility of the card shown after mobile OTP verification
  showOtherDetails: boolean = false;
  showLastDetails = false;
  generatedOtp: string = '';
  generatedMobileOtp: string = '';  // OTP for mobile verification
  otpInputs: string[] = ['', '', '', '', '', ''];  // Array for storing OTP inputs
  otpArray: number[] = [0, 1, 2, 3, 4, 5];  // Array for generating input fields

  // Function to send OTP to the user's email
  sendEmailOtp() {
    if (this.email) {
      // Validate email format
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailPattern.test(this.email)) {
        this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();  // Generate OTP
        console.log('Generated Email OTP:', this.generatedOtp); // For testing
        alert(`An OTP has been sent to ${this.email}`);  // Replace with email sending service
        this.showOtpCard = true;  // Show OTP card for email
      } else {
        alert('Please enter a valid email address');
      }
    } else {
      alert('Please enter an email address');
    }
  }

  // Function to verify the OTP for email
  verifyEmailOtp() {
    const enteredOtp = this.otpInputs.join('');
    if (enteredOtp === this.generatedOtp) {
      alert('Email OTP verified successfully!');
      this.showOtpCard = false;  // Hide OTP card for email
      this.showPhoneCard = true;  // Show phone number input card
    } else {
      alert('Incorrect Email OTP, please try again.');
    }
  }

  // Function to send OTP to the user's phone number
  sendMobileOtp() {
    if (this.number) {
      const phonePattern = /^[0-9]{10,15}$/;
      if (phonePattern.test(this.number)) {
        this.generatedMobileOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate OTP

        console.log('Generated Mobile OTP:', this.generatedMobileOtp); // For testing
        alert(`An OTP has been sent to ${this.number}`); // Replace with SMS gateway API call

        this.showPhoneCard = false; // Hide phone card
        this.showMobileOtpVerified = true; // Show mobile OTP verification card
      } else {
        alert('Please enter a valid phone number');
      }
    } else {
      alert('Please enter a phone number');
    }
  }
  

  // Function to verify the OTP for mobile
  verifyMobileOtp() {
    const enteredOtp = this.otpInputs.join('');
    if (enteredOtp === this.generatedMobileOtp) {
      alert('Mobile OTP verified successfully!');
      this.showMobileOtpVerified = false; // Hide OTP card after verification
      this.showPhoneCard = true; // Show phone number input card
      this.showOtherDetails = true;
      // Proceed to the next step
    } else {
      alert('Incorrect Mobile OTP. Please try again.');
    }
  }
  

  // Function to move focus to the next OTP input field
  focusNextBox(index: number, event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue && index < this.otpInputs.length - 1) {
      const nextInput = document.querySelectorAll<HTMLInputElement>('.otp-box')[index + 1];
      nextInput?.focus();
    } else if (!inputValue && index > 0 && event.key === 'Backspace') {
      const prevInput = document.querySelectorAll<HTMLInputElement>('.otp-box')[index - 1];
      prevInput?.focus();
    }
  }
  

  // Function to handle OTP request and show OTP card
  onSubmitPhone(phoneForm: any) {
    if (phoneForm.valid) {
      this.sendMobileOtp(); // Send OTP only if the phone number is valid
    } else {
      alert('Please enter a valid phone number to proceed.');
    }
  }
// -----------------Other Details Card-----------------------
  // Form Fields
  firstName: string = '';
  lastName: string = '';
  country: string = '';
  state: string = '';
  city: string = '';
  companyName: string = '';
  designation: string = '';

  // Dropdown options
  countries: string[] = ['India', 'USA', 'Canada', 'UK'];
  states: string[] = ['Maharashtra', 'California', 'Ontario', 'London'];
  cities: string[] = ['Mumbai', 'Los Angeles', 'Toronto', 'Manchester'];

    // Continue Button Handler
    continueBtn() {
      if (
        this.firstName &&
        this.lastName &&
        this.country &&
        this.state &&
        this.city &&
        this.companyName &&
        this.designation
      ) {
        alert('Proceeding to the next step.');
        this.showOtherDetails = false;
        this.showLastDetails = true;
        // Logic to show the next card
      } else {
        alert('Please fill all fields to continue.');
      }
    }
// ----------------- Last Other Details Card-----------------------
showLastDetailsCard() {
  this.showOtherDetails = false;
  this.showLastDetails = true;
}

skipToPrevious() {
  this.showLastDetails = false;
  this.showOtherDetails = true;
}

constructor(private router: Router) {}
navigateToEmployerPage() {
  this.router.navigate(['/find-jobs']);
}



}

