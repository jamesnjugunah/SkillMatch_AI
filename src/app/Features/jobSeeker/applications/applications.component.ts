import { Component} from '@angular/core';
import { OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Application { 
  imgUrl: string;
  jobTitle: string;
  company: string;
  companyLogo: string;
  appliedDate: string;
  status: 'review' | 'interview' | 'rejected' | 'offer';
  statusText: string;
  lastUpdate: string;
}

interface Deadline {
  day: string;
  month: string;
  jobTitle: string;
  company: string;
  location: string;
}
@Component({
  selector: 'app-applications',
  imports: [ CommonModule, FormsModule],
  standalone: true,  
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent implements OnInit {
  filterValue = 'all';
  searchText = '';
  
  stats = {
    total: 28,
    review: 12,
    interviews: 5,
    rejected: 9,
    offers: 2
  };

  applications: Application[] = [
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      jobTitle: 'Full Stack Engineer',
      company: 'InnovateX',
      companyLogo: '/api/placeholder/30/30',
      appliedDate: 'March 25, 2025',
      status: 'review',
      statusText: 'Under Review',
      lastUpdate: 'April 1, 2025'
    },
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      jobTitle: 'Product Manager',
      company: 'GrowthLabs',
      companyLogo: '/api/placeholder/30/30',
      appliedDate: 'March 18, 2025',
      status: 'interview',
      statusText: 'Interview Scheduled',
      lastUpdate: 'March 30, 2025'
    },
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      jobTitle: 'DevOps Engineer',
      company: 'CloudSystems',
      companyLogo: '/api/placeholder/30/30',
      appliedDate: 'March 15, 2025',
      status: 'rejected',
      statusText: 'Rejected',
      lastUpdate: 'March 28, 2025'
    },
    {
      imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAjVBMVEWBvAYFpvD/ugjzUyXz8/P/tAB4uADzRAD79///+fPz/v/y9/8AoPDz9vf29PjJ3q3z5ODznYrn7d3zpZS51ouLy/H51Yzf7PKAx/H07t/zu7DzPQD60oCz03/43a+v1vIAm/Ct0HP70Hfz0cra5sbzKgDzlX9osgDzxbvS4rft8Oa23PL24rfL4/P25sqT88jpAAABZ0lEQVR4nO3cSU4CURSGUVQ6gYdiiwoCaolis//lOYAHiWXiQK9WKucbV+q+s4G/0axRjf9+wG+2w1wHdZ/W/x8+HAVVwqTj4iak4rG3vtBdLNshLU+GJUznIKTOKGOm7UZMMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMNXGFJ2Qii1mEbPU8uVUy+g0pqfNiE73+Sym6eozppl6QaV8oRtVttR1q6kGwVQ1mKq2wxxGlQ/0o0olzOX4PKaXjab/OrkIabJKJcx8ENJ8nDF3raCuypjBXkiDLWbS2g8JBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGpuKYOk21pFlQb/nA+21QmfCXW03p+09+WK2Gpz4AV27eW58s/fkAAAAASUVORK5CYII=',
      jobTitle: 'Marketing Specialist',
      company: 'BrandBoost',
      companyLogo: '/api/placeholder/30/30',
      appliedDate: 'March 10, 2025',
      status: 'offer',
      statusText: 'Offer Received',
      lastUpdate: 'March 27, 2025'
    }
  ];

  upcomingDeadlines: Deadline[] = [
    {
      day: '05',
      month: 'Apr',
      jobTitle: 'Data Scientist',
      company: 'AnalyticsPro',
      location: 'New York, NY'
    },
    {
      day: '07',
      month: 'Apr',
      jobTitle: 'Technical Writer',
      company: 'DocuTech',
      location: 'Remote'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getFilteredApplications(): Application[] {
    let filtered = this.applications;
    
    // Apply status filter
    if (this.filterValue !== 'all') {
      filtered = filtered.filter(app => app.status === this.filterValue);
    }
    
    // Apply search filter
    if (this.searchText.trim()) {
      const search = this.searchText.toLowerCase();
      filtered = filtered.filter(app => 
        app.jobTitle.toLowerCase().includes(search) || 
        app.company.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  }

  onFilterChange(event: Event): void {
    this.filterValue = (event.target as HTMLSelectElement).value;
  }

  onSearchChange(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  viewDetails(application: Application): void {
    console.log('Viewing details for', application);
    // Implement view logic
  }

  editNotes(application: Application): void {
    console.log('Editing notes for', application);
    // Implement edit logic
  }

  deleteApplication(application: Application): void {
    console.log('Deleting', application);
    // Implement delete logic
  }

  applyForJob(deadline: Deadline): void {
    console.log('Applying for', deadline);
    // Implement apply logic
  }
}
