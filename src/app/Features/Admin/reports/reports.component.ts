import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ReportService } from '../../../core/services/report.service';
import { ChartConfiguration } from 'chart.js';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DetailDialogComponent } from './dialogs/detail-dialog/detail-dialog.component';
import { ExportDialogComponent } from './dialogs/export-dialog/export-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';






Chart.register(...registerables);
@Component({
  selector: 'app-reports',
  imports: [ MatButtonModule,MatProgressSpinner, BaseChartDirective, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatProgressBarModule,MatExpansionModule,MatSelectModule,ReactiveFormsModule, MatInputModule, MatTableModule, MatIconModule, FormsModule, CommonModule ],
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit{
  loading = true;
  metricsLoading = true;
  chartLoading = true;
  tableLoading = true;

  // Filter form
  filterForm: FormGroup;
  dateRanges = [
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '90', label: 'Last 90 days' },
    { value: 'custom', label: 'Custom range' }
  ];

  // Summary metrics
  summaryMetrics = {
    totalUsers: 0,
    activeUsers: 0,
    jobsPosted: 0,
    applications: 0,
    matchRate: 0,
    avgResponseTime: 0
  };

  // Chart data
  userChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Job Seekers',
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        data: [],
        label: 'Recruiters',
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  jobChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Jobs Posted',
        backgroundColor: '#673ab7'
      },
      {
        data: [],
        label: 'Applications',
        backgroundColor: '#ff9800'
      }
    ]
  };

  matchChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Match Rate %',
        borderColor: '#e91e63',
        backgroundColor: 'rgba(233, 30, 99, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // Table data
  topSkills: any[] = [];
  recentMatches: any[] = [];
  
  // Chart options
  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false }
    },
    hover: { mode: 'nearest', intersect: true },
    scales: {
      x: { display: true },
      y: { display: true, beginAtZero: true }
    }
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
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
    private reportService: ReportService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      dateRange: ['30'],
      startDate: [''],
      endDate: [''],
      userType: ['all'],
      region: ['all']
    });
  }

  ngOnInit(): void {
    this.loadReportData();
    
    // Watch for filter changes
    this.filterForm.valueChanges.subscribe(() => {
      this.loadReportData();
    });
  }

  loadReportData(): void {
    this.loading = true;
    this.metricsLoading = true;
    this.chartLoading = true;
    this.tableLoading = true;
    
    const filters = this.prepareFilters();
    
    // Load metrics data
    this.reportService.getSummaryMetrics(filters).subscribe(
      data => {
        this.summaryMetrics = data;
        this.metricsLoading = false;
        this.checkLoadingComplete();
      },
      error => {
        console.error('Error loading metrics:', error);
        this.metricsLoading = false;
        this.checkLoadingComplete();
      }
    );

    // Load chart data
    this.reportService.getTimeSeriesData(filters).subscribe(
      data => {
        this.updateChartData(data);
        this.chartLoading = false;
        this.checkLoadingComplete();
      },
      error => {
        console.error('Error loading chart data:', error);
        this.chartLoading = false;
        this.checkLoadingComplete();
      }
    );

    // Load table data
    this.loadTableData(filters);
  }

  loadTableData(filters: any): void {
    this.reportService.getTopSkills(filters).subscribe(
      data => {
        this.topSkills = data;
        this.tableLoading = false;
        this.checkLoadingComplete();
      },
      error => {
        console.error('Error loading top skills:', error);
        this.tableLoading = false;
        this.checkLoadingComplete();
      }
    );

    this.reportService.getRecentMatches(filters).subscribe(
      data => {
        this.recentMatches = data;
      },
      error => {
        console.error('Error loading recent matches:', error);
      }
    );
  }

  prepareFilters(): any {
    const formValues = this.filterForm.value;
    
    // Handle date range logic
    let startDate, endDate;
    if (formValues.dateRange === 'custom') {
      startDate = formValues.startDate;
      endDate = formValues.endDate;
    } else {
      // Calculate start date based on selected range
      const today = new Date();
      startDate = new Date(today);
      startDate.setDate(today.getDate() - parseInt(formValues.dateRange));
      endDate = today;
    }
    
    return {
      startDate: this.datePipe.transform(startDate, 'yyyy-MM-dd'),
      endDate: this.datePipe.transform(endDate, 'yyyy-MM-dd'),
      userType: formValues.userType,
      region: formValues.region
    };
  }

  updateChartData(data: any): void {
    // Update user chart
    this.userChartData.labels = data.dates;
    this.userChartData.datasets[0].data = data.jobSeekers;
    this.userChartData.datasets[1].data = data.recruiters;
    
    // Update job chart
    this.jobChartData.labels = data.dates;
    this.jobChartData.datasets[0].data = data.jobsPosted;
    this.jobChartData.datasets[1].data = data.applications;
    
    // Update match rate chart
    this.matchChartData.labels = data.dates;
    this.matchChartData.datasets[0].data = data.matchRates;
  }

  checkLoadingComplete(): void {
    if (!this.metricsLoading && !this.chartLoading && !this.tableLoading) {
      this.loading = false;
    }
  }

  openDetailDialog(type: string, data: any): void {
    this.dialog.open(DetailDialogComponent, {
      width: '800px',
      data: { type, data }
    });
  }

  exportReport(): void {
    const dialogRef = this.dialog.open(ExportDialogComponent, {
      width: '500px',
      data: { filters: this.prepareFilters() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reportService.exportReport(result.format, result.sections, this.prepareFilters())
          .subscribe(
            response => {
              // Handle successful export (e.g., download file)
              const url = window.URL.createObjectURL(response);
              const a = document.createElement('a');
              a.href = url;
              a.download = `job-match-report.${result.format}`;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            },
            error => {
              console.error('Export error:', error);
            }
          );
      }
    });
  }
  getMatchScoreColor(score: number): string {
    if (score >= 90) {
      return '#4caf50'; // Green for excellent matches
    } else if (score >= 80) {
      return '#8bc34a'; // Light green for very good matches
    } else if (score >= 70) {
      return '#ffeb3b'; // Yellow for good matches
    } else if (score >= 60) {
      return '#ff9800'; // Orange for moderate matches
    } else {
      return '#f44336'; // Red for poor matches
    }
  }

}
