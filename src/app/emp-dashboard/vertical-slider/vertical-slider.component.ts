import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ComponentRef, HostListener, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateJobPostComponent } from '../create-job-post/create-job-post.component';
import { ReviewJobPostComponent } from '../review-job-post/review-job-post.component';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { PostJobComponent } from '../post-job/post-job.component';



@Component({
  selector: 'app-vertical-slider',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,CreateJobPostComponent,ReviewJobPostComponent,JobDetailsComponent,PostJobComponent],
  templateUrl: './vertical-slider.component.html',
  styleUrl: './vertical-slider.component.css'
})
export class VerticalSliderComponent{
  activeStep: number = 1; // First step is active by default

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
