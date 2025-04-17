import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.services';
import { UserProfile } from '../../../core/models/user-profile.model';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  profile: UserProfile;
  averageProficiency: number = 0;
  totalExperienceYears: number = 0;
  
  constructor(private profileService: ProfileService) {
    this.profile = this.profileService.currentProfile;
  }

  ngOnInit(): void {
    this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
      this.averageProficiency = this.profileService.getAverageSkillProficiency();
      this.totalExperienceYears = this.profileService.getTotalExperienceYears();
    });
  }

  onPrevious(): void {
    this.profileService.setCurrentStep(3);
  }

  onComplete(): void {
    // Here you would handle the final submission
    console.log('Profile completed:', this.profile);
    // In a real application, you might send this data to a server
    alert('Profile completed successfully!');
  }


}
