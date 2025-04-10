import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileData: Profile = {
    name: 'Alex Johnson',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    links: {
      linkedin: '#',
      github: '#',
      portfolio: '#'
    },
    completionPercentage: 85,
    summary: [
      'Senior Frontend Developer with 6+ years of experience building responsive, user-friendly web applications. Specialized in React, TypeScript, and modern JavaScript frameworks. Passionate about creating intuitive user interfaces and optimizing application performance.',
      'Strong communicator with experience leading small development teams and mentoring junior developers. Committed to writing clean, maintainable code and implementing best practices.'
    ],
    experiences: [
      {
        title: 'Senior Frontend Developer',
        company: 'TechInnovate Inc.',
        location: 'San Francisco, CA',
        startDate: 'January 2022',
        endDate: 'Present',
        duration: '(3 years, 3 months)',
        description: [
          'Led the frontend development of the company\'s flagship SaaS product, increasing user engagement by 35%.',
          'Implemented modern React patterns and performance optimizations that reduced load times by 40%.',
          'Mentored junior developers and established code review processes and frontend development standards.'
        ],
        tags: ['React', 'TypeScript', 'Redux', 'Webpack', 'Jest']
      },
      {
        title: 'Frontend Developer',
        company: 'WebSolutions Co.',
        location: 'Austin, TX',
        startDate: 'March 2019',
        endDate: 'December 2021',
        duration: '(2 years, 10 months)',
        description: [
          'Developed responsive web applications for various clients using React and Vue.js.',
          'Collaborated with UX designers to implement pixel-perfect interfaces from design mockups.',
          'Built reusable component libraries that reduced development time by 25%.'
        ],
        tags: ['React', 'Vue.js', 'JavaScript', 'SCSS', 'REST APIs']
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California, Berkeley',
        period: '2015 - 2019',
        location: 'Berkeley, CA',
        description: [
          'GPA: 3.8/4.0',
          'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Human-Computer Interaction',
          'Senior Project: Developed a collaborative coding platform with real-time features'
        ]
      }
    ],
    skills: {
      frontend: [
        { name: 'React', level: 'Expert', percentage: 95 },
        { name: 'JavaScript', level: 'Expert', percentage: 90 },
        { name: 'TypeScript', level: 'Advanced', percentage: 85 },
        { name: 'HTML5/CSS3', level: 'Expert', percentage: 95 }
      ],
      tools: [
        { name: 'Redux', level: 'Advanced', percentage: 85 },
        { name: 'Webpack', level: 'Advanced', percentage: 80 },
        { name: 'Jest/Testing Library', level: 'Advanced', percentage: 80 }
      ],
      soft: ['Team Leadership', 'Communication', 'Problem Solving', 'Time Management', 'Mentoring', 'Agile Methodologies', 'Code Reviews']
    },
    resumes: [
      {
        name: 'Alex_Johnson_Resume_2025.pdf',
        type: 'pdf',
        uploadDate: 'April 1, 2025',
        isDefault: true
      },
      {
        name: 'Alex_Johnson_Resume_Technical.docx',
        type: 'word',
        uploadDate: 'March 15, 2025',
        isDefault: false
      }
    ],
    preferences: {
      jobTitles: ['Senior Frontend Developer', 'Lead Frontend Engineer', 'UI Engineer'],
      locations: ['San Francisco, CA', 'Remote', 'Seattle, WA'],
      jobTypes: ['Full-time', 'Contract'],
      workEnvironment: ['Remote', 'Hybrid'],
      salary: '$130,000 - $160,000 per year',
      industries: ['Tech', 'Finance', 'Healthcare', 'E-commerce'],
      relocation: 'Willing to relocate to selected cities',
      travel: 'Willing to travel up to 25%',
      workAuthorization: 'Authorized to work in the United States',
      noticePeriod: '2 weeks'
    }
  };

  constructor() { }

  getProfile(): Observable<Profile> {
    return of(this.profileData);
  }

  updateProfile(updatedProfile: Profile): Observable<Profile> {
    this.profileData = updatedProfile;
    return of(this.profileData);
  }
}
