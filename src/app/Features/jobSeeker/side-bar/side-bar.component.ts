import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [ CommonModule, RouterModule ],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  menuItems = [
    { path: 'dashboard', icon: 'fas fa-home', label: 'Dashboard', active: true },
    { path: 'my-jobs', icon: 'fas fa-briefcase', label: 'My Jobs', active: false },
    { path: 'applications', icon: 'fas fa-file-alt', label: 'Applications', active: false },
    { path: 'career-path', icon: 'fas fa-calendar-alt', label: 'Career Path', active: false },
    { path: 'help-support', icon: 'fas fa-question-circle', label: 'Help & Support', active: false },
    { path: 'profile', icon: 'fas fa-user', label: 'Profile', active: false },
    { path: 'interview-calendar', icon: 'fas fa-calendar', label: 'Interview Calendar', active: false },
    { path: 'settings', icon: 'fas fa-cog', label: 'Settings', active: false },
    
  ];

  setActive(item: any): void {
    // Reset all items to inactive
    this.menuItems.forEach(menuItem => menuItem.active = false);
    // Set the clicked item to active
    item.active = true;
  }
  constructor(private router: Router) { }
  
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
  
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
