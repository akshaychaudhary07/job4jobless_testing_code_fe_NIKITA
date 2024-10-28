import { Component } from '@angular/core';
import { CardCarouselComponent } from '../card-carousel/card-carousel.component';

@Component({
  selector: 'app-about-content',
  standalone: true,
  imports: [CardCarouselComponent],
  templateUrl: './about-content.component.html',
  styleUrl: './about-content.component.css'
})
export class AboutContentComponent {

}
