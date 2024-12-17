import { Routes, RouterModule } from '@angular/router';
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
import { NotificationComponent } from './emp-dashboard/notification/notification.component';
import { NoNotificationComponent } from './emp-dashboard/notification/no-notification/no-notification.component';
import { ProfileComponent } from './profile/profile.component';
import { JobSeekerSignupComponent } from './job-seeker-signup/job-seeker-signup.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { NgModule } from '@angular/core';
import { JobSeekerChatComponent } from './job-seeker-chat/job-seeker-chat.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeExperienceComponent } from './resume-builder/resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from './resume-builder/resume-skills/resume-skills.component';
import { ResumeSummaryComponent } from './resume-builder/resume-summary/resume-summary.component';
import { ResumeEducationComponent } from './resume-builder/resume-education/resume-education.component';
import { ResumeHeaderComponent } from './resume-builder/resume-header/resume-header.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminLoginComponent } from './admin-portal/admin-login/admin-login.component';
import { SubAdminLoginComponent } from './admin-portal/sub-admin-login/sub-admin-login.component';
import { SubAdminDashboardComponent } from './admin-portal/sub-admin-dashboard/sub-admin-dashboard.component';
import { AdminDashboardComponent } from './admin-portal/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './admin-portal/admin-dashboard/dashboard/dashboard.component';
import { JobFinderProfileComponent } from './admin-portal/admin-dashboard/job-finder-profile/job-finder-profile.component';
import { JobProvidedComponent } from './admin-portal/admin-dashboard/job-provided/job-provided.component';
import { EnquiryDetailsComponent } from './admin-portal/admin-dashboard/enquiry-details/enquiry-details.component';
import { SendNotificationComponent } from './admin-portal/admin-dashboard/send-notification/send-notification.component';




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
  {path:'notification',component:NotificationComponent},
  {path:'no-notification',component:NoNotificationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'job-seeker-signup',component:JobSeekerSignupComponent},
  {path:'company',component:CompanyComponent},
  { path: 'company-page/:companyName', component: CompanyDetailsComponent },
  {path: 'company-details' , component: CompanyDetailsComponent},
  {path: 'job-seeker-chat' , component: JobSeekerChatComponent},
  {path: 'resume-builder' , component: ResumeBuilderComponent},
  {path: 'resume-experience', component : ResumeExperienceComponent},
  {path: 'resume-skills', component : ResumeSkillsComponent},
  {path: 'resume-summary', component : ResumeSummaryComponent},
  {path: 'resume-education', component : ResumeEducationComponent},
  {path: 'resume-header', component : ResumeHeaderComponent},
  {path: 'admin-login', component : AdminLoginComponent},
  {path: 'admin-portal', component : AdminPortalComponent},
  {path: 'sub-admin-login', component : SubAdminLoginComponent},
  {path: 'sub-admin-dashboard', component : SubAdminDashboardComponent},
  {path: 'admin-dashboard', component : AdminDashboardComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'job-finder-profile', component : JobFinderProfileComponent},
  {path: 'company-details', component : CompanyDetailsComponent},
  {path: 'job-provided', component : JobProvidedComponent},
  {path: 'enquiry-details', component : EnquiryDetailsComponent},
  {path: 'send-notification', component : SendNotificationComponent},
 

  // { path: 'applied-users', component: AppliedUsersComponent }, 

  // { path: 'create-job-post', component: CreateJobPostComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // Wildcard for 404 redirects
];
