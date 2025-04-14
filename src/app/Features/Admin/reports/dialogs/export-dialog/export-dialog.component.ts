import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-export-dialog',
  imports: [ CommonModule, FormsModule, MatSelectModule, MatRadioModule, MatRadioGroup,ReactiveFormsModule,MatRadioGroup,MatCheckboxModule, MatButtonModule, MatChipsModule, MatDialogModule ],
  templateUrl: './export-dialog.component.html',
  styleUrl: './export-dialog.component.css'
})
export class ExportDialogComponent {
  exportForm: FormGroup;
  
  formats = [
    { value: 'pdf', label: 'PDF Document (.pdf)' },
    { value: 'excel', label: 'Excel Spreadsheet (.xlsx)' },
    { value: 'csv', label: 'CSV File (.csv)' }
  ];
  
  sections = [
    { id: 'summary', label: 'Summary Metrics', selected: true },
    { id: 'users', label: 'User Growth Chart', selected: true },
    { id: 'jobs', label: 'Job Activity Chart', selected: true },
    { id: 'matching', label: 'AI Match Performance Chart', selected: true },
    { id: 'skills', label: 'Top Skills Table', selected: true },
    { id: 'matches', label: 'Recent Matches Table', selected: true },
    { id: 'insights', label: 'AI Insights Analysis', selected: false }
  ];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.exportForm = this.fb.group({
      format: ['pdf'],
      includeFilters: [true]
    });
  }
  
  getSelectedSections(): string[] {
    return this.sections
      .filter(section => section.selected)
      .map(section => section.id);
  }
  
  toggleSection(section: any): void {
    section.selected = !section.selected;
  }
  
  exportReport(): any {
    return {
      format: this.exportForm.get('format')?.value,
      sections: this.getSelectedSections(),
      includeFilters: this.exportForm.get('includeFilters')?.value
    };
  }

}
