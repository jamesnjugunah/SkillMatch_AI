// report.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'api/reports';
  
  // For demo purposes, we'll use mock data
  // In a real application, these would come from API calls
  
  constructor(private http: HttpClient) { }
  
  getSummaryMetrics(filters: any): Observable<any> {
    // In a real app, this would be an API call with filters
    // return this.http.get(`${this.apiUrl}/metrics`, { params: this.buildParams(filters) });
    
    // Mock data
    return of({
      totalUsers: 2547,
      activeUsers: 1893,
      jobsPosted: 437,
      applications: 3215,
      matchRate: 68.5,
      avgResponseTime: 18.3
    }).pipe(delay(800)); // Simulate network delay
  }
  
  getTimeSeriesData(filters: any): Observable<any> {
    // In a real app, this would be an API call with filters
    // return this.http.get(`${this.apiUrl}/timeseries`, { params: this.buildParams(filters) });
    
    // Mock data
    const dates = this.generateDateLabels(7);
    
    return of({
      dates,
      jobSeekers: [1250, 1320, 1390, 1450, 1510, 1580, 1650],
      recruiters: [720, 740, 765, 790, 810, 840, 870],
      jobsPosted: [57, 63, 59, 68, 72, 70, 75],
      applications: [410, 430, 455, 470, 490, 510, 530],
      matchRates: [65.2, 66.8, 67.3, 68.0, 68.2, 68.4, 68.5]
    }).pipe(delay(1000)); // Simulate network delay
  }
  
  getTopSkills(filters: any): Observable<any> {
    // In a real app, this would be an API call with filters
    // return this.http.get(`${this.apiUrl}/skills`, { params: this.buildParams(filters) });
    
    // Mock data
    return of([
      { name: 'JavaScript', demandPercentage: 78, growth: 5.3 },
      { name: 'React', demandPercentage: 72, growth: 8.7 },
      { name: 'Python', demandPercentage: 68, growth: 12.5 },
      { name: 'AWS', demandPercentage: 65, growth: 7.2 },
      { name: 'TypeScript', demandPercentage: 61, growth: 15.8 },
      { name: 'SQL', demandPercentage: 58, growth: -2.1 },
      { name: 'Node.js', demandPercentage: 52, growth: 3.9 },
      { name: 'Angular', demandPercentage: 47, growth: -1.5 },
      { name: 'Docker', demandPercentage: 43, growth: 9.2 },
      { name: 'MongoDB', demandPercentage: 38, growth: 0 }
    ]).pipe(delay(900)); // Simulate network delay
  }
  
  getRecentMatches(filters: any): Observable<any> {
    // In a real app, this would be an API call with filters
    // return this.http.get(`${this.apiUrl}/matches`, { params: this.buildParams(filters) });
    
    // Mock data
    const now = new Date();
    
    return of([
      { 
        date: new Date(now.getTime() - 1000 * 60 * 60 * 2), // 2 hours ago
        jobTitle: 'Senior Frontend Developer',
        candidateName: 'Alex Johnson',
        matchScore: 92
      },
      { 
        date: new Date(now.getTime() - 1000 * 60 * 60 * 5), // 5 hours ago
        jobTitle: 'Full Stack Engineer',
        candidateName: 'Maria Rodriguez',
        matchScore: 87
      },
      { 
        date: new Date(now.getTime() - 1000 * 60 * 60 * 7), // 7 hours ago
        jobTitle: 'DevOps Engineer',
        candidateName: 'Daniel Lee',
        matchScore: 85
      },
      { 
        date: new Date(now.getTime() - 1000 * 60 * 60 * 12), // 12 hours ago
        jobTitle: 'Data Scientist',
        candidateName: 'Sarah Patel',
        matchScore: 78
      },
      { 
        date: new Date(now.getTime() - 1000 * 60 * 60 * 24), // 1 day ago
        jobTitle: 'UI/UX Designer',
        candidateName: 'Michael Chen',
        matchScore: 75
      },
      { 
        date: new Date(now.getTime() - 1000 * 60 * 60 * 36), // 1.5 days ago
        jobTitle: 'Product Manager',
        candidateName: 'Emily Wilson',
        matchScore: 69
      }
    ]).pipe(delay(850)); // Simulate network delay
  }
  
  exportReport(format: string, sections: string[], filters: any): Observable<Blob> {
    // In a real app, this would be an API call to generate and download the report
    // return this.http.post(`${this.apiUrl}/export`, { format, sections, filters }, { responseType: 'blob' });
    
    // Mock data - just returning a simple blob for demo purposes
    const text = `Mock ${format.toUpperCase()} Report\n` + 
                 `Sections: ${sections.join(', ')}\n` + 
                 `Filters: ${JSON.stringify(filters)}`;
                 
    let mimeType: string;
    switch(format) {
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'excel':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'csv':
        mimeType = 'text/csv';
        break;
      default:
        mimeType = 'text/plain';
    }
    
    const blob = new Blob([text], { type: mimeType });
    return of(blob).pipe(delay(1500)); // Simulate longer processing time
  }
  
  private buildParams(filters: any): HttpParams {
    let params = new HttpParams();
    
    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    }
    
    return params;
  }
  
  private generateDateLabels(numDays: number): string[] {
    const result: string[] = [];
    const today = new Date();
    
    for (let i = numDays - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      result.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    
    return result;
  }
}