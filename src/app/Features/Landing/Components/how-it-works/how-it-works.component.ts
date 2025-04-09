import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      number: 1,
      title: 'Create Your Profile',
      description: 'Build your skills profile using our AI-powered assessment tools'
    },
    {
      number: 2,
      title: 'Get Matched',
      description: 'Our algorithm connects you with opportunities that match your unique skill set'
    },
    {
      number: 3,
      title: 'Succeed Together',
      description: 'Engage with employers who value your real capabilities, not just your past'
    }
  ]

}
