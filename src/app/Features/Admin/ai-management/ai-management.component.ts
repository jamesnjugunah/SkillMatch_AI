import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface AiModel {
  id: number;
  name: string;
  status: string;
  accuracy: string;
  lastTrained: string;
  usage: string;
}

@Component({
  selector: 'app-ai-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ai-management.component.html',
  styleUrls: ['./ai-management.component.css']
})
export class AiManagementComponent {

  aiModels: AiModel[] = [
    { id: 1, name: 'Text Classifier', status: 'Running', accuracy: '92.4%', lastTrained: '2025-04-10', usage: '1.2M requests/day' },
    { id: 2, name: 'Image Recognition', status: 'Updating', accuracy: '89.7%', lastTrained: '2025-04-01', usage: '780K requests/day' },
    { id: 3, name: 'Sentiment Analysis', status: 'Running', accuracy: '94.3%', lastTrained: '2025-04-15', usage: '3.5M requests/day' },
    { id: 4, name: 'Recommendation Engine', status: 'Error', accuracy: '87.1%', lastTrained: '2025-03-28', usage: '2.1M requests/day' }
  ];

  selectedModel: AiModel | null = null;
  isConfigModalOpen = false;
  isPerformanceModalOpen = false;
  isTrainingModalOpen = false;
  
  // Computed properties
  get runningModelsCount(): number {
    return this.aiModels.filter(m => m.status === 'Running').length;
  }

  get averageAccuracy(): string {
    const total = this.aiModels.reduce((sum, model) => {
      return sum + parseFloat(model.accuracy);
    }, 0);
    return (total / this.aiModels.length).toFixed(1) + '%';
  }

  performanceData = {
    daily: [65, 72, 78, 75, 82, 81, 89],
    weekly: [320, 350, 410, 390, 450, 420],
    monthly: [1200, 1350, 1450, 1600, 1580, 1650]
  };

  trainingProgress = 0;
  trainingInterval: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  openConfigModal(model: AiModel): void {
    this.selectedModel = { ...model };
    this.isConfigModalOpen = true;
  }

  closeConfigModal(): void {
    this.isConfigModalOpen = false;
  }

  saveConfig(): void {
    if (this.selectedModel) {
      const index = this.aiModels.findIndex(m => m.id === this.selectedModel?.id);
      if (index !== -1) {
        this.aiModels[index] = { ...this.selectedModel };
      }
    }
    this.isConfigModalOpen = false;
  }

  openPerformanceModal(model: AiModel): void {
    this.selectedModel = model;
    this.isPerformanceModalOpen = true;
  }

  closePerformanceModal(): void {
    this.isPerformanceModalOpen = false;
  }

  openTrainingModal(model: AiModel): void {
    this.selectedModel = model;
    this.trainingProgress = 0;
    this.isTrainingModalOpen = true;
    
    // Simulate training progress
    this.trainingInterval = setInterval(() => {
      this.trainingProgress += Math.random() * 10;
      if (this.trainingProgress >= 100) {
        this.trainingProgress = 100;
        clearInterval(this.trainingInterval);
      }
    }, 500);
  }

  closeTrainingModal(): void {
    if (this.trainingInterval) {
      clearInterval(this.trainingInterval);
    }
    this.isTrainingModalOpen = false;
  }

  restartModel(model: AiModel): void {
    const index = this.aiModels.findIndex(m => m.id === model.id);
    if (index !== -1) {
      this.aiModels[index].status = 'Running';
    }
  }

  pauseModel(model: AiModel): void {
    const index = this.aiModels.findIndex(m => m.id === model.id);
    if (index !== -1) {
      this.aiModels[index].status = 'Paused';
    }
  }

  generateReport(): void {
    // Start training when report is generated
    this.trainingProgress = 0;
    this.trainingInterval = setInterval(() => {
      this.trainingProgress += Math.random() * 10;
      if (this.trainingProgress >= 100) {
        this.trainingProgress = 100;
        clearInterval(this.trainingInterval);
      }
    }, 500);
  }
}
