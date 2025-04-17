import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { QuillModule } from 'ngx-quill';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-job-posting',
  imports: [ CommonModule, MatInputModule,FormsModule,ReactiveFormsModule, MatDatepickerModule, MatSelectModule, QuillModule],
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.css'
})
export class JobPostingComponent implements OnInit {
  jobForm: FormGroup;
  mode: 'add' | 'edit';
  dialogTitle: string;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  
  // Rich text editor configuration
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['clean']
    ]
  };

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<JobPostingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mode = data.mode;
    this.dialogTitle = this.mode === 'add' ? 'Post New Job' : 'Edit Job Posting';
    
    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      location: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      experienceLevel: ['', [Validators.required]],
      salary: this.fb.group({
        min: [null],
        max: [null],
        currency: ['USD'],
        period: ['yearly']
      }),
      description: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
      requirements: ['', [Validators.required]],
      benefits: [''],
      skillsRequired: [[]],
      applicationDeadline: [null, [Validators.required]],
      contactEmail: ['', [Validators.email]],
      applicationUrl: [''],
      status: ['Draft']
    });

    if (this.mode === 'edit' && data.job) {
      this.populateForm(data.job);
    }
  }

  ngOnInit(): void {
  }

  populateForm(job: any): void {
    this.jobForm.patchValue({
      title: job.title,
      company: job.company,
      location: job.location,
      jobType: job.jobType,
      experienceLevel: job.experienceLevel,
      description: job.description || '',
      responsibilities: job.responsibilities || '',
      requirements: job.requirements || '',
      benefits: job.benefits || '',
      skillsRequired: job.skillsRequired || [],
      applicationDeadline: job.applicationDeadline,
      contactEmail: job.contactEmail || '',
      applicationUrl: job.applicationUrl || '',
      status: job.status
    });

    if (job.salary) {
      this.jobForm.get('salary')?.patchValue({
        min: job.salary.min || null,
        max: job.salary.max || null,
        currency: job.salary.currency || 'USD',
        period: job.salary.period || 'yearly'
      });
    }
  }

  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const currentSkills = this.jobForm.get('skillsRequired')?.value || [];

    if (value && !currentSkills.includes(value)) {
      this.jobForm.get('skillsRequired')?.setValue([...currentSkills, value]);
    }

    event.chipInput!.clear();
  }
  addSkillFromInput(value: string): void {
    const currentSkills = this.jobForm.get('skillsRequired')?.value || [];
    value = value.trim();
    if (value && !currentSkills.includes(value)) {
      this.jobForm.get('skillsRequired')?.setValue([...currentSkills, value]);
    }
  }

  removeSkill(skill: string): void {
    const currentSkills = this.jobForm.get('skillsRequired')?.value || [];
    const index = currentSkills.indexOf(skill);

    if (index >= 0) {
      const updatedSkills = [...currentSkills];
      updatedSkills.splice(index, 1);
      this.jobForm.get('skillsRequired')?.setValue(updatedSkills);
    }
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      this.dialogRef.close(this.jobForm.value);
    } else {
      // Mark all fields as touched to trigger validation visuals
      this.markFormGroupTouched(this.jobForm);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  // Helper method to mark all controls in a form group as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
