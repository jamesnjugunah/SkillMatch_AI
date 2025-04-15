import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';
import { Profile } from '../../../core/models/profile.model';
import { CommonModule } from '@angular/common';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
@Component({
  selector: 'app-profile',
  imports: [ CommonModule, ProfileHeaderComponent, ProfileTabsComponent ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile: Profile | null = null;
  
  constructor(private profileService: ProfileService) { }
  
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
  
  downloadResume(): void {
    // Logic to download resume
    console.log('Downloading resume...');
  }
  
  previewProfile(): void {
    // Logic to preview profile
    console.log('Previewing profile...');
  }

}
