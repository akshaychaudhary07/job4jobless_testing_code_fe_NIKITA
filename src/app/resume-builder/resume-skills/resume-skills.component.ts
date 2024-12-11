import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { ResumeSummaryComponent } from '../resume-summary/resume-summary.component';
import { ResumeHeaderComponent } from '../resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-skills',
  standalone: true,
  imports: [CommonModule,RouterModule,ResumeBuilderComponent,ResumeSummaryComponent,
    ResumeEducationComponent,ResumeHeaderComponent,ResumeExperienceComponent,FormsModule,ReactiveFormsModule,],
  templateUrl: './resume-skills.component.html',
  styleUrl: './resume-skills.component.css'
})
export class ResumeSkillsComponent {
 

}
