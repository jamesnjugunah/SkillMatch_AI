import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

@Component({
  selector: 'app-action-items',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './action-items.component.html',
  styleUrl: './action-items.component.css'
})
export class ActionItemsComponent {
  tasks: Task[] = [
    {
      id: 'task1',
      title: 'Review applications for Frontend Developer',
      dueDate: 'Today',
      priority: 'high',
      completed: false
    },
    {
      id: 'task2',
      title: 'Prepare offer for Jessica Miller',
      dueDate: 'Tomorrow',
      priority: 'medium',
      completed: false
    },
    {
      id: 'task3',
      title: 'Schedule interview with Alex Davis',
      dueDate: 'Apr 6, 2025',
      priority: 'high',
      completed: false
    },
    {
      id: 'task4',
      title: 'Update DevOps Engineer job description',
      dueDate: 'Apr 8, 2025',
      priority: 'medium',
      completed: false
    }
  ];

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  addNewTask() {
    console.log('Adding new task');
  }

}
