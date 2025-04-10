import { Component, Input } from '@angular/core';
import { JobPreferences } from '../../../../../../../core/models/profile.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferences-tab',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './preferences-tab.component.html',
  styleUrl: './preferences-tab.component.css'
})
export class PreferencesTabComponent {
  @Input() preferences!: JobPreferences;
  
  editPreferences(): void {
    console.log('Editing preferences...');
  }

}
