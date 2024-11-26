import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogsHeaderComponent } from '../blogs-header/blogs-header.component';

@Component({
  selector: 'app-blog-banner',
  standalone: true,
  imports: [CommonModule,BlogsHeaderComponent],
  templateUrl: './blog-banner.component.html',
  styleUrl: './blog-banner.component.css'
})
export class BlogBannerComponent {

}
