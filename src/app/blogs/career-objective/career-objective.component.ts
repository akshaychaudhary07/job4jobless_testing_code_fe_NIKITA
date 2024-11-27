import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogsComponent } from '../blogs.component';
import { RelatedBlogComponent } from '../related-blog/related-blog.component';

@Component({
  selector: 'app-career-objective',
  standalone: true,
  imports: [CommonModule,BlogsComponent,RelatedBlogComponent],
  templateUrl: './career-objective.component.html',
  styleUrl: './career-objective.component.css'
})
export class CareerObjectiveComponent {
  heading: string = 'Releted Blog'; // Dynamic heading
}
