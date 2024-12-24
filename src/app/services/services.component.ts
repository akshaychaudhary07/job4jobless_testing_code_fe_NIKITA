import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  links = [
    {
      title: 'Defined Terms:',
     
    },
    {
      title: ' Commencement of Service',
     
    },
    {
      title: 'Subscription Fees',
      
    },
    {
      title: 'Payment',
      
    },
    {
      title: 'Cancellation',
      
    },
    {
      title: 'Obligations of User/Subscriber',
      
    },
    {
      title: 'Prohibited Actions',
      
    },
    {
      title: ' Confidentiality & Security',
      
    },
    {
      title: 'Maintenance',
      
    },
    {
      title: ' Termination',
      
    },
    {
      title: 'Liabilities upon Termination',
      
    },
    {
      title: 'Suspension of Service',
      
    },
    {
      title: 'Violation of Terms & Conditions',
      
    },
    {
      title: 'Disclaimer',
      
    },
    {
      title: 'Limitation of Liability',
      
    },
    {
      title: ' Use of Information/Data Supplied',
      
    },
    {
      title: ' Indemnity',
      
    },
    {
      title: '  Confidentiality',
      
    },
    {
      title: ' Variation',
      
    },
    {
      title: 'Discontinuation or Modification to Services',
      
    },
    {
      title: ' Notices',
      
    },
    {
      title: 'Non-exclusive Remedy',
      
    },
    {
      title: 'Waiver',
      
    },
    {
      title: 'Entire Agreement',
      
    },
    {
      title: 'Governing Law and Jurisdiction',
      
    },
    {
      title: 'Acknowledgment and Acceptance of Terms and Conditions',
      
    },
    {
      title: 'Privacy Policy',
      
    },
    {
      title: 'Mobile App',
      
    },
    {
      title: 'Recruitment Endorsement Reward Program',
      
    },
    {
      title: 'RESUMATHON Offer',
      
    },
    {
      title: ' Jobs Bonanza @Job4jobless (The Contest is made available to you by Job4jobless )',
      
    },
    // Add content for other links
    // ...
  ];

  activeIndex = 0; // Default active link
  activeContent = this.links[this.activeIndex]; // Default content

  showContent(index: number) {
    this.activeIndex = index;
    this.activeContent = this.links[index];
  }
}
