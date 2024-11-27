import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogsComponent } from '../blogs.component';

@Component({
  selector: 'app-related-blog',
  standalone: true,
  imports: [CommonModule,BlogsComponent],
  templateUrl: './related-blog.component.html',
  styleUrl: './related-blog.component.css'
})
export class RelatedBlogComponent {
  heading1: string = 'Latest blogs'; // Dynamic heading
  heading: string = 'Related blogs'; // Dynamic heading
    // Full list of cards
    cards = [
      {
        image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
        title: 'How to Manage Time Effectively to Maintain Work-Life Balance',
        description:
          'In today’s fast-paced work environment, we often lose track of maintaining our...',
      },
      {
        image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
        title: 'Building Resilience in a Competitive Job Market',
        description:
          'Understanding how to handle setbacks can empower professionals in their...',
      },
      {
        image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
        title: 'Top Skills to Master in 2024 for Career Growth',
        description:
          'Technology evolves rapidly. Staying updated with essential skills is the key...',
      },
      
  
    ];
  // ---------shows only in mobile view----------
   // Dynamic Image Source and Alt Text
   imageSrc: string = 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true'; // Replace with your image URL
   imageAlt: string = 'Teacher Resume Image'; // Alt text for accessibility
 
   // Dynamic Heading and Paragraph Text
 
 
 
 
 
     imageSrc1 = 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true';
 imageAlt1 = 'Alt text for image 1';
 title1 = 'Career Objective for Teacher Resume';
 paragraph1 = 'In the education industry, the role of a teacher goes beyond instructing.A teacher\'s profession is more than teaching students; it is also about guiding, mentoring, and making a difference in their lives. A good teacher inspires and empowers students to reach their full potential.';
 
 imageSrc2 = 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true';
 imageAlt2 = 'Alt text for image 2';
 title2 = 'Title for Slide 2';
 paragraph2 = 'Description for Slide 2';
 
 imageSrc3 = 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true';
 imageAlt3 = 'Alt text for image 3';
 title3 = 'Title for Slide 3';
 paragraph3 = 'Description for Slide 3';
}
