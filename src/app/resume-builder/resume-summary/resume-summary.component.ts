import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';

@Component({
  selector: 'app-resume-summary',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeBuilderComponent,ResumeHeaderComponent,ResumeExperienceComponent,ResumeEducationComponent,ResumeSkillsComponent,],
  templateUrl: './resume-summary.component.html',
  styleUrl: './resume-summary.component.css'
})
export class ResumeSummaryComponent {

}
