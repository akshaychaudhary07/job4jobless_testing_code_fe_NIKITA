import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MidSectionComponent } from '../mid-section/mid-section.component';

@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [CommonModule,TopBannerComponent,MidSectionComponent],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.css'
})
export class TopBannerComponent {

}
