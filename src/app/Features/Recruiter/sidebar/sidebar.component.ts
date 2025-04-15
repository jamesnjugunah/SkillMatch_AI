import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface NavItem {
  label: string;
  icon: string;
  link: string;
  active?: boolean;
}
@Component({
  selector: 'app-sidebar',
  imports: [ RouterModule, CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'fas fa-th-large', link: '', active: true },
    { label: 'Job Postings', icon: 'fas fa-file-alt', link: 'job-posting', active: false },
    { label: 'Candidates', icon: 'fas fa-users', link: 'candidates', active: false },
    { label: 'Interviews', icon: 'fas fa-calendar-check', link: 'interviews', active: false },
    { label: 'Analytics', icon: 'fas fa-chart-line', link: 'analytics', active: false },
    { label: 'Messages', icon: 'fas fa-comment-alt', link: 'messages', active: false },
    { label: 'Settings', icon: 'fas fa-cog', link: 'settings', active: false },
  ];

}
