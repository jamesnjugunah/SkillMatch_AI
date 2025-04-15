import { Component, Input } from '@angular/core';
import { Experience } from '../../../../../../core/models/profile.model';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent } from '../../shared/timeline-item/timeline-item.component';

@Component({
  selector: 'app-experience-tab',
  imports: [ CommonModule, TimelineItemComponent ],
  templateUrl: './experience-tab.component.html',
  styleUrl: './experience-tab.component.css'
})
export class ExperienceTabComponent {
  @Input() experiences: Experience[] = [];
  
  addExperience(): void {
    console.log('Adding experience...');
  }
  
  editExperience(index: number): void {
    console.log(`Editing experience at index ${index}`);
  }
  
  deleteExperience(index: number): void {
    console.log(`Deleting experience at index ${index}`);
  }

}
