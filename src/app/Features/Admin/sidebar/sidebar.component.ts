// sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
interface MenuItem {
  id?: number;
  title: string;
  icon: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapsed: boolean = false;
  
  menuItems: MenuItem[] = [
    { route: 'dashboard', icon: 'fas fa-home', title: 'Dashboard', active: true },
    { route: 'user-Management', icon: 'fas fa-users', title: 'User Management', active: false },
    { route: 'ai-management', icon: 'fas fa-file-alt', title: 'AI Management', active: false },
    { route: 'content-Management', icon: 'fas fa-calendar-alt', title: 'Content Management', active: false },
    { route: 'Reports', icon: 'fas fa-question-circle', title: 'Reports', active: false },
  ];
  
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }
  
  setActive(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
}