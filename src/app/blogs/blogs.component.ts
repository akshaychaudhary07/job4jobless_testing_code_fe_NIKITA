import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogBannerComponent } from './blog-banner/blog-banner.component';
import { BlogsHeaderComponent } from './blogs-header/blogs-header.component';
import { BlogSliderComponent } from './blog-slider/blog-slider.component';
import { CareerAdviceComponent } from './career-advice/career-advice.component';
import { LearnSkillsComponent } from './learn-skills/learn-skills.component';
import { InterviewAdviceComponent } from './interview-advice/interview-advice.component';
import { BottomSecComponent } from './bottom-sec/bottom-sec.component';
import { AdviceCareerComponent } from './advice-career/advice-career.component';
import { CareerObjectiveComponent } from './career-objective/career-objective.component';
import { RelatedBlogComponent } from './related-blog/related-blog.component';



@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,HeaderComponent,BlogBannerComponent,BlogsHeaderComponent,BlogSliderComponent,CareerAdviceComponent,LearnSkillsComponent,InterviewAdviceComponent
    ,BottomSecComponent,AdviceCareerComponent,CareerObjectiveComponent,RelatedBlogComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  content = {
    title: 'How to Manage Time Effectively to Maintain Work-Life Balance',
    description: 'In today’s fast-paced work environment, we often lose track of maintaining our personal lives...'
  };





}
