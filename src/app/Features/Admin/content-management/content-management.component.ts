import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JobPostingComponent } from './dialogs/job-posting/job-posting.component';
import { JobDeleteComponent } from './dialogs/job-delete/job-delete.component';
import { JobPreviewComponent } from './dialogs/job-preview/job-preview.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';


interface JobPosting {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: string;
  skillsRequired: string[];
  experienceLevel: string;
  status: string;
  datePosted: Date;
  applicationDeadline: Date;
}


@Component({
  selector: 'app-content-management',
  imports: [ MatIcon, MatButton, MatInput, MatSelect, MatOption, CommonModule, MatMenuModule, FormsModule, MatFormField, MatTable, MatPaginator, MatSort, MatFormFieldModule ],
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.css'
})
export class ContentManagementComponent {
  displayedColumns: string[] = ['id', 'title', 'company', 'location', 'jobType', 'experienceLevel', 'status', 'datePosted', 'applicationDeadline', 'actions'];
  dataSource: MatTableDataSource<JobPosting>;
  
  jobTypes = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Remote'];
  experienceLevels = ['Entry Level', 'Mid Level', 'Senior', 'Manager', 'Executive'];
  statusFilters = ['Active', 'Draft', 'Closed', 'Expired', 'Filled'];
  
  selectedJobType = '';
  selectedExperienceLevel = '';
  selectedStatus = '';
  searchQuery = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    // Mock data for job postings
    const jobPostings: JobPosting[] = [
      { 
        id: 1, 
        title: 'Frontend Developer', 
        company: 'TechCorp', 
        location: 'New York, NY', 
        jobType: 'Full-time', 
        skillsRequired: ['Angular', 'TypeScript', 'CSS', 'HTML'], 
        experienceLevel: 'Mid Level', 
        status: 'Active', 
        datePosted: new Date('2025-04-01'), 
        applicationDeadline: new Date('2025-05-01')
      },
      { 
        id: 2, 
        title: 'Backend Engineer', 
        company: 'DataSystems Inc', 
        location: 'Remote', 
        jobType: 'Full-time', 
        skillsRequired: ['Node.js', 'Python', 'MongoDB', 'AWS'], 
        experienceLevel: 'Senior', 
        status: 'Active', 
        datePosted: new Date('2025-04-05'), 
        applicationDeadline: new Date('2025-05-05')
      },
      { 
        id: 3, 
        title: 'UX/UI Designer', 
        company: 'Creative Solutions', 
        location: 'San Francisco, CA', 
        jobType: 'Contract', 
        skillsRequired: ['Figma', 'Adobe XD', 'User Research'], 
        experienceLevel: 'Mid Level', 
        status: 'Active', 
        datePosted: new Date('2025-04-08'), 
        applicationDeadline: new Date('2025-04-30')
      },
      { 
        id: 4, 
        title: 'Data Scientist', 
        company: 'AnalyticsPro', 
        location: 'Boston, MA', 
        jobType: 'Full-time', 
        skillsRequired: ['Python', 'R', 'Machine Learning', 'SQL'], 
        experienceLevel: 'Senior', 
        status: 'Draft', 
        datePosted: new Date('2025-04-10'), 
        applicationDeadline: new Date('2025-05-10')
      },
      { 
        id: 5, 
        title: 'Marketing Intern', 
        company: 'GrowthMarketing', 
        location: 'Chicago, IL', 
        jobType: 'Internship', 
        skillsRequired: ['Social Media', 'Content Writing', 'SEO'], 
        experienceLevel: 'Entry Level', 
        status: 'Active', 
        datePosted: new Date('2025-04-07'), 
        applicationDeadline: new Date('2025-04-28')
      },
      { 
        id: 6, 
        title: 'Project Manager', 
        company: 'BuildIT Solutions', 
        location: 'Austin, TX', 
        jobType: 'Full-time', 
        skillsRequired: ['Agile', 'Scrum', 'JIRA', 'Team Leadership'], 
        experienceLevel: 'Manager', 
        status: 'Filled', 
        datePosted: new Date('2025-03-15'), 
        applicationDeadline: new Date('2025-04-15')
      },
      { 
        id: 7, 
        title: 'DevOps Engineer', 
        company: 'CloudTech', 
        location: 'Remote', 
        jobType: 'Contract', 
        skillsRequired: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'], 
        experienceLevel: 'Senior', 
        status: 'Active', 
        datePosted: new Date('2025-04-12'), 
        applicationDeadline: new Date('2025-05-12')
      },
      { 
        id: 8, 
        title: 'Technical Writer', 
        company: 'DocuTech', 
        location: 'Seattle, WA', 
        jobType: 'Part-time', 
        skillsRequired: ['Technical Documentation', 'Markdown', 'Content Strategy'], 
        experienceLevel: 'Mid Level', 
        status: 'Expired', 
        datePosted: new Date('2025-03-10'), 
        applicationDeadline: new Date('2025-04-10')
      },
    ];

