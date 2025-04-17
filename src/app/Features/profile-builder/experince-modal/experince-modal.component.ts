import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from '../../../core/models/experience.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-experince-modal',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './experince-modal.component.html',
  styleUrl: './experince-modal.component.css'
})
export class ExperinceModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() experienceAdded = new EventEmitter<Experience>();
  
  experienceForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      current: [false],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // When 'current' checkbox changes, enable/disable end date
    this.experienceForm.get('current')?.valueChanges.subscribe(isCurrent => {
      const endDateControl = this.experienceForm.get('endDate');
      
      if (isCurrent) {
        endDateControl?.disable();
        endDateControl?.setValue(null);
      } else {
        endDateControl?.enable();
      }
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.experienceForm.valid) {
      // Convert string dates to Date objects
      const formValue = this.experienceForm.value;
      const experience: Experience = {
        ...formValue,
        startDate: new Date(formValue.startDate),
        endDate: formValue.current ? undefined : new Date(formValue.endDate)
      };
      
      this.experienceAdded.emit(experience);
    }
  }

}
