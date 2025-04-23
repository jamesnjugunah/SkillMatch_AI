// sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapsed: boolean = false;
  
  menuItems: MenuItem[] = [
    { route: 'dashboard', icon: 'fas fa-home', title: 'Dashboard' },
    { route: 'user-management', icon: 'fas fa-users', title: 'User Management' },
    { route: 'ai-management', icon: 'fas fa-file-alt', title: 'AI Management' },
    { route: 'content-management', icon: 'fas fa-calendar-alt', title: 'Content Management' },
    { route: 'reports', icon: 'fas fa-chart-bar', title: 'Reports' }
  ];
  
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }
}