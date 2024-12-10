import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { ResumeExperienceComponent } from './resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from './resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from './resume-summary/resume-summary.component';
import { ResumeEducationComponent } from './resume-education/resume-education.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeHeaderComponent,ResumeEducationComponent,ResumeExperienceComponent,ResumeSkillsComponent
    ,ResumeSummaryComponent,FormsModule,],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css'
})
export class ResumeBuilderComponent {
  navItems = [
    { label: 'Find Jobs', link: '/find-jobs' },
    { label: 'Company Reviews', link: '/company-reviews' },
    { label: 'Saved Jobs', link: '/saved-jobs' },
    { label: 'Resume Builder', link: '/resume-builder' },
    { label: 'Notifications', link: '/notification' },
    { label: 'Messages', link: '/job-seeker-chat' },
  ]; // 6 labels for these routes
  activeStep: number = 1; // First step is active by default

    // Define headings for each step
    stepHeadings = [
      { title: 'Design Your Perfect Resume Header', subtitle: 'Add Your Full Name and Contact Details for Employers to Connect with You' },
      { title: 'Let’s build your experience Profile', subtitle: 'Highlight Your Key Roles and Achievements' },
      { title: 'Let’s highlight your education', subtitle: 'Share details about any colleges, vocational programs, or training you’ve completed' },
      { title: 'Time to display your expertise.', subtitle: 'Showcase your professional assurance to land your next job' },
      { title: 'Let’s create your professional summary', subtitle: 'Showcase Your Expertise with a Compelling Summary' },
    ];

      // Get current step's heading and subtitle
  get currentHeading() {
    return this.stepHeadings[this.activeStep - 1]?.title;
  }

  get currentSubtitle() {
    return this.stepHeadings[this.activeStep - 1]?.subtitle;
  }

  // Method to set the active step when a dot is clicked
  activateStep(step: number): void {
    this.activeStep = step;
  }
  isMobileView = false;
  constructor() {
    this.checkMobileView(); // Check on initial load
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
  }

  // Check if the screen width is 768px or smaller
  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }
}
