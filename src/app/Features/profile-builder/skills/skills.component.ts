import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.services';
import { Skill } from '../../../core/models/skill.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillModalComponent } from '../skill-modal/skill-modal.component';



@Component({
  selector: 'app-skills',
  imports: [ CommonModule, FormsModule, SkillModalComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  showSkillModal = false;
  
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.profile$.subscribe(profile => {
      this.skills = profile.skills;
    });
  }

  openSkillModal(): void {
    this.showSkillModal = true;
  }

  closeSkillModal(): void {
    this.showSkillModal = false;
  }

  onPrevious(): void {
    this.profileService.setCurrentStep(1);
  }

  onNext(): void {
    this.profileService.setCurrentStep(3);
  }

  // This will be called from the modal component when a skill is added
  onSkillAdded(skill: Skill): void {
    this.profileService.addSkill(skill);
    this.closeSkillModal();
  }

}
