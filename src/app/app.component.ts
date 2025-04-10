import { Component } from '@angular/core';
import { ApplicationsComponent } from './Features/jobSeeker/Components/applications/applications.component';
// import { DashboardComponent } from './Features/jobSeeker/Components/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  imports: [ ApplicationsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
 
}
