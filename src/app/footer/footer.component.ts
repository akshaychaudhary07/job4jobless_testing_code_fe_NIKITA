import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, AboutUsComponent,CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Fixed the typo here
})
export class FooterComponent implements OnInit {
  footerLinks: { label: string; link: string }[] = [];

  // Define the default footer links
  defaultFooterLinks = [
    { label: 'Home', link: '/home' },
    { label: 'About Us', link: '/about-us' },
    { label: 'Contact Us', link: '/contact-us' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Employer', link: '/employer' },
    { label: 'Company', link: '/company' },
    { label: 'Find Jobs', link: '/find-jobs' },
    { label: 'Feedback', link: '/feedback' },
    { label: 'Admin', link: '/admin-portal' },
  ];

  // Define alternative footer links (for specific pages)
  specialFooterLinks = [
    { label: 'Hiring-solution', link: '/hiring-solution' },
    { label: 'Dashboard', link: '/dashboard' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the initial footer links based on the current route
    this.updateFooterLinks(this.router.url);

    // Update footer links whenever navigation occurs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateFooterLinks(event.urlAfterRedirects);
    });
  }

  // Method to change the footer links dynamically
  private updateFooterLinks(url: string): void {
    if (url.includes('/employer') || url.includes('/hiring-solution')) {
      this.footerLinks = this.specialFooterLinks;
    } else {
      this.footerLinks = this.defaultFooterLinks;
    }
  }

  // Scroll to top functionality
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // WhatsApp redirection functionality
  sendWhatsAppMessage() {
    const phoneNumber = '9958360795';
    const message = 'Hello, I am new to Job4Jobless, tell me about all opportunities';
    const whatsappBaseUrl = 'https://api.whatsapp.com/send';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  }
}
