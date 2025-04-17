import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  id: number;
  senderName: string;
  senderAvatar: string;
  preview: string;
  date: string;
  isUnread: boolean;
}

@Component({
  selector: 'app-messages',
  imports: [ CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages: Message[] = [];
  selectedFilter: string = 'all';
  
  constructor() { }

  ngOnInit(): void {
    // Initialize with mock data - in real application, this would come from a service
    this.messages = [
      {
        id: 1,
        senderName: 'John Smith',
        senderAvatar: '/api/placeholder/40/40',
        preview: 'Application for Frontend Developer position...',
        date: '10:45 AM',
        isUnread: true
      },
      {
        id: 2,
        senderName: 'Emily Johnson',
        senderAvatar: '/api/placeholder/40/40',
        preview: 'Thank you for considering my application...',
        date: 'Yesterday',
        isUnread: false
      },
      {
        id: 3,
        senderName: 'Michael Brown',
        senderAvatar: '/api/placeholder/40/40',
        preview: "I'm interested in the UI/UX Designer role...",
        date: 'Apr 14',
        isUnread: false
      }
    ];
  }

  // Filter messages based on selected filter
  get filteredMessages(): Message[] {
    if (this.selectedFilter === 'unread') {
      return this.messages.filter(message => message.isUnread);
    } else if (this.selectedFilter === 'archived') {
      // In a real app, you would have an 'archived' property to filter on
      return [];
    }
    return this.messages;
  }

  // Handle filter change
  onFilterChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFilter = selectElement.value;
  }

  // Mark a message as read
  markAsRead(id: number): void {
    const message = this.messages.find(m => m.id === id);
    if (message) {
      message.isUnread = false;
    }
  }

  // Create a new message
  createNewMessage(): void {
    // Navigate to new message form or open modal
    console.log('Create new message clicked');
  }

  // View message details
  viewMessage(id: number): void {
    // Mark as read and navigate to message detail
    this.markAsRead(id);
    console.log(`Viewing message ${id}`);
  }

}
