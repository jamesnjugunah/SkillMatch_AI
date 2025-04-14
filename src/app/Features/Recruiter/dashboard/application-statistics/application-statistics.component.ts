import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';


Chart.register(...registerables);

@Component({
  selector: 'app-application-statistics',
  imports: [ CommonModule],
  templateUrl: './application-statistics.component.html',
  styleUrl: './application-statistics.component.css'
})
export class ApplicationStatisticsComponent implements AfterViewInit{
  @ViewChild('applicationsChart') chartCanvas!: ElementRef;
  chart: any;
  
  timeFrame: string = 'monthly';
  timeFrames: string[] = ['weekly', 'monthly', 'quarterly', 'yearly'];

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Applications',
            data: [65, 72, 86, 81, 95, 110],
            borderColor: '#4361ee',
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  changeTimeFrame(frame: string) {
    this.timeFrame = frame;
    // Update chart data based on timeframe
    // This would typically involve an API call in a real application
  }

}
