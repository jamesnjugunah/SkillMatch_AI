import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Properties for notifications and messages
  notifications = [
    {
      icon: 'fas fa-building',
      title: 'Application Reviewed',
      message: 'TechCorp has reviewed your application for Senior Developer',
      time: '2 hours ago'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Interview Scheduled',
      message: 'You have an interview with InnovateX tomorrow at 10:00 AM',
      time: 'Yesterday'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'New Job Match',
      message: '5 new jobs match your profile and preferences',
      time: '2 days ago'
    }
  ];

  messages = [
    {
      icon: 'fas fa-user',
      title: 'Sarah Johnson - HR at TechCorp',
      message: 'Hello Alex, I\'d like to discuss your application...',
      time: '1 hour ago'
    },
    {
      icon: 'fas fa-user',
      title: 'Mark Williams - Recruiter',
      message: 'I have an exciting opportunity that matches your skills!',
      time: 'Yesterday'
    }
  ];

  // Track dropdown visibility
  notificationsDropdownVisible = false;
  messagesDropdownVisible = false;
  profileDropdownVisible = false;
  mobileMenuVisible = false;

  constructor() { }

  ngOnInit(): void {
    // Add click event listener to close dropdowns when clicked outside
    document.addEventListener('click', (event) => {
      if (!event.target) return;
      const target = event.target as HTMLElement;
      
      // Close dropdowns if clicked outside of dropdown areas
      if (!target.closest('#notificationsBtn') && !target.closest('#notificationsDropdown')) {
        this.notificationsDropdownVisible = false;
      }
      
      if (!target.closest('#messagesBtn') && !target.closest('#messagesDropdown')) {
        this.messagesDropdownVisible = false;
      }
      
      if (!target.closest('#profileBtn') && !target.closest('#profileDropdown')) {
        this.profileDropdownVisible = false;
      }
    });
  }

  toggleNotifications(event: Event): void {
    event.stopPropagation();
    this.notificationsDropdownVisible = !this.notificationsDropdownVisible;
    this.messagesDropdownVisible = false;
    this.profileDropdownVisible = false;
  }

  toggleMessages(event: Event): void {
    event.stopPropagation();
    this.messagesDropdownVisible = !this.messagesDropdownVisible;
    this.notificationsDropdownVisible = false;
    this.profileDropdownVisible = false;
  }

  toggleProfile(event: Event): void {
    event.stopPropagation();
    this.profileDropdownVisible = !this.profileDropdownVisible;
    this.notificationsDropdownVisible = false;
    this.messagesDropdownVisible = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  markAllAsRead(type: 'notifications' | 'messages'): void {
    // Implementation for marking all notifications or messages as read
    console.log(`Marking all ${type} as read`);
  }
}
