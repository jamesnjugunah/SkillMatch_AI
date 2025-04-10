import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobAlert } from '../../../../core/models/job.alert';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-my-jobs',
  imports: [ CommonModule, RouterModule ],
  standalone: true,
  templateUrl: './my-jobs.component.html',
  styleUrl: './my-jobs.component.css'
})
export class MyJobsComponent implements OnInit {
  activeTab: string = 'saved-jobs';
  savedJobs: Job[] = [];
  appliedJobs: Job[] = [];
  jobAlerts: JobAlert[] = [];
  
  constructor(private jobService: JobService) {}
  
  ngOnInit(): void {
    this.savedJobs = this.jobService.getSavedJobs();
    this.appliedJobs = this.jobService.getAppliedJobs();
    this.jobAlerts = this.jobService.getJobAlerts();
  }
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  
  applyToJob(jobId: number): void {
    this.jobService.applyToJob(jobId);
  }
  
  removeJob(jobId: number): void {
    this.jobService.removeJob(jobId);
    this.savedJobs = this.savedJobs.filter(job => job.id !== jobId);
  }
  
  deleteAlert(alertId: number): void {
    this.jobService.deleteAlert(alertId);
    this.jobAlerts = this.jobAlerts.filter(alert => alert.id !== alertId);
  }
  
  createNewAlert(): void {
    // Navigate to alert creation page or open modal
    console.log('Creating new alert');
  }

}
