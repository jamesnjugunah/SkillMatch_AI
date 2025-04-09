import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  findJobs(): void {
    alert('Find Jobs clicked');
  }

  hireTalent(): void {
    alert('Hire Talent clicked');
  }

}
