import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.services';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-navigation',
  imports: [ CommonModule ],
  templateUrl: './step-navigation.component.html',
  styleUrl: './step-navigation.component.css'
})
export class StepNavigationComponent implements OnInit {
  currentStep$: Observable<number>;
  
  steps = [
    { step: 1, label: 'Personal Info' },
    { step: 2, label: 'Skills' },
    { step: 3, label: 'Experience' },
    { step: 4, label: 'Review' }
  ];

  constructor(private profileService: ProfileService) {
    this.currentStep$ = this.profileService.currentStep$;
  }

  ngOnInit(): void {}

  setStep(step: number): void {
    this.profileService.setCurrentStep(step);
  }
}
