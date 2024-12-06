import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyPageComponent } from './company-page/company-page.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule,RouterModule,CompanyPageComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

}
