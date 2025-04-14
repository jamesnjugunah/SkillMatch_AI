import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-job-preview',
  imports: [ MatDialogContent, MatIcon, CommonModule, FormsModule, MatDialogActions ],
  templateUrl: './job-preview.component.html',
  styleUrl: './job-preview.component.css'
})
export class JobPreviewComponent {
  constructor(
    public dialogRef: MatDialogRef<JobPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  formatSalary(salary: any): string {
    if (!salary || (!salary.min && !salary.max)) {
      return 'Not specified';
    }

    let result = '';
    const currency = salary.currency || 'USD';
    const period = salary.period || 'yearly';

    if (salary.min && salary.max) {
      result = `${currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
    } else if (salary.min) {
      result = `${currency} ${salary.min.toLocaleString()}+`;
    } else if (salary.max) {
      result = `Up to ${currency} ${salary.max.toLocaleString()}`;
    }

    switch (period) {
      case 'hourly':
        result += ' per hour';
        break;
      case 'monthly':
        result += ' per month';
        break;
      case 'yearly':
        result += ' per year';
        break;
    }

    return result;
  }

  formatDate(date: Date): string {
    if (!date) return 'Not specified';
    return new Date(date).toLocaleDateString();
  }

  formatSkills(skills: string[]): string {
    if (!skills || skills.length === 0) return 'Not specified';
    return skills.join(', ');
  }

}
