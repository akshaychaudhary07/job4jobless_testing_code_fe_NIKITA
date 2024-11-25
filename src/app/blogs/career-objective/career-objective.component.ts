import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogsComponent } from '../blogs.component';

@Component({
  selector: 'app-career-objective',
  standalone: true,
  imports: [CommonModule,BlogsComponent],
  templateUrl: './career-objective.component.html',
  styleUrl: './career-objective.component.css'
})
export class CareerObjectiveComponent {

}
