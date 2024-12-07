import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule,RouterModule,CompanyPageComponent,CompanyDetailsComponent,],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

}
