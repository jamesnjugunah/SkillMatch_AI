import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../../../../../core/models/profile.model';
@Component({
  selector: 'app-skill-item',
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.css'
})
export class SkillItemComponent {
  @Input() skill!: Skill;
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  
  edit(): void {
    this.onEdit.emit();
  }
  
  delete(): void {
    this.onDelete.emit();
  }
}
