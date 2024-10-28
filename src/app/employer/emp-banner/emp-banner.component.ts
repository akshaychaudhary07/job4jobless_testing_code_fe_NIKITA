import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmpBodyFirstComponent } from '../emp-body-first/emp-body-first.component';

@Component({
  selector: 'app-emp-banner',
  standalone: true,
  imports: [CommonModule,EmpBodyFirstComponent],
  templateUrl: './emp-banner.component.html',
  styleUrl: './emp-banner.component.css'
})
export class EmpBannerComponent {

}
