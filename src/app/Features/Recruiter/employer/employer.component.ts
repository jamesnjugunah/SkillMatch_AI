import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-employer',
  imports: [ RouterOutlet, SidebarComponent, HeaderComponent, FormsModule, CommonModule ],
  templateUrl: './employer.component.html',
  styleUrl: './employer.component.css'
})
export class EmployerComponent {
  sidebarCollapsed: boolean = false;
  
  toggleSidebar(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }

}
