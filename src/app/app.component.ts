import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { VisibilityService } from './visibility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ContentboxComponent,
    SearchboxComponent,
    FeatureComponent,
    AboutUsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit {
  title = 'jobproject';
  showExtraComponents: boolean = true;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if we are on the about-us page
        this.showExtraComponents = !event.urlAfterRedirects.includes('/about-us');
      }
    });
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Add or remove class based on route
        if (event.url === '/login-page') {
          this.renderer.addClass(document.body, 'login-page');
        } else {
          this.renderer.removeClass(document.body, 'login-page');
        }
      });
  }
  }
  


