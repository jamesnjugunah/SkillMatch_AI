import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string = 'Admin User';
  notifications: number = 3;
  
  toggleNotifications(): void {
    // Logic to show notifications dialog
    console.log('Toggle notifications');
  }
  
  openUserMenu(): void {
    // Logic to show user menu
    console.log('Open user menu');
  }
}