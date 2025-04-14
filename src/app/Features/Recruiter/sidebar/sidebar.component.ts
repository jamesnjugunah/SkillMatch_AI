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
    { label: 'Dashboard', icon: 'fas fa-th-large', link: '/dashboard', active: true },
    { label: 'Job Postings', icon: 'fas fa-file-alt', link: '/job-postings' },
    { label: 'Candidates', icon: 'fas fa-users', link: '/candidates' },
    { label: 'Interviews', icon: 'fas fa-calendar-check', link: '/interviews' },
    { label: 'Analytics', icon: 'fas fa-chart-line', link: '/analytics' },
    { label: 'Messages', icon: 'fas fa-comment-alt', link: '/messages' },
    { label: 'Settings', icon: 'fas fa-cog', link: '/settings' }
  ];

}
