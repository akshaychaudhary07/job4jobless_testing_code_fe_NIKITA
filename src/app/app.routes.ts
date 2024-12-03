import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployerComponent } from './employer/employer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HiringSolutionComponent } from './hiring-solution/hiring-solution.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { JobPostedComponent } from './emp-dashboard/job-posted/job-posted.component';
import { ApprovedJobsComponent } from './emp-dashboard/job-posted/approved-jobs/approved-jobs.component';
import { RejectedJobsComponent } from './emp-dashboard/job-posted/rejected-jobs/rejected-jobs.component';
import { SignupEmployerComponent } from './signup-employer/signup-employer.component';
import { AppliedUsersComponent } from './emp-dashboard/applied-users/applied-users.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdviceCareerComponent } from './blogs/advice-career/advice-career.component';
import { CareerObjectiveComponent } from './blogs/career-objective/career-objective.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { ApplyJobsComponent } from './find-jobs/apply-jobs/apply-jobs.component';
import { LoginJobsComponent } from './find-jobs/login-jobs/login-jobs.component';
import { AddDetailsComponent } from './find-jobs/add-details/add-details.component';
import { AddResumeComponent } from './find-jobs/add-details/add-resume/add-resume.component';
import { FormSubmitComponent } from './find-jobs/add-details/form-submit/form-submit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { JobPostSubmittedComponent } from './emp-dashboard/job-post-submitted/job-post-submitted.component';
import { CreateJobPostComponent } from './emp-dashboard/create-job-post/create-job-post.component';




export const routes: Routes = [
  { path: '', component: ContentboxComponent }, // Home page
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'login-page', component: LoginPageComponent }, 
  { path: 'hiring-solution', component: HiringSolutionComponent },// Login page
  { path: 'dashboard', component: EmpDashboardComponent },
  { path: 'post-job', component: EmpDashboardComponent },
  { path: 'job-posted', component: JobPostedComponent },
  { path: 'approved-jobs', component: ApprovedJobsComponent },
  { path: 'rejected-jobs', component: RejectedJobsComponent },
  { path: 'signup-page', component: SignupEmployerComponent }, 
  { path: 'applied-users', component: AppliedUsersComponent }, 
  { path: 'blogs', component: BlogsComponent }, 
  { path: 'career-advice', component: AdviceCareerComponent }, 
  {path: 'fresher-career-tips',component:CareerObjectiveComponent},
  {path: 'post-blog', component:PostBlogComponent},
  {path: 'find-jobs', component:FindJobsComponent},
  {path: 'login-jobs', component:LoginJobsComponent},
  {path: 'add-details', component:AddDetailsComponent},
  {path:'app-form-submit',component:FormSubmitComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'job-post-submitted',component:JobPostSubmittedComponent},

 

  // { path: 'applied-users', component: AppliedUsersComponent }, 

  // { path: 'create-job-post', component: CreateJobPostComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // Wildcard for 404 redirects
];
