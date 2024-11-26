import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogsHeaderComponent } from '../blogs-header/blogs-header.component';
import { CareerAdviceComponent } from '../career-advice/career-advice.component';

@Component({
  selector: 'app-blog-slider',
  standalone: true,
  imports: [CommonModule,BlogsHeaderComponent,CareerAdviceComponent,],
  templateUrl: './blog-slider.component.html',
  styleUrl: './blog-slider.component.css'
})
export class BlogSliderComponent {
  heading: string = 'Latest Blog'; // Dynamic heading
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

