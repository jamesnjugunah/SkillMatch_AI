import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  imports: [ CommonModule, FormsModule],
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.css'
})
export class JobPostingComponent implements OnInit {
  jobPostings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      status: 'Active',
      applicants: 24,
      datePosted: '2025-03-15',
      deadline: '2025-05-01'
    },
    {
      id: 2,
      title: 'UX Designer',
      department: 'Design',
      location: 'New York, NY',
      status: 'Active',
      applicants: 18,
      datePosted: '2025-03-20',
      deadline: '2025-04-20'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      status: 'Active',
      applicants: 12,
      datePosted: '2025-03-25',
      deadline: '2025-04-25'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Chicago, IL',
      status: 'Draft',
      applicants: 0,
      datePosted: '',
      deadline: ''
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      status: 'Closed',
      applicants: 35,
      datePosted: '2025-02-10',
      deadline: '2025-03-10'
    }
  ];

  statusOptions = ['All', 'Active', 'Draft', 'Closed'];
  selectedStatus = 'All';
  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  get filteredJobs() {
    return this.jobPostings.filter(job => {
      // Filter by status
      if (this.selectedStatus !== 'All' && job.status !== this.selectedStatus) {
        return false;
      }
      
      // Filter by search term
      if (this.searchTerm && !job.title.toLowerCase().includes(this.searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }

  createNewJob() {
    console.log('Create new job clicked');
    // Implement navigation to job creation form
  }

}
