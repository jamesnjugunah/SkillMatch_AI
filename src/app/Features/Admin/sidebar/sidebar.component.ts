// sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface MenuItem {
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
    { title: 'Dashboard', icon: 'fa-tachometer-alt', route: '/dashboard', active: true },
    { title: 'User Management', icon: 'fa-users', route: '/user-management', active: false },
    { title: 'AI Management', icon: 'fa-robot', route: '/ai-management', active: false },
    { title: 'Content Management', icon: 'fa-file-alt', route: '/content-management', active: false },
    { title: 'Reports', icon: 'fa-chart-bar', route: '/reports', active: false }
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