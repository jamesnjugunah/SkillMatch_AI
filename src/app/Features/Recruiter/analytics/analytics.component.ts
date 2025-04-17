// analytics.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-analytics',
  imports: [ CommonModule, FormsModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
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
    // Initialize charts after view is ready
    setTimeout(() => {
      this.initializeCharts();
    });
  }
  
  initializeCharts(): void {
    // Applications over time chart
    new Chart('applicationsChart', {
      type: 'line',
      data: {
        labels: this.applicationsChart.labels,
        datasets: [{
          label: 'Applications',
          data: this.applicationsChart.data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  
    // Hiring funnel chart
    new Chart('hiringFunnelChart', {
      type: 'bar',
      data: {
        labels: this.hiringFunnelChart.labels,
        datasets: [{
          label: 'Candidates',
          data: this.hiringFunnelChart.data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Sources chart
    new Chart('sourcesChart', {
      type: 'doughnut',
      data: {
        labels: this.sourcesChart.labels,
        datasets: [{
          data: this.sourcesChart.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  
    // Time to hire chart
    new Chart('timeToHireChart', {
      type: 'bar',
      data: {
        labels: this.timeToHireChart.labels,
        datasets: [{
          label: 'Days',
          data: this.timeToHireChart.data,
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}