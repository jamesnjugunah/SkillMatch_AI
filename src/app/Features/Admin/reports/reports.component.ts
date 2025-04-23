import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Report {
  id: number;
  name: string;
  type: string;
  format: string;
  lastGenerated: string;
}


@Component({
  selector: 'app-reports',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule ],
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent  implements OnInit {
  reports: Report[] = [
    { id: 1, name: 'Monthly User Activity', type: 'User', format: 'PDF', lastGenerated: '2025-04-01' },
    { id: 2, name: 'AI Performance Analysis', type: 'AI', format: 'Excel', lastGenerated: '2025-04-05' },
    { id: 3, name: 'Content Engagement', type: 'Content', format: 'PDF', lastGenerated: '2025-04-10' },
    { id: 4, name: 'Error & Exception Log', type: 'System', format: 'CSV', lastGenerated: '2025-04-15' }
  ];

  reportTypes = ['All', 'User', 'AI', 'Content', 'System'];
  selectedReportType = 'All';
  
  selectedReport: any = null;
  isGenerateModalOpen = false;
  isViewModalOpen = false;
  isScheduleModalOpen = false;
  
  generatingReport = false;
  generationProgress = 0;
  generationInterval: any = null;

  scheduleOptions = {
    frequency: 'weekly',
    day: 'monday',
    recipients: '',
    format: 'PDF'
  };

  constructor() { }

  ngOnInit(): void {
  }

  filterReports(): any[] {
    if (this.selectedReportType === 'All') {
      return this.reports;
    }
    return this.reports.filter(report => report.type === this.selectedReportType);
  }

  openGenerateModal(report: any): void {
    this.selectedReport = report;
    this.isGenerateModalOpen = true;
  }

  closeGenerateModal(): void {
    if (this.generationInterval) {
      clearInterval(this.generationInterval);
    }
    this.isGenerateModalOpen = false;
    this.generatingReport = false;
    this.generationProgress = 0;
  }

  generateReport(): void {
    this.generatingReport = true;
    this.generationProgress = 0;
    
    this.generationInterval = setInterval(() => {
      this.generationProgress += Math.random() * 15;
      if (this.generationProgress >= 100) {
        this.generationProgress = 100;
        this.generatingReport = false;
        
        // Update the last generated date
        const index = this.reports.findIndex(r => r.id === this.selectedReport.id);
        if (index !== -1) {
          const today = new Date();
          this.reports[index].lastGenerated = today.toISOString().split('T')[0];
        }
        
        clearInterval(this.generationInterval);
        
        // Auto close after completion
        setTimeout(() => {
          this.closeGenerateModal();
        }, 1000);
      }
    }, 300);
  }

  openViewModal(report: any): void {
    this.selectedReport = report;
    this.isViewModalOpen = true;
  }

  closeViewModal(): void {
    this.isViewModalOpen = false;
  }

  openScheduleModal(report: any): void {
    this.selectedReport = report;
    this.isScheduleModalOpen = true;
  }

  closeScheduleModal(): void {
    this.isScheduleModalOpen = false;
  }

  saveSchedule(): void {
    // Save schedule logic would go here
    this.isScheduleModalOpen = false;
  }

  downloadReport(report: any): void {
    // In a real application, this would trigger a download
    alert(`Downloading ${report.name} in ${report.format} format`);
  }
}