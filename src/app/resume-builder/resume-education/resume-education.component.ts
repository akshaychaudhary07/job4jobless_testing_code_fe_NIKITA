import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';

@Component({
  selector: 'app-resume-education',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeBuilderComponent,ResumeHeaderComponent,ResumeExperienceComponent,ResumeSkillsComponent,ResumeSummaryComponent,],
  templateUrl: './resume-education.component.html',
  styleUrl: './resume-education.component.css'
})
export class ResumeEducationComponent {

}
