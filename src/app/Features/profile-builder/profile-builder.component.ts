
import { HeaderComponent } from './header/header.component';
import { StepNavigationComponent } from './step-navigation/step-navigation.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillModalComponent } from './skill-modal/skill-modal.component';
import { ReviewComponent } from './review/review.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperinceModalComponent } from './experince-modal/experince-modal.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../core/services/profile.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-builder',
  imports: [ HeaderComponent, ExperinceModalComponent, SkillModalComponent,StepNavigationComponent, CommonModule, ExperienceComponent, SkillsComponent, ReviewComponent, PersonalInfoComponent],
  templateUrl: './profile-builder.component.html',
  styleUrl: './profile-builder.component.css'
})
export class ProfileBuilderComponent implements OnInit {
  currentStep$: Observable<number>;

  constructor(private profileService: ProfileService) {
    this.currentStep$ = this.profileService.currentStep$;
  }

  ngOnInit(): void {
    
    // Any initialization code
  }

}
