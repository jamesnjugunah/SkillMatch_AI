import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { HeroComponent } from '../../Components/hero/hero.component';
import { HowItWorksComponent } from '../../Components/how-it-works/how-it-works.component';
import { AIfeaturesComponent } from '../../Components/aifeatures/aifeatures.component';
import { TestimonialsComponent } from '../../Components/testimonials/testimonials.component';
import { StatsComponent } from '../../Components/stats/stats.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [ HeaderComponent, HeroComponent, HowItWorksComponent, AIfeaturesComponent, TestimonialsComponent, StatsComponent, FooterComponent],
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
