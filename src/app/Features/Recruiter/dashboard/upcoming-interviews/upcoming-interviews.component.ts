import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interview {
  candidateName: string;
  position: string;
  date: string;
  type: string;
  typeIcon: string;
}

@Component({
  selector: 'app-upcoming-interviews',
  imports: [ CommonModule ],
  templateUrl: './upcoming-interviews.component.html',
  styleUrl: './upcoming-interviews.component.css'
})
export class UpcomingInterviewsComponent {
  interviews: Interview[] = [
    {
      candidateName: 'Alex Davis',
      position: 'Senior Frontend Developer',
      date: 'Today, 2:00 PM',
      type: 'Zoom Meeting',
      typeIcon: 'fas fa-video'
    },
    {
      candidateName: 'Sarah Williams',
      position: 'DevOps Engineer',
      date: 'Tomorrow, 10:30 AM',
      type: 'Panel Interview',
      typeIcon: 'fas fa-users'
    },
    {
      candidateName: 'David Brown',
      position: 'Product Manager',
      date: 'Apr 7, 2025, 1:15 PM',
      type: '1:1 Interview',
      typeIcon: 'fas fa-user'
    }
  ];

  scheduleInterview() {
    console.log('Scheduling new interview');
  }

}
