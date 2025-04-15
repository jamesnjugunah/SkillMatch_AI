import { Component, Input } from '@angular/core';
import { Profile } from '../../../../../core/models/profile.model';
import { CommonModule } from '@angular/common';
import { AboutTabComponent } from '../tabs/about-tab/about-tab.component';
import { ExperienceTabComponent } from '../tabs/experience-tab/experience-tab.component';
import { EducationTabComponent } from '../tabs/education-tab/education-tab.component';
import { SkillsTabComponent } from '../tabs/skills-tab/skills-tab.component';
import { ResumeTabComponent } from '../tabs/resume-tab/resume-tab.component';
import { PreferencesTabComponent } from '../tabs/preferences-tab/preferences-tab.component';

@Component({
  selector: 'app-profile-tabs',
  imports: [ CommonModule, AboutTabComponent, ExperienceTabComponent, EducationTabComponent, SkillsTabComponent, ResumeTabComponent, PreferencesTabComponent ],
  templateUrl: './profile-tabs.component.html',
  styleUrl: './profile-tabs.component.css'
})
export class ProfileTabsComponent {
  @Input() profile!: Profile;
  activeTab: string = 'about';
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  
  isTabActive(tab: string): boolean {
    return this.activeTab === tab;
  }

}
