import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BottomBannerComponent } from '../../employer/bottom-banner/bottom-banner.component';

@Component({
  selector: 'app-mid-section',
  standalone: true,
  imports: [CommonModule,MidSectionComponent,BottomBannerComponent ],
  templateUrl: './mid-section.component.html',
  styleUrl: './mid-section.component.css'
})
export class MidSectionComponent {

}
