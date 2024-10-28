import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BottomBannerComponent } from '../bottom-banner/bottom-banner.component';

@Component({
  selector: 'app-emp-body-second',
  standalone: true,
  imports: [CommonModule,BottomBannerComponent],
  templateUrl: './emp-body-second.component.html',
  styleUrl: './emp-body-second.component.css'
})
export class EmpBodySecondComponent {

}
