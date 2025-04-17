import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../core/services/profile.services';
import { UserProfile } from '../../../core/models/user-profile.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.personalInfoForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profession: ['', Validators.required],
      bio: ['']
    });
  }

  ngOnInit(): void {
    // Load existing data if available
    const profile = this.profileService.currentProfile;
    
    if (profile) {
      this.personalInfoForm.patchValue({
        fullName: profile.fullName,
        email: profile.email,
        profession: profile.profession,
        bio: profile.bio
      });
    }
  }

  onNext(): void {
    if (this.personalInfoForm.valid) {
      // Update profile with form values
      this.profileService.updateProfile(this.personalInfoForm.value);
      
      // Move to next step
      this.profileService.setCurrentStep(2);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.personalInfoForm.controls).forEach(key => {
        this.personalInfoForm.get(key)?.markAsTouched();
      });
    }
  }

}
