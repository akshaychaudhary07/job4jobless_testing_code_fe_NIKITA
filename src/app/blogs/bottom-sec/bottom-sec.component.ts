import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InterviewAdviceComponent } from '../interview-advice/interview-advice.component';

@Component({
  selector: 'app-bottom-sec',
  standalone: true,
  imports: [CommonModule,InterviewAdviceComponent,],
  templateUrl: './bottom-sec.component.html',
  styleUrl: './bottom-sec.component.css'
})
export class BottomSecComponent {

}
