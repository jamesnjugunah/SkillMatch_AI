import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillItemComponent } from '../../shared/skill-item/skill-item.component';
@Component({
  selector: 'app-skills-tab',
  imports: [ CommonModule, FormsModule, SkillItemComponent ],
  templateUrl: './skills-tab.component.html',
  styleUrl: './skills-tab.component.css'
})
export class SkillsTabComponent {
  @Input() skills: any;
  
  addSkill(): void {
    console.log('Adding skill...');
  }
  
  editSkill(groupName: string, index: number): void {
    console.log(`Editing ${groupName} skill at index ${index}`);
  }
  
  deleteSkill(groupName: string, index: number): void {
    console.log(`Deleting ${groupName} skill at index ${index}`);
  }
  
  addSoftSkill(): void {
    console.log('Adding soft skill...');
  }

}
