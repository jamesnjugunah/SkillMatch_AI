import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { ApplicationStatisticsComponent } from './application-statistics/application-statistics.component';
import { JobPostingsComponent } from './job-postings/job-postings.component';
// import { CandidatePipelineComponent } from './candidate-pipeline/candidate-pipeline.component';
import { AiAssistanceComponent } from './ai-assistance/ai-assistance.component';
import { ActionItemsComponent } from './action-items/action-items.component';
import { UpcomingInterviewsComponent } from './upcoming-interviews/upcoming-interviews.component';
@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule, StatsCardComponent, AiAssistanceComponent,ApplicationStatisticsComponent, JobPostingsComponent,  ActionItemsComponent, UpcomingInterviewsComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats = [
    {
      icon: 'fas fa-briefcase',
      iconClass: 'job-icon',
      label: 'Active Job Postings',
      value: 24,
      change: 12,
      increase: true
    },
    {
      icon: 'fas fa-user-friends',
      iconClass: 'candidate-icon',
      label: 'New Candidates',
      value: 156,
      change: 18,
      increase: true
    },
    {
      icon: 'fas fa-calendar-check',
      iconClass: 'interview-icon',
      label: 'Interviews Scheduled',
      value: 42,
      change: 5,
      increase: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Any initialization code
  }

}
