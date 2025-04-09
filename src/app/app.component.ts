import { Component } from '@angular/core';
import { LandingPageComponent } from './Features/Landing/page/landing-page/landing-page.component';



@Component({
  selector: 'app-root',
  imports: [ LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
