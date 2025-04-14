import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface JobPosting {
  title: string;
  location: string;
  type: string;
  applicants: number;
  status: 'active' | 'pending' | 'closed';
}

@Component({
  selector: 'app-job-postings',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './job-postings.component.html',
  styleUrl: './job-postings.component.css'
})
export class JobPostingsComponent {
  jobs: JobPosting[] = [
    {
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      applicants: 24,
      status: 'active'
    },
    {
      title: 'UX/UI Designer',
      location: 'New York',
      type: 'Full-time',
      applicants: 18,
      status: 'active'
    },
    {
      title: 'DevOps Engineer',
      location: 'San Francisco',
      type: 'Full-time',
      applicants: 12,
      status: 'pending'
    },
    {
      title: 'Product Manager',
      location: 'Remote',
      type: 'Full-time',
      applicants: 31,
      status: 'active'
    }
  ];

  viewAllJobs() {
    // Navigate to all jobs page
    console.log('Viewing all jobs');
  }

}
