import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginComponent } from '../login-page/login/login.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-seeker-signup',
  standalone: true,
  imports: [CommonModule,LoginComponent,LoginPageComponent,RouterModule,FormsModule],
  templateUrl: './job-seeker-signup.component.html',
  styleUrl: './job-seeker-signup.component.css'
})
export class JobSeekerSignupComponent implements OnInit, OnDestroy {
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
  countdown: number = 5; // Countdown start value
  countdownInterval: any;
  currentOtp: string = ''; // To store the generated or fetched OTP


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
    console.log('Entered OTP:', enteredOtp); // Debugging
    console.log('Generated OTP:', this.generatedOtp); // Debugging

    if (enteredOtp === this.generatedOtp) {
      alert('Email OTP verified successfully!');
      this.showOtpCard = false; // Hide OTP card for email
      this.showPhoneCard = true; // Show phone number input card
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
  resendMobileOtp() {
    if (this.countdown === 0) {
      // Generate and update the new OTP
      this.generatedMobileOtp = this.generateOtp();
      console.log('New Mobile OTP generated:', this.generatedMobileOtp); // Debugging

      // Alert user and reset the countdown
      alert('A new OTP has been sent to your mobile number.');
      this.startCountdown(); // Restart countdown timer

      // Clear the previous OTP inputs
      this.otpInputs = ['', '', '', '', '', ''];
    }
  }

  // Function to verify the OTP for mobile
  verifyMobileOtp() {
    const enteredOtp = this.otpInputs.join(''); // Combine the OTP inputs into a single string
    console.log('Entered Mobile OTP:', enteredOtp); // Debugging
    console.log('Generated Mobile OTP:', this.generatedMobileOtp); // Debugging

    // Check if the entered OTP matches the generated OTP
    if (enteredOtp === this.generatedMobileOtp) {
      alert('Mobile OTP verified successfully!');
      this.showMobileOtpVerified = false; // Hide OTP card after verification
      this.showPhoneCard = true; // Show phone number input card
      this.showOtherDetails = true;
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

constructor(private router: Router) {}
navigateToEmployerPage() {
  this.router.navigate(['/find-jobs']);
}

// ----------count-timer------------
ngOnInit() {
  this.startCountdown();
}
startCountdown() {
  this.countdown = 5; // Reset countdown
  this.countdownInterval = setInterval(() => {
    if (this.countdown > 0) {
      this.countdown--;
    } else {
      clearInterval(this.countdownInterval); // Stop countdown when it reaches 0
    }
  }, 2000);
}

  // Function to generate OTP
  generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
resendOtp() {
  if (this.countdown === 0) {
    // Generate a new OTP
    this.generatedOtp = this.generateOtp();
    console.log('New OTP generated:', this.generatedOtp); // Debugging
    alert('A new OTP has been sent to your email.');
    this.startCountdown(); // Restart the countdown timer
  }
}
ngOnDestroy() {
  // Clear interval on component destroy
  if (this.countdownInterval) {
    clearInterval(this.countdownInterval);
  }
}

}
