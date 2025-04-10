import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-tab',
  imports: [ CommonModule],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css'
})
export class AboutTabComponent {
  @Input() summary: string[] = [];
  
  editSummary(): void {
    console.log('Editing summary...');
  }

}
