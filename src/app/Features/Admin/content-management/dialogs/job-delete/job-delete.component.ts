import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-job-delete',
  imports: [ ],
  templateUrl: './job-delete.component.html',
  styleUrl: './job-delete.component.css'
})
export class JobDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<JobDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
