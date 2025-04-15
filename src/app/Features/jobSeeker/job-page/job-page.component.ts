import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-job-page',
  imports: [ HeaderComponent, SideBarComponent, RouterOutlet,CommonModule],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css'
})
export class JobPageComponent {

  sidebarCollapsed: boolean = false;
  
  toggleSidebar(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }

}
