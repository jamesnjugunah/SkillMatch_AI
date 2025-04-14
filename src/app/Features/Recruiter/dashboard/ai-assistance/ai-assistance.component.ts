import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AssistantAction {
  icon: string;
  title: string;
  description: string;
  action: () => void;
}

@Component({
  selector: 'app-ai-assistance',
  imports: [ CommonModule ],
  templateUrl: './ai-assistance.component.html',
  styleUrl: './ai-assistance.component.css'
})
export class AiAssistanceComponent {
  assistantActions: AssistantAction[] = [
    {
      icon: 'fas fa-search',
      title: 'Find Candidates',
      description: 'Search for candidates by skills',
      action: () => this.findCandidates()
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Craft Job Description',
      description: 'Get help writing job posts',
      action: () => this.craftJobDescription()
    },
    {
      icon: 'fas fa-comments',
      title: 'Interview Questions',
      description: 'Generate role-specific questions',
      action: () => this.generateInterviewQuestions()
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Analyze Candidate',
      description: 'Get insights from resumes',
      action: () => this.analyzeCandidate()
    }
  ];

  findCandidates() {
    console.log('Finding candidates');
  }

  craftJobDescription() {
    console.log('Crafting job description');
  }

  generateInterviewQuestions() {
    console.log('Generating interview questions');
  }

  analyzeCandidate() {
    console.log('Analyzing candidate');
  }

  openSettings() {
    console.log('Opening AI assistant settings');
  }

}
