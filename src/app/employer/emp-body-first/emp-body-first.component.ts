import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BottomBannerComponent } from '../bottom-banner/bottom-banner.component';

@Component({
  selector: 'app-emp-body-first',
  standalone: true,
  imports: [CommonModule,BottomBannerComponent],
  templateUrl: './emp-body-first.component.html',
  styleUrl: './emp-body-first.component.css'
})
export class EmpBodyFirstComponent {

}
