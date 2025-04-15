import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CareerPath, LearningPath, Course, ProgressionItem } from '../../../core/models/career.models';

@Component({
  selector: 'app-career-path',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './career-path.component.html',
  styleUrl: './career-path.component.css'
})
export class CareerPathComponent {
  currentPosition = {
    title: 'Senior Frontend Developer',
    experienceLevel: '6+ years',
    salaryRange: '$120k - $150k',
    marketDemand: 'High'
  };

  selectedPathFilter = 'all';

  careerPaths: CareerPath[] = [
    {
      icon: 'fas fa-code',
      title: 'Technical Leadership',
      description: 'Deepen technical expertise and lead development efforts',
      progression: [
        {
          title: 'Senior Frontend Developer',
          timeEstimate: 'You are here',
          isCurrent: true
        },
        {
          title: 'Lead Frontend Developer',
          timeEstimate: 'Est. 1-2 years',
          salary: '$140k - $170k'
        },
        {
          title: 'Frontend Architect',
          timeEstimate: 'Est. 3-4 years',
          salary: '$160k - $190k'
        },
        {
          title: 'Principal Engineer',
          timeEstimate: 'Est. 5+ years',
          salary: '$180k - $220k+'
        }
      ],
      skills: ['Architecture Design', 'Performance Optimization', 'Technical Decision Making', 'Mentorship', 'Systems Design']
    },
    {
      icon: 'fas fa-users',
      title: 'Engineering Management',
      description: 'Focus on team leadership and project management',
      progression: [
        {
          title: 'Senior Frontend Developer',
          timeEstimate: 'You are here',
          isCurrent: true
        },
        {
          title: 'Team Lead',
          timeEstimate: 'Est. 1-2 years',
          salary: '$140k - $165k'
        },
        {
          title: 'Engineering Manager',
          timeEstimate: 'Est. 3-4 years',
          salary: '$160k - $190k'
        },
        {
          title: 'Director of Engineering',
          timeEstimate: 'Est. 5+ years',
          salary: '$180k - $240k+'
        }
      ],
      skills: ['Team Leadership', 'Project Management', 'Resource Planning', 'Conflict Resolution', 'Strategic Planning']
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'UX Engineering Specialist',
      description: 'Specializing in the intersection of design and development',
      progression: [
        {
          title: 'Senior Frontend Developer',
          timeEstimate: 'You are here',
          isCurrent: true
        },
        {
          title: 'UX Engineer',
          timeEstimate: 'Est. 1-2 years',
          salary: '$130k - $160k'
        },
        {
          title: 'Senior UX Engineer',
          timeEstimate: 'Est. 2-3 years',
          salary: '$150k - $180k'
        },
        {
          title: 'Design Systems Architect',
          timeEstimate: 'Est. 4+ years',
          salary: '$170k - $200k+'
        }
      ],
      skills: ['UI/UX Design', 'Design Systems', 'Accessibility', 'User Research', 'Motion Design']
    }
  ];

  learningPaths: LearningPath[] = [
    {
      title: 'Technical Leadership Path',
      icon: 'fas fa-code',
      courses: [
        {
          icon: 'fas fa-laptop-code',
          title: 'Advanced Frontend Architecture',
          description: 'Learn scalable patterns for complex applications',
          duration: '24 hours',
          rating: '4.8/5'
        },
        {
          icon: 'fas fa-sitemap',
          title: 'Systems Design for Frontend Engineers',
          description: 'Design robust and scalable frontend architectures',
          duration: '32 hours',
          rating: '4.7/5'
        }
      ]
    },
    {
      title: 'Engineering Management Path',
      icon: 'fas fa-users',
      courses: [
        {
          icon: 'fas fa-tasks',
          title: 'Project Management for Engineers',
          description: 'Master the skills to lead technical projects effectively',
          duration: '20 hours',
          rating: '4.6/5'
        },
        {
          icon: 'fas fa-user-friends',
          title: 'Leadership in Technical Teams',
          description: 'Develop skills to inspire and lead developers',
          duration: '18 hours',
          rating: '4.9/5'
        }
      ]
    }
  ];

  filterPaths(filter: string): void {
    this.selectedPathFilter = filter;
  }

  getFilteredPaths(): CareerPath[] {
    if (this.selectedPathFilter === 'all') {
      return this.careerPaths;
    }
    
    // This would need more logic to properly filter based on path types
    // For now returning all paths as a placeholder
    return this.careerPaths;
  }

  setAsGoal(pathTitle: string): void {
    // Implementation for setting a career path as goal
    console.log(`Set ${pathTitle} as goal`);
  }

  exploreJobs(pathTitle: string): void {
    // Implementation for exploring jobs for a career path
    console.log(`Explore jobs for ${pathTitle}`);
  }

  viewCourse(courseTitle: string): void {
    // Implementation for viewing a course
    console.log(`View course: ${courseTitle}`);
  }

}
