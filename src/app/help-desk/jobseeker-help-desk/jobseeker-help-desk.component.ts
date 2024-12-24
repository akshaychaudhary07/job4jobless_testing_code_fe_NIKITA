import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HelpDeskComponent } from '../help-desk.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobseeker-help-desk',
  standalone: true,
  imports: [CommonModule,HelpDeskComponent,RouterLink,],
  templateUrl: './jobseeker-help-desk.component.html',
  styleUrl: './jobseeker-help-desk.component.css'
})
export class JobseekerHelpDeskComponent {
// Dynamic data for the cards
cardData = [
  {
    title: 'How to Change My Phone Number and Email Address',
    steps: [
      'Click on Profile in the top-right corner.',
      'From the dropdown menu, select Profile.',
      'Update your phone number and email address.',
      'Then click Update.'
    ]
  },
  {
    title: 'How to Deactivate My Account ',
    steps: [
      'Go to Profile in the top-right corner.',
      'Navigate to Profile Settings from the dropdown menu.',
      'Select Deactivate Account at the bottom of the options.',
      'Submit your valuable review',
      'Click the Delete Account button to confirm.'
    ]
  },
  {
    title: 'How to Update or Edit My Profile',
    steps: [
      'Click on Settings in the top-right corner.',
      'Choose Profile Settings from the dropdown menu.',
      'Select Profile and edit any information you wish to update.',
      'Then click Update.'
    ]
  },
  {
    title: 'How to Change My Password',
    steps: [
      'Click on Profile in the top-right corner.',
      'From the dropdown menu, select Profile Settings.',
      'Click on Password and create a strong new password.',
      'Then click Update.'
    ]
  },
  
];
lastCard = {
  title: 'How to Track My Application',
  steps: [
    'Go to Profile in the top-right corner.',
    'Select My Jobs from the dropdown menu.',
    'Track your applications and filter them by status (e.g., All Applications, Selected, Rejected, Reviewed, Waiting) using the options available.',
  ]
};

}
