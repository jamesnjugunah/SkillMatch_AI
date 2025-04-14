// interviews.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Interview {
  id: number;
  candidateName: string;
  candidateAvatar: string;
  position: string;
  date: string;
  time: string;
  duration: number;
  interviewers: string[];
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'Pending';
  type: 'Technical' | 'Cultural' | 'HR' | 'Final';
  location: string;
  notes?: string;
}

@Component({
  selector: 'app-interviews',
  imports: [CommonModule, FormsModule],
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  interviews: Interview[] = [
    {
      id: 1,
      candidateName: 'Jennifer Lee',
      candidateAvatar: 'assets/avatars/avatar1.jpg',
      position: 'Senior Software Engineer',
      date: '2025-04-15',
      time: '10:00',
      duration: 60,
      interviewers: ['Alex Chen', 'Sarah Johnson'],
      status: 'Scheduled',
      type: 'Technical',
      location: 'Video Call - Google Meet',
      notes: 'Focus on system design and architecture experience'
    },
    {
      id: 2,
      candidateName: 'Michael Johnson',
      candidateAvatar: 'assets/avatars/avatar2.jpg',
      position: 'UX Designer',
      date: '2025-04-14',
      time: '14:30',
      duration: 45,
      interviewers: ['Lisa Wong'],
      status: 'Completed',
      type: 'Cultural',
      location: 'Conference Room A',
      notes: 'Portfolio looks impressive, discuss collaboration style'
    },
    {
      id: 3,
      candidateName: 'Sarah Williams',
      candidateAvatar: 'assets/avatars/avatar3.jpg',
      position: 'Product Manager',
      date: '2025-04-16',
      time: '11:15',
      duration: 60,
      interviewers: ['Robert Garcia', 'Michelle King'],
      status: 'Scheduled',
      type: 'HR',
      location: 'Video Call - Zoom',
      notes: 'Discuss salary expectations and notice period'
    },
    {
      id: 4,
      candidateName: 'David Chen',
      candidateAvatar: 'assets/avatars/avatar4.jpg',
      position: 'Data Scientist',
      date: '2025-04-20',
      time: '09:00',
      duration: 90,
      interviewers: ['James Wilson', 'Rachel Cohen'],
      status: 'Pending',
      type: 'Technical',
      location: 'Conference Room B',
      notes: 'Prepare case study on predictive modeling'
    },
    {
      id: 5,
      candidateName: 'Emily Rodriguez',
      candidateAvatar: 'assets/avatars/avatar5.jpg',
      position: 'Marketing Specialist',
      date: '2025-04-12',
      time: '13:00',
      duration: 60,
      interviewers: ['Thomas Brown'],
      status: 'Cancelled',
      type: 'Final',
      location: 'Video Call - Microsoft Teams',
      notes: 'Candidate accepted another offer'
    }
  ];

  statusOptions = ['All', 'Scheduled', 'Completed', 'Cancelled', 'Pending'];
  typeOptions = ['All', 'Technical', 'Cultural', 'HR', 'Final'];
  
  selectedStatus = 'All';
  selectedType = 'All';
  searchTerm = '';
  
  viewMode: 'calendar' | 'list' = 'calendar';
  selectedDate = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

  get filteredInterviews() {
    return this.interviews.filter(interview => {
      // Filter by status
      if (this.selectedStatus !== 'All' && interview.status !== this.selectedStatus) {
        return false;
      }
      
      // Filter by type
      if (this.selectedType !== 'All' && interview.type !== this.selectedType) {
        return false;
      }
      
      // Filter by search term
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const nameMatch = interview.candidateName.toLowerCase().includes(searchLower);
        const positionMatch = interview.position.toLowerCase().includes(searchLower);
        if (!nameMatch && !positionMatch) {
          return false;
        }
      }
      
      return true;
    });
  }
  
  get todayInterviews() {
    const today = new Date().toISOString().split('T')[0];
    return this.filteredInterviews.filter(interview => interview.date === today);
  }
  
  get upcomingInterviews() {
    const today = new Date().toISOString().split('T')[0];
    return this.filteredInterviews.filter(interview => interview.date > today);
  }
  
  get pastInterviews() {
    const today = new Date().toISOString().split('T')[0];
    return this.filteredInterviews.filter(interview => interview.date < today);
  }
  
  getStatusClass(status: string): string {
    switch (status) {
      case 'Scheduled': return 'bg-primary';
      case 'Completed': return 'bg-success';
      case 'Cancelled': return 'bg-danger';
      case 'Pending': return 'bg-warning';
      default: return 'bg-secondary';
    }
  }
  
  scheduleInterview() {
    console.log('Schedule new interview clicked');
    // Implement navigation to interview scheduling form
  }
}