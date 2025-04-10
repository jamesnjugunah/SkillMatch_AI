import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job.model'
import { JobAlert } from '../models/job.alert';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private savedJobs: Job[] = [
    {
      id: 1,
      company: {
        name: 'TechCorp',
        location: 'San Francisco, CA',
        logoUrl: '/api/placeholder/40/40'
      },
      title: 'Senior Frontend Developer',
      salary: '$120k - $150k',
      type: 'Full-time',
      location: 'On-site',
      tags: ['React', 'TypeScript', 'Redux', 'CSS3'],
      savedDate: new Date('2025-04-01')
    },
    {
      id: 2,
      company: {
        name: 'DataViz Solutions',
        location: 'Chicago, IL',
        logoUrl: '/api/placeholder/40/40'
      },
      title: 'UX/UI Designer',
      salary: '$90k - $120k',
      type: 'Full-time',
      location: 'Hybrid',
      tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'],
      savedDate: new Date('2025-03-28')
    }
  ];

  private appliedJobs: Job[] = [
    {
      id: 3,
      company: {
        name: 'InnovateX',
        location: 'Remote',
        logoUrl: '/api/placeholder/40/40'
      },
      title: 'Full Stack Engineer',
      salary: '$130k - $160k',
      type: 'Full-time',
      location: 'Remote',
      tags: [],
      applicationStatus: 'Under Review',
      applicationDate: new Date('2025-03-25')
    },
    {
      id: 4,
      company: {
        name: 'GrowthLabs',
        location: 'Boston, MA',
        logoUrl: '/api/placeholder/40/40'
      },
      title: 'Product Manager',
      salary: '$115k - $140k',
      type: 'Full-time',
      location: 'On-site',
      tags: [],
      applicationStatus: 'Interview Scheduled',
      applicationDate: new Date('2025-03-18')
    }
  ];

  private jobAlerts: JobAlert[] = [
    {
      id: 1,
      title: 'Frontend Developer Jobs',
      keywords: 'React, Frontend, JavaScript',
      location: 'San Francisco, Remote',
      salary: '$100k+',
      frequency: 'Daily',
      newMatches: 7
    },
    {
      id: 2,
      title: 'UX Designer Jobs',
      keywords: 'UX, UI, Design, Figma',
      location: 'Remote',
      salary: 'Any',
      frequency: 'Weekly',
      newMatches: 12
    }
  ];

  constructor(private http: HttpClient) {}

  getSavedJobs(): Job[] {
    return this.savedJobs;
  }

  getAppliedJobs(): Job[] {
    return this.appliedJobs;
  }

  getJobAlerts(): JobAlert[] {
    return this.jobAlerts;
  }

  applyToJob(jobId: number): void {
    const job = this.savedJobs.find(j => j.id === jobId);
    if (job) {
      const appliedJob = { ...job };
      appliedJob.applicationStatus = 'Applied';
      appliedJob.applicationDate = new Date();
      this.appliedJobs.push(appliedJob);
      
      // Remove from saved jobs
      this.removeJob(jobId);
    }
  }

  removeJob(jobId: number): void {
    this.savedJobs = this.savedJobs.filter(job => job.id !== jobId);
  }

  deleteAlert(alertId: number): void {
    this.jobAlerts = this.jobAlerts.filter(alert => alert.id !== alertId);
  }
}