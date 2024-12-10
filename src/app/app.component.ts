import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ContentboxComponent,
    AboutUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNotificationIcon: boolean = false; // Add this line
  showMessageIcon: boolean = false;
  isSpecialRoute = false;
  hideHeader = false; // Controls header visibility
  hideFooter = false; // Controls footer visibility

  navItems: { label: string; link: string; isDropdown?: boolean; dropdownItems?: { label: string, link: string }[] }[] = [];  

  defaultNavItems = [
    { label: 'Find Jobs', link: '/find-jobs' },
    { label: 'Services', link: '/services' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Employer', link: '/employer' },
  ];

  employerNavItems = [
    { label: 'Hiring-solution', link: '/hiring-solution' },
    { label: 'Dashboard', link: '/dashboard' },
  ];

  dashboardNavItems = [
    { label: 'Post Job', link: '/post-job' },
    { 
      label: 'Job Posted', 
      link: '/job-posted', 
      isDropdown: true, 
      dropdownItems: [
        { label: 'Approved Jobs', link: '/approved-jobs' },
        { label: 'Rejected Jobs', link: '/rejected-jobs' },
      ]
    },
    { label: 'Applied Users', link: '/applied-users' },
  ];

  buttonText: string = 'Start Job Hunting'; // Default button text
  buttonLink: string = '/login-page'; // Default URL
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Set initial navItems and visibility based on the current URL
    this.updateNavItemsBasedOnRoute(this.router.url);

    // Update navItems and header/footer visibility whenever navigation occurs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateNavItemsBasedOnRoute(event.urlAfterRedirects);
    });

    // Listen to route changes to update button text and link
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateButtonProperties(event.url);
      }
    });
  }
  private updateNavItemsBasedOnRoute(url: string) {
    if (url.includes('/login')) {
      this.hideHeader = true; // Hide header on login page
      this.hideFooter = true; // Hide footer on login page
      this.showNotificationIcon = false;
      this.showMessageIcon = false;
    } else if (
      url.includes('/company') || 
      url.includes('/resume-builder') ||
      url.includes('/job-seeker-chat')
    ) {
      // Update for profile and job-seeker-chat URLs
      this.isSpecialRoute = true;
      this.hideHeader = false;
      this.hideFooter = false;
      this.navItems = [
        { label: 'Find Jobs', link: '/find-jobs' },
        { label: 'Company Reviews', link: '/company-reviews' },
        { label: 'Saved Jobs', link: '/saved-jobs' },
        { label: 'Resume Builder', link: '/resume-builder' },
      ]; // Set specific labels
      this.showNotificationIcon = true; // Show notification icon
      this.showMessageIcon = true; // Show message icon
    } else if (
      url.includes('/dashboard') ||
      url.includes('/post-job') ||
      url.includes('/approved-jobs') ||
      url.includes('/rejected-jobs') ||
      url.includes('/applied-users') ||
      url.includes('/job-post-submitted') ||
      url.includes('/notification') ||
      url.includes('/profile') || 
      url.includes('/no-notification')
    ) {
      this.isSpecialRoute = true;
      this.hideHeader = false;
      this.hideFooter = false;
      this.navItems = this.dashboardNavItems; // Set the nav items for the dashboard
      this.showNotificationIcon = true;
      this.showMessageIcon = false;
    } else if (url.includes('/employer') || url.includes('/hiring-solution')) {
      this.isSpecialRoute = true;
      this.hideHeader = false;
      this.hideFooter = false;
      this.navItems = this.employerNavItems;
      this.showNotificationIcon = false;
      this.showMessageIcon = false;
    } else {
      this.isSpecialRoute = false;
      this.hideHeader = false;
      this.hideFooter = false;
      this.navItems = this.defaultNavItems;
      this.showNotificationIcon = false;
      this.showMessageIcon = false;
    }
    console.log('Current navItems:', this.navItems);
}

  
  

  

  // Update button text and link based on the current route
  private updateButtonProperties(url: string): void {
    if (url.includes('/employer')) {
      this.buttonText = 'Start Hiring';
      this.buttonLink = '/signup-page';
    } else if (url.includes('/dashboard')) {
      this.buttonText = 'Start Hiring';
      this.buttonLink = '/signup-page';
    } else if (url.includes('/hiring-solution')) {
      this.buttonText = 'Start Hiring';
      this.buttonLink = '/signup-page';
    } else {
      this.buttonText = 'Start Job Hunting'; // Default text
      this.buttonLink = '/login-page'; // Default link
    }
  }
}

