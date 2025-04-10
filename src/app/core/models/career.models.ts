import { Component } from '@angular/core';

export interface CareerPath {
  icon: string;
  title: string;
  description: string;
  progression: ProgressionItem[];
  skills: string[];
}

export interface ProgressionItem {
  title: string;
  timeEstimate: string;
  salary?: string;
  isCurrent?: boolean;
}

export interface Course {
  icon: string;
  title: string;
  description: string;
  duration: string;
  rating: string;
}

export interface LearningPath {
  title: string;
  icon: string;
  courses: Course[];
}