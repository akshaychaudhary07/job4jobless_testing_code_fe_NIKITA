import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { BlogBannerComponent } from './blog-banner/blog-banner.component';

@Component({
  selector: 'app-post-blog',
  standalone: true,
  imports: [CommonModule,HeaderComponent,BlogsComponent,BlogBannerComponent],
  templateUrl: './post-blog.component.html',
  styleUrl: './post-blog.component.css'
})
export class PostBlogComponent {

}
