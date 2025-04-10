import { Component, Input } from '@angular/core';
import { Education } from '../../../../../../../core/models/profile.model';
import { TimelineItemComponent } from '../../shared/timeline-item/timeline-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education-tab',
  imports: [ TimelineItemComponent, CommonModule ],
  templateUrl: './education-tab.component.html',
  styleUrl: './education-tab.component.css'
})
export class EducationTabComponent {
  @Input() education: Education[] = [];
  
  addEducation(): void {
    console.log('Adding education...');
  }
  
  editEducation(index: number): void {
    console.log(`Editing education at index ${index}`);
  }
  
  deleteEducation(index: number): void {
    console.log(`Deleting education at index ${index}`);
  }

}
