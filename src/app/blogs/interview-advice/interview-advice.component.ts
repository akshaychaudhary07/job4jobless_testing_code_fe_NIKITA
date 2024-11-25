import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LearnSkillsComponent } from '../learn-skills/learn-skills.component';
import { CareerAdviceComponent } from '../career-advice/career-advice.component';
import { FeatureComponent } from '../../feature/feature.component';
import { BottomSecComponent } from '../bottom-sec/bottom-sec.component';

@Component({
  selector: 'app-interview-advice',
  standalone: true,
  imports: [CommonModule,LearnSkillsComponent,CareerAdviceComponent,FeatureComponent,BottomSecComponent],
  templateUrl: './interview-advice.component.html',
  styleUrl: './interview-advice.component.css'
})
export class InterviewAdviceComponent {
  heading: string = 'Interview Advice'; // Dynamic heading
  viewAllText: string = 'View All'; // Text for View All
  showAll: boolean = false; // To track whether all cards are shown

  // Full list of cards
  cards = [
    {
      image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
      title: 'How to Manage Time Effectively to Maintain Work-Life Balance',
      description:
        'In today’s fast-paced work environment, we often lose track of maintaining our...',
    },
    {
      image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
      title: 'Building Resilience in a Competitive Job Market',
      description:
        'Understanding how to handle setbacks can empower professionals in their...',
    },
    {
      image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
      title: 'Top Skills to Master in 2024 for Career Growth',
      description:
        'Technology evolves rapidly. Staying updated with essential skills is the key...',
    },
    {
      image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
      title: 'Networking Strategies to Boost Your Career',
      description:
        'Networking is an essential skill for career growth. Learn how to network effectively...',
    },
    {
      image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
      title: 'The Importance of Continuous Learning in the Workplace',
      description:
        'To stay relevant, continuous learning is a must. Embrace the culture of upskilling...',
    },
    {
      image: 'https://github.com/job4jobless/Images/blob/main/Temperory/Blogs.png?raw=true',
      title: 'Mastering Job Interviews: Tips for Success',
      description:
        'Ace your next job interview with these proven tips and strategies...',
    },
  ];

  // Initially display only the first 3 cards
  visibleCards = this.cards.slice(0, 3);

  // Toggle between showing all cards and the initial 3
  toggleViewAll(): void {
    this.showAll = !this.showAll;
    this.visibleCards = this.showAll ? this.cards : this.cards.slice(0, 3);
  }
}
