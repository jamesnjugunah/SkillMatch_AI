import { Component, Input } from '@angular/core';
import { Profile } from '../../../../../../core/models/profile.model';
@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  @Input() profile!: Profile;
  
  changePhoto(): void {
    console.log('Changing photo...');
  }
  
  completeProfile(): void {
    console.log('Completing profile...');
  }
}
