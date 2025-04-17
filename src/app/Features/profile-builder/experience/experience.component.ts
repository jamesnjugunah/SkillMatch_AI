
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.services';
import { Experience } from '../../../core/models/experience.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperinceModalComponent } from '../experince-modal/experince-modal.component';



@Component({
  selector: 'app-experience',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, ExperinceModalComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  showExperienceModal = false;
  
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.profile$.subscribe(profile => {
      this.experiences = profile.experiences;
    });
  }

  formatDate(date: Date | undefined): string {
    if (!date) return 'Present';
    
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  }

  openExperienceModal(): void {
    this.showExperienceModal = true;
  }

  closeExperienceModal(): void {
    this.showExperienceModal = false;
  }

  onPrevious(): void {
    this.profileService.setCurrentStep(2);
  }

  onNext(): void {
    this.profileService.setCurrentStep(4);
  }

  onExperienceAdded(experience: Experience): void {
    this.profileService.addExperience(experience);
    this.closeExperienceModal();
  }
}
