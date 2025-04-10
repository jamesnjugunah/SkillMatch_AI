import { Component, Input } from '@angular/core';
import { Resume } from '../../../../../../../core/models/profile.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-tab',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './resume-tab.component.html',
  styleUrl: './resume-tab.component.css'
})
export class ResumeTabComponent {
  @Input() resumes: Resume[] = [];
  
  uploadResume(): void {
    console.log('Uploading resume...');
  }
  
  previewResume(index: number): void {
    console.log(`Previewing resume at index ${index}`);
  }
  
  downloadResume(index: number): void {
    console.log(`Downloading resume at index ${index}`);
  }
  
  deleteResume(index: number): void {
    console.log(`Deleting resume at index ${index}`);
  }

}
