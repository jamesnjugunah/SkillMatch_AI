import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Candidate {
  name: string; 
  position: string;
  tags: string[];
}

interface PipelineStage {
  title: string;
  count: number;
  candidates: Candidate[];
}

@Component({
  selector: 'app-candidate-pipeline',
  imports: [ CommonModule ],
  templateUrl: './candidate-pipeline.component.html',
  styleUrl: './candidate-pipeline.component.css'
})
export class CandidatePipelineComponent {
  pipelineStages: PipelineStage[] = [
    {
      title: 'New Applications',
      count: 16,
      candidates: [
        {
          name: 'Emily Johnson',
          position: 'Senior Frontend Developer',
          tags: ['React', 'TypeScript']
        },
        {
          name: 'Michael Smith',
          position: 'UX/UI Designer',
          tags: ['Figma', 'User Research']
        }
      ]
    },
    {
      title: 'Screening',
      count: 8,
      candidates: [
        {
          name: 'Sarah Williams',
          position: 'DevOps Engineer',
          tags: ['AWS', 'Docker']
        },
        {
          name: 'David Brown',
          position: 'Product Manager',
          tags: ['Agile', 'SaaS']
        }
      ]
    },
    {
      title: 'Interview',
      count: 5,
      candidates: [
        {
          name: 'Alex Davis',
          position: 'Senior Frontend Developer',
          tags: ['Vue', 'JavaScript']
        }
      ]
    },
    {
      title: 'Offer',
      count: 2,
      candidates: [
        {
          name: 'Jessica Miller',
          position: 'UX/UI Designer',
          tags: ['Adobe XD', 'Prototyping']
        }
      ]
    }
  ];

  viewAllCandidates() {
    // Navigate to candidates page
    console.log('Viewing all candidates');
  }

}
