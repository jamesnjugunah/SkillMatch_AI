import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JobListing {
  imgUrl?: string;
  company: string;
  location: string;
  title: string;
  salary: string;
  type: string;
  workMode: string;
  tags: string[];
}

interface InterviewEvent {
  date: string;
  time: string;
  title: string;
  company: string;
  position: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username = 'Alex';
  profileCompletion = 85;
  
  applicationStats = {
    total: 28,
    underReview: 12,
    interviews: 5,
    offers: 2
  };
  
  recommendedJobs: JobListing[] = [
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      title: 'Senior Frontend Developer',
      salary: '$120k - $150k',
      type: 'Full-time',
      workMode: 'On-site',
      tags: ['React', 'TypeScript', 'Redux', 'CSS3']
    },
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      company: 'InnovateX',
      location: 'Remote',
      title: 'Full Stack Engineer',
      salary: '$130k - $160k',
      type: 'Full-time',
      workMode: 'Remote',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      company: 'DataViz Solutions',
      location: 'Chicago, IL',
      title: 'UX/UI Designer',
      salary: '$90k - $120k',
      type: 'Full-time',
      workMode: 'Hybrid',
      tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping']
    }
  ];
  
  interviewEvents: InterviewEvent[] = [
    {
      date: 'April 4',
      time: '10:00 AM',
      title: 'Technical Interview',
      company: 'TechCorp',
      position: 'Senior Frontend Developer'
    },
    {
      date: 'April 8',
      time: '2:30 PM',
      title: 'HR Interview',
      company: 'InnovateX',
      position: 'Full Stack Engineer'
    }
  ];
  
  currentMonth = 'April 2025';
  
  // In a real implementation, these would be dynamically generated
  calendarDays = [
    { day: 31, isCurrentMonth: false, hasEvent: false, isToday: false },
    { day: 1, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 2, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 3, isCurrentMonth: true, hasEvent: false, isToday: true },
    { day: 4, isCurrentMonth: true, hasEvent: true, isToday: false },
    { day: 5, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 6, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 7, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 8, isCurrentMonth: true, hasEvent: true, isToday: false },
    { day: 9, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 10, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 11, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 12, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 13, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 14, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 15, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 16, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 17, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 18, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 19, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 20, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 21, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 22, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 23, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 24, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 25, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 26, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 27, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 28, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 29, isCurrentMonth: true, hasEvent: false, isToday: false },
    { day: 30, isCurrentMonth: true, hasEvent: false, isToday:false }    // More days would be added in a real implementation
  ];
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialization logic would go here
  }
  
  previousMonth(): void {
    // Logic to navigate to previous month
    console.log('Navigate to previous month');
  }
  
  nextMonth(): void {
    // Logic to navigate to next month
    console.log('Navigate to next month');
  }
  
  applyForJob(job: JobListing): void {
    console.log('Apply for job', job);
    // Implementation for job application
  }
  
  saveJob(job: JobListing): void {
    console.log('Save job', job);
    // Implementation for saving job
  }

}
