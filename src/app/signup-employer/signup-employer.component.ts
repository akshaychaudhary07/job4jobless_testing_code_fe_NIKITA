import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { LoginComponent } from '../login-page/login/login.component';
import { LoginPageComponent } from '../login-page/login-page.component';


@Component({
  selector: 'app-signup-employer',
  standalone: true,
  imports: [CommonModule,LoginComponent,LoginPageComponent],
  templateUrl: './signup-employer.component.html',
  styleUrl: './signup-employer.component.css'
})
export class SignupEmployerComponent   {

 
}
