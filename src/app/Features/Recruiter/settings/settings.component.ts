import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
interface SettingsItem {
  id: string;
  icon: string;
  label: string;
  route: string;
  badge?: {
    text: string;
    class: string;
  }
}
interface SettingsSection {
  title: string;
  items: SettingsItem[];
}

@Component({
  selector: 'app-settings',
  imports: [ CommonModule, FormsModule, RouterModule ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settingsSections: SettingsSection[] = [];
  
  constructor() { }

  ngOnInit(): void {
    // Initialize settings menu structure
    this.settingsSections = [
      {
        title: 'Account Settings',
        items: [
          { id: 'profile', icon: 'fa-user', label: 'Profile Information', route: '/settings/profile' },
          { id: 'company', icon: 'fa-building', label: 'Company Details', route: '/settings/company' },
          { id: 'security', icon: 'fa-lock', label: 'Password & Security', route: '/settings/security' }
        ]
      },
      {
        title: 'Job Posting Settings',
        items: [
          { id: 'templates', icon: 'fa-briefcase', label: 'Job Posting Templates', route: '/settings/templates' },
          { id: 'matching', icon: 'fa-sliders', label: 'Matching Preferences', route: '/settings/matching' },
          { id: 'notifications', icon: 'fa-bell', label: 'Notification Settings', route: '/settings/notifications' }
        ]
      },
      {
        title: 'Billing & Subscription',
        items: [
          { id: 'payment', icon: 'fa-credit-card', label: 'Payment Methods', route: '/settings/payment' },
          { id: 'billing', icon: 'fa-file-text', label: 'Billing History', route: '/settings/billing' },
          { 
            id: 'subscription', 
            icon: 'fa-refresh', 
            label: 'Subscription Plan',
            route: '/settings/subscription',
            badge: {
              text: 'Premium',
              class: 'plan-badge'
            }
          }
        ]
      }
    ];
  }

  // Navigate to setting detail page
  navigateToSetting(route: string): void {
    console.log(`Navigating to ${route}`);
    // In a real application, this would use the Router service
    // this.router.navigate([route]);
  }

}
