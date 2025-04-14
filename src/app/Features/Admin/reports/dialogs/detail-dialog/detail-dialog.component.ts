import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogTitle } from '@angular/material/dialog';  // Added missing import for mat-dialog-title
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartConfiguration, ChartType } from 'chart.js';  // Added ChartType import
import { BaseChartDirective } from 'ng2-charts';  

@Component({
  selector: 'app-detail-dialog',
  imports: [
    MatDialogTitle,  // Added missing import in the component
    MatDialogContent, 
    CommonModule, 
    BaseChartDirective, 
    FormsModule, 
    MatDialogActions, 
    MatDialogClose, 
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './detail-dialog.component.html',  // Keeping your original reference
  styleUrl: './detail-dialog.component.css'
})
export class DetailDialogComponent implements OnInit {  // Added OnInit implementation
  options: string = '';
  title: string = 'Data Analysis';
  chartData: ChartConfiguration['data'] = {
    datasets: [{
      data: [],
      label: ''
    }],  // Initialize with at least one dataset to avoid undefined errors
    labels: []
  };
  chartType: ChartType = 'line';  // Using ChartType for better type safety
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      x: { display: true },
      y: { display: true, beginAtZero: true }
    }
  };

  constructor(
    public dialogRef: MatDialogRef<DetailDialogComponent>,  // Added dialogRef for proper dialog handling
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  ngOnInit(): void {
    if (this.data) {
      // Properly initialize chart data from injected data
      if (this.data.data && this.data.data.datasets) {
        this.chartData = this.data.data;
      }
  
      switch (this.data.type) {
        case 'users':
          this.title = 'User Growth Analysis';
          this.chartType = 'line';
          break;
        case 'jobs':
          this.title = 'Job Activity Analysis';
          this.chartType = 'bar';
          break;
        case 'matching':
          this.title = 'AI Matching Performance Analysis';
          this.chartType = 'line';
          break;
        default:
          this.title = 'Data Analysis';
          this.chartType = 'line';
      }
    }
  }

  getMaxValue(): number {
    if (!this.chartData || !this.chartData.datasets || this.chartData.datasets.length === 0) {
      return 0;
    }
    
    const allValues = this.chartData.datasets.flatMap(dataset => dataset.data as number[]);
    return Math.max(...allValues);
  }

  getPeakDate(): string {
    if (!this.chartData || !this.chartData.datasets || this.chartData.datasets.length === 0 || !this.chartData.labels) {
      return 'N/A';
    }
    
    let maxValue = -Infinity;
    let maxIndex = -1;
    
    this.chartData.datasets.forEach(dataset => {
      const data = dataset.data as number[];
      data.forEach((value, index) => {
        if (value > maxValue) {
          maxValue = value;
          maxIndex = index;
        }
      });
    });
    
    if (maxIndex >= 0 && maxIndex < this.chartData.labels.length) {
      return this.chartData.labels[maxIndex] as string;
    }
    
    return 'N/A';
  }

  getAverageValue(): number {
    if (!this.chartData || !this.chartData.datasets || this.chartData.datasets.length === 0) {
      return 0;
    }
    
    const allValues = this.chartData.datasets.flatMap(dataset => dataset.data as number[]);
    const sum = allValues.reduce((acc, val) => acc + val, 0);
    
    return Math.round((sum / allValues.length) * 10) / 10; // Round to 1 decimal place
  }
}