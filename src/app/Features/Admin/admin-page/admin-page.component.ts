import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-admin-page',
  imports: [ CommonModule, RouterOutlet, SidebarComponent, HeaderComponent ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  sidebarCollapsed: boolean = false;
  
  toggleSidebar(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }

}
