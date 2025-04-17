import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from '../../../core/models/skill.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-modal',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.css'
})
export class SkillModalComponent implements OnInit{
  @Output() close = new EventEmitter<void>();
  @Output() skillAdded = new EventEmitter<Skill>();
  
  skillForm: FormGroup;
  skillCategories = [
    { value: 'programming', label: 'Programming' },
    { value: 'design', label: 'Design' },
    { value: 'management', label: 'Management' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'other', label: 'Other' }
  ];
  
  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      category: ['programming', Validators.required],
      proficiency: [75, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  ngOnInit(): void { }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.skillForm.valid) {
      this.skillAdded.emit(this.skillForm.value as Skill);
    }
  }

}
