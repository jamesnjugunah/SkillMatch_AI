import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline-item',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css'
})
export class TimelineItemComponent {
  @Input() item: any;
  @Input() itemType: string = 'education'; // 'experience' or 'education'
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  
  edit(): void {
    this.onEdit.emit();
  }
  
  delete(): void {
    this.onDelete.emit();
  }

}
