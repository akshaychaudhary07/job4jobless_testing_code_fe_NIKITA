import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginPageComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  renderer: any;
  constructor(private zone: NgZone, renderer: Renderer2) {}
  ngAfterViewInit() {
    // Add any other after view initialization code here
  }
  openModal() {
    this.zone.run(() => {
      const modalElement = document.getElementById('loginModal');
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }
  isCollapsed: boolean = true; 

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed; 
  }
}
