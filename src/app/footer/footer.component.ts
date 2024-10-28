import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, AboutUsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top when navigation ends
      }
    });
  }

  sendWhatsAppMessage() {
    // Replace '123456789' with the recipient's phone number
    const phoneNumber = '9958360795';

    // Replace 'Hello, how can I help you?' with your desired message


    const message = 'Hello, i am new to job4jobless,tell me about all opportunities';

    // Construct the WhatsApp API URL

    const whatsappBaseUrl = 'https://api.whatsapp.com/send';


    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  }
  scrollToTop(): void {
    window.scrollTo(0, 0); // Scroll to top manually
  }

}
