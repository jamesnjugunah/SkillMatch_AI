import { Component } from '@angular/core';
import { HeaderComponent } from './Features/Recruiter/header/header.component';
import { SidebarComponent } from './Features/Recruiter/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, SidebarComponent, RouterOutlet], // <-- import RouterModule if needed for <router-outlet>
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
 
 
}
