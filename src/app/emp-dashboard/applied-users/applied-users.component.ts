import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EmpDashboardComponent } from '../emp-dashboard.component';

@Component({
  selector: 'app-applied-users',
  standalone: true,
  imports: [CommonModule,EmpDashboardComponent],
  templateUrl: './applied-users.component.html',
  styleUrl: './applied-users.component.css'
})
export class AppliedUsersComponent {
  @Input() heading: string = 'Job Applications'; // Default value
  employerNavItems = [
    { label: 'Post Job', link: '/post-job' },
    { label: 'Job Posted', link: '/job-posted' },
    { label: 'Applied Users', link: '/applied-users' },
    // { label: 'Manage Jobs', link: '/employer/manage-jobs' }
  ];
  currentFilter = 'all';
  showFullInfo: { [id: string]: boolean } = {};
    // Default selected status
    selectedStatus: string = 'all';
// Applications data
applications = [
  {
    id: 1,
    title: 'Account Executive',
    company: 'Xyz Company',
    name: 'John Doe',
    email: 'john.doe@example.com',
    resume : 'open',
    location: 'Delhi, India',
    status: 'selected',
  },
  {
    title: 'Marketing Manager',
    company: 'Abc Pvt Ltd',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    resume : 'open',
    location: 'Mumbai, India',
    status: 'rejected',
  },
  {
    title: 'Product Designer',
    company: 'Tech Corp',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    resume : 'open',
    location: 'Bangalore, India',
    status: 'reviewed',
  },
  {
    title: 'Software Engineer',
    company: 'Innovate Inc',
    name: 'Bob White',
    email: 'bob.white@example.com',
    resume : 'open',
    location: 'Chennai, India',
    status: 'waiting',
  },
  {
    title: 'Front-end developer',
    company: 'Innovate Inc',
    name: 'Bob White',
    email: 'bob.white@example.com',
    resume : 'open',
    location: 'Chennai, India',
    status: 'reviewed',
  },
  {
    title: 'Backend developer',
    company: 'Codefiles',
    name: 'Bob White',
    email: 'bob.white@example.com',
    resume : 'open',
    location: 'Noida, India',
    status: 'rejected',
  },
  
];

// Current filter and filtered applications
  showLastCard: boolean = false; 
  router: any;
  constructor() {}

  ngOnInit(): void {}
// Filter applications based on status
  // Filtered applications
  filteredApplications = this.applications;
  // Method to filter applications based on status
  filterApplications(status: string): void {
    this.selectedStatus = status;
    this.filteredApplications =
      status === 'all'
        ? this.applications
        : this.applications.filter(app => app.status === status);
  }


toggleInfo(application: any) {
  this.showFullInfo[application.id] = !this.showFullInfo[application.id];
}
goToPrevPage(): void {
  this.router.navigate(['/post-job']); // Replace with actual route
}

goToNextPage(): void {
  this.router.navigate(['/next-page']);
}
}
