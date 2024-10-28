import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { SearchboxComponent } from '../searchbox/searchbox.component';

@Component({
  selector: 'app-contentbox',
  standalone: true,
  imports: [FeatureComponent, SearchboxComponent ],
  templateUrl: './contentbox.component.html',
  styleUrl: './contentbox.component.css'
})
export class ContentboxComponent {

}
