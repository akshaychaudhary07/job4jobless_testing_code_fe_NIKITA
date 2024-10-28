import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AboutContentComponent } from './about-content/about-content.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,HeaderComponent,AboutContentComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent   {

}
