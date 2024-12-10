import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';
import { ResumeBuilderComponent } from '../resume-builder.component';

@Component({
  selector: 'app-resume-experience',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeHeaderComponent,ResumeSkillsComponent,ResumeSummaryComponent,ResumeEducationComponent,ResumeBuilderComponent,],
  templateUrl: './resume-experience.component.html',
  styleUrl: './resume-experience.component.css'
})
export class ResumeExperienceComponent {

}
