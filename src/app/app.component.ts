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
    } else if (
      url.includes('/dashboard') ||
      url.includes('/post-job') ||
      url.includes('/approved-jobs') ||
      url.includes('/rejected-jobs') ||
      url.includes('/applied-users') || // Include applied-users in dashboard-specific logic
      url.includes('/job-post-submitted') ||
      url.includes('/notification') ||
      url.includes('/no-notification') ||
      url.includes('/profile') // Include /profile for same header as other routes
    ) {
      this.isSpecialRoute = true;
      this.hideHeader = false; // Show header on these routes
      this.hideFooter = url.includes('/profile') ? true : false; // Hide footer only on /profile
      this.navItems = this.dashboardNavItems; // Set the nav items for the dashboard
      this.showNotificationIcon = true; // Show notification icon
    } else if (url.includes('/employer') || url.includes('/hiring-solution')) {
      this.isSpecialRoute = true;
      this.hideHeader = false;
      this.hideFooter = false;
      this.navItems = this.employerNavItems; 
      this.showNotificationIcon = false; // Hide notification icon
    } else {
      this.isSpecialRoute = false;
      this.hideHeader = false;
      this.hideFooter = false;
      this.navItems = this.defaultNavItems;
      this.showNotificationIcon = false; // Hide notification icon
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

