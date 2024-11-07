import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css'],
  standalone: true, // This makes the component standalone
  imports: [CommonModule] // Add CommonModule here
})
export class CardCarouselComponent {
  allCards = [
    {
      title: 'Embracing Innovation ',
      description: 'We continuously seek new ways to enhance our services and leverage new technologies.',
      image: 'https://media.istockphoto.com/id/941329264/photo/termination-of-employment-on-an-office-desk.jpg?s=2048x2048&w=is&k=20&c=6GZNlJVj5rk4TMuEj6hTVhx97RJ4gqAggl0MnrYjj54='
    },
    {
      title: 'Commitment to Integrity',
      description: 'We continuously seek new ways to enhance our services and leverage new technologies.',
      image: 'https://media.istockphoto.com/id/941329264/photo/termination-of-employment-on-an-office-desk.jpg?s=2048x2048&w=is&k=20&c=6GZNlJVj5rk4TMuEj6hTVhx97RJ4gqAggl0MnrYjj54='
    },    {
      title: 'Prioritizing Customer Success',
      description: 'We continuously seek new ways to enhance our services and leverage new technologies.',
      image: 'https://media.istockphoto.com/id/941329264/photo/termination-of-employment-on-an-office-desk.jpg?s=2048x2048&w=is&k=20&c=6GZNlJVj5rk4TMuEj6hTVhx97RJ4gqAggl0MnrYjj54='
    },    {
      title: 'Embracing Innovation ',
      description: 'We continuously seek new ways to enhance our services and leverage new technologies.',
      image: 'https://media.istockphoto.com/id/941329264/photo/termination-of-employment-on-an-office-desk.jpg?s=2048x2048&w=is&k=20&c=6GZNlJVj5rk4TMuEj6hTVhx97RJ4gqAggl0MnrYjj54='
    },    {
      title: 'Commitment to Integrity',
      description: 'We continuously seek new ways to enhance our services and leverage new technologies.',
      image: 'https://media.istockphoto.com/id/941329264/photo/termination-of-employment-on-an-office-desk.jpg?s=2048x2048&w=is&k=20&c=6GZNlJVj5rk4TMuEj6hTVhx97RJ4gqAggl0MnrYjj54='
    }
    
  
    // Add more card objects as needed
  ];

  minPerSlide = 3;
  currentIndex = 0;
  autoSlideInterval: any;
  transitionDuration = '0.5s';

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000); // 10 seconds interval
  }

  clearAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.allCards.length;
  }

  getVisibleCards(startIndex: number) {
    let visibleCards = [];
    for (let i = 0; i < this.minPerSlide; i++) {
      const cardIndex = (startIndex + i) % this.allCards.length;
      visibleCards.push(this.allCards[cardIndex]);
    }
    return visibleCards;
  }
}





