// analytics.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart} from 'chart.js'
@Component({
  selector: 'app-analytics',
  imports: [ CommonModule, FormsModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  // Time period selection
  timePeriods = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Last year', 'Custom'];
  selectedPeriod = 'Last 30 days';
  
  // Chart data
  applicationsChart = {
    type: 'line',
    data: [12, 19, 15, 20, 22, 18, 25, 23, 28, 30, 26, 32],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  
  hiringFunnelChart = {
    type: 'bar',
    data: [500, 320, 180, 85, 42, 25],
    labels: ['Applications', 'Screened', 'Interviews', 'Final Round', 'Offers', 'Hires']
  };
  
  sourcesChart = {
    type: 'doughnut',
    data: [45, 25, 15, 10, 5],
    labels: ['LinkedIn', 'Indeed', 'Referrals', 'Company Website', 'Others']
  };
  
  timeToHireChart = {
    type: 'bar',
    data: [32, 45, 28, 60, 35],
    labels: ['Engineering', 'Marketing', 'Sales', 'Design', 'Product']
  };
  
  // Key metrics
  keyMetrics = [
    { name: 'Total Applications', value: 845, trend: '+12%', up: true },
    { name: 'Conversion Rate', value: '5.2%', trend: '+0.8%', up: true },
    { name: 'Time to Hire (avg)', value: '38 days', trend: '-3 days', up: true },
    { name: 'Cost per Hire', value: '$4,250', trend: '-$320', up: true },
    { name: 'Open Positions', value: 12, trend: '+3', up: false }
  ];
  
  // Department metrics
  departmentMetrics = [
    { 
      name: 'Engineering', 
      openPositions: 5, 
      applications: 320, 
      interviews: 85, 
      offers: 12, 
      timeToHire: 42
    },
    { 
      name: 'Marketing', 
      openPositions: 2, 
      applications: 145, 
      interviews: 35, 
      offers: 4, 
      timeToHire: 36
    },
    { 
      name: 'Sales', 
      openPositions: 3, 
      applications: 210, 
      interviews: 48, 
      offers: 7, 
      timeToHire: 28
    },
    { 
      name: 'Design', 
      openPositions: 1, 
      applications: 95, 
      interviews: 22, 
      offers: 3, 
      timeToHire: 45
    },
    { 
      name: 'Product', 
      openPositions: 1, 
      applications: 75, 
      interviews: 18, 
      offers: 2, 
      timeToHire: 38
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // In a real application, these would be initialized with actual chart libraries
    console.log('Analytics component initialized');
  }
}