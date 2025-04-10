import { Component } from '@angular/core';
import { JobPageComponent } from './Features/jobSeeker/job-page/job-page.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ JobPageComponent, RouterModule], // <-- import RouterModule if needed for <router-outlet>
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
 
 
}
