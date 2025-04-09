import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-aifeatures',
  imports: [CommonModule],
  templateUrl: './aifeatures.component.html',
  styleUrl: './aifeatures.component.css'
})
export class AIfeaturesComponent {
  features: Feature[] = [
    {
      icon: 'fas fa-brain',
      title: 'AI Skill Mapping',
      description: 'Advanced algorithms identify and validate your skills beyond traditional credentials'
    },
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Perfect Matching',
      description: 'Find opportunities that align perfectly with your skills and potential'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Growth Analytics',
      description: 'Track your skill development and career progression over time'
    },
    {
      icon: 'fas fa-comments',
      title: 'Direct Communication',
      description: 'Connect directly with employers interested in your specific capabilities'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Bias Protection',
      description: 'Our platform minimizes bias in the hiring process'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learning Recommendations',
      description: 'Get personalized recommendations to enhance your skill set'
    }
  ];

}
