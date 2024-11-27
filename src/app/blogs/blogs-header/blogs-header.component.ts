import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { BlogBannerComponent } from '../blog-banner/blog-banner.component';
import { RouterLink } from '@angular/router';
import { BlogSliderComponent } from '../blog-slider/blog-slider.component';

@Component({
  selector: 'app-blogs-header',
  standalone: true,
  imports: [CommonModule,BlogBannerComponent,RouterLink,BlogSliderComponent],
  templateUrl: './blogs-header.component.html',
  styleUrl: './blogs-header.component.css'
})
export class BlogsHeaderComponent {
  @Input() buttonText: string = 'Post Blog'; // default text
   routerLink="'/post-blog'"
    @Input() buttonLink: string = ''
    @ViewChild('navbarToggler') navbarToggler!: ElementRef;
    renderer: any;
    constructor(private zone: NgZone, renderer: Renderer2) {}
    ngAfterViewInit() {
      // Add any other after view initialization code here
    }
 
    isCollapsed: boolean = true; 
    // Navigation items
  navItems = [
    { label: 'Resume Tips', link: '/resume-tips', isDropdown: false },
    { label: 'Fresher Career Tips', link: '/fresher-career-tips', isDropdown: false },
    { label: 'Interviewing', link: '/interviewing', isDropdown: false },
    { label: 'Career Advice', link: '/career-advice', isDropdown: false },
  ];


  
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed; 
    }
}
