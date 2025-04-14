import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent implements OnInit {
  candidates = [
    {
      id: 1,
      name: 'Jennifer Lee',
      position: 'Senior Software Engineer',
      stage: 'Technical Interview',
      rating: 4.5,
      appliedDate: '2025-03-20',
      source: 'LinkedIn',
      tags: ['JavaScript', 'React', 'Node.js'],
      imageUrl: 'assets/avatars/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Michael Johnson',
      position: 'UX Designer',
      stage: 'Portfolio Review',
      rating: 4.0,
      appliedDate: '2025-03-25',
      source: 'Referral',
      tags: ['Figma', 'UI Design', 'Prototyping'],
      imageUrl: 'assets/avatars/avatar2.jpg'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      position: 'Product Manager',
      stage: 'HR Screening',
      rating: 3.5,
      appliedDate: '2025-04-01',
      source: 'Indeed',
      tags: ['Agile', 'JIRA', 'Product Development'],
      imageUrl: 'assets/avatars/avatar3.jpg'
    },
    {
      id: 4,
      name: 'David Chen',
      position: 'Data Scientist',
      stage: 'Offer Extended',
      rating: 5.0,
      appliedDate: '2025-03-15',
      source: 'University Recruiting',
      tags: ['Python', 'Machine Learning', 'SQL'],
      imageUrl: 'assets/avatars/avatar4.jpg'
    },
    {
      id: 5,
      name: 'Emily Rodriguez',
      position: 'Marketing Specialist',
      stage: 'Application Review',
      rating: 3.0,
      appliedDate: '2025-04-05',
      source: 'Company Website',
      tags: ['Digital Marketing', 'Content Strategy', 'SEO'],
      imageUrl: 'assets/avatars/avatar5.jpg'
    }
  ];

  stageOptions = ['All Stages', 'Application Review', 'HR Screening', 'Technical Interview', 'Portfolio Review', 'Offer Extended'];
  positionOptions = ['All Positions', 'Senior Software Engineer', 'UX Designer', 'Product Manager', 'Data Scientist', 'Marketing Specialist'];
  
  selectedStage = 'All Stages';
  selectedPosition = 'All Positions';
  searchTerm = '';
  viewMode = 'grid'; // 'grid' or 'table'

  constructor() { }

  ngOnInit(): void {
  }

  get filteredCandidates() {
    return this.candidates.filter(candidate => {
      // Filter by stage
      if (this.selectedStage !== 'All Stages' && candidate.stage !== this.selectedStage) {
        return false;
      }
      
      // Filter by position
      if (this.selectedPosition !== 'All Positions' && candidate.position !== this.selectedPosition) {
        return false;
      }
      
      // Filter by search term (name or tags)
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        const nameMatch = candidate.name.toLowerCase().includes(searchLower);
        const tagMatch = candidate.tags.some(tag => tag.toLowerCase().includes(searchLower));
        if (!nameMatch && !tagMatch) {
          return false;
        }
      }
      
      return true;
    });
  }

}