    this.dataSource = new MatTableDataSource(jobPostings);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filterPredicate = (data: JobPosting, filter: string) => {
      const jobTypeMatch = !this.selectedJobType || data.jobType === this.selectedJobType;
      const experienceLevelMatch = !this.selectedExperienceLevel || data.experienceLevel === this.selectedExperienceLevel;
      const statusMatch = !this.selectedStatus || data.status === this.selectedStatus;
      const searchMatch = !this.searchQuery || 
                         data.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                         data.company.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                         data.location.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return jobTypeMatch && experienceLevelMatch && statusMatch && searchMatch;
    };
    
    // Trigger filter update
    this.dataSource.filter = this.searchQuery || this.selectedJobType || this.selectedExperienceLevel || this.selectedStatus ? 'filtered' : '';
  }

  resetFilters() {
    this.selectedJobType = '';
    this.selectedExperienceLevel = '';
    this.selectedStatus = '';
    this.searchQuery = '';
    this.dataSource.filter = '';
  }

  openAddJobDialog() {
    const dialogRef = this.dialog.open(JobPostingComponent, {
      width: '900px',
      data: { 
        mode: 'add', 
        jobTypes: this.jobTypes,
        experienceLevels: this.experienceLevels
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Add new job posting to dataSource
        const newJobId = Math.max(...this.dataSource.data.map(job => job.id)) + 1;
        result.id = newJobId;
        result.datePosted = new Date();
        
        const updatedData = [...this.dataSource.data, result];
        this.dataSource.data = updatedData;
      }
    });
  }

  openEditJobDialog(job: JobPosting) {
    const dialogRef = this.dialog.open(JobPostingComponent, {
      width: '900px',
      data: { 
        mode: 'edit', 
        jobTypes: this.jobTypes,
        experienceLevels: this.experienceLevels,
        job: {...job}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update job in dataSource
        const index = this.dataSource.data.findIndex(j => j.id === job.id);
        if (index !== -1) {
          const updatedData = [...this.dataSource.data];
          updatedData[index] = result;
          this.dataSource.data = updatedData;
        }
      }
    });
  }

  openDeleteJobDialog(job: JobPosting) {
    const dialogRef = this.dialog.open(JobDeleteComponent, {
      width: '400px',
      data: { job: job }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Remove job from dataSource
        this.dataSource.data = this.dataSource.data.filter(j => j.id !== job.id);
      }
    });
  }

  previewJob(job: JobPosting) {
    this.dialog.open(JobPreviewComponent, {
      width: '800px',
      data: { job: job }
    });
  }

  changeJobStatus(job: JobPosting, newStatus: string) {
    const index = this.dataSource.data.findIndex(j => j.id === job.id);
    if (index !== -1) {
      const updatedData = [...this.dataSource.data];
      updatedData[index] = {...job, status: newStatus};
      this.dataSource.data = updatedData;
    }
  }

  formatSkills(skills: string[]): string {
    return skills.join(', ');
  }



}
