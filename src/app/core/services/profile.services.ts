// src/app/services/profile.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';
import { Skill } from '../models/skill.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Initial data
  private initialProfile: UserProfile = {
    fullName: '',
    email: '',
    profession: '',
    bio: '',
    skills: [
      {
        id: 1,
        name: 'JavaScript',
        category: 'Programming',
        proficiency: 85
      },
      {
        id: 2,
        name: 'UI Design',
        category: 'Design',
        proficiency: 70
      },
      {
        id: 3,
        name: 'Project Management',
        category: 'Management',
        proficiency: 90
      }
    ],
    experiences: [
      {
        id: 1,
        jobTitle: 'Senior Developer',
        company: 'TechCorp Inc.',
        startDate: new Date('2020-01-01'),
        current: true,
        description: 'Led the development of web applications using modern frameworks and cloud technologies.'
      },
      {
        id: 2,
        jobTitle: 'Web Developer',
        company: 'Digital Solutions Ltd.',
        startDate: new Date('2017-03-01'),
        endDate: new Date('2019-12-31'),
        current: false,
        description: 'Developed responsive websites and implemented e-commerce solutions for clients.'
      },
      {
        id: 3,
        jobTitle: 'Junior Developer',
        company: 'StartUp Innovations',
        startDate: new Date('2015-09-01'),
        endDate: new Date('2017-02-28'),
        current: false,
        description: 'Assisted in the development of mobile applications and website maintenance.'
      }
    ]
  };

  private profileSubject = new BehaviorSubject<UserProfile>(this.initialProfile);
  public profile$ = this.profileSubject.asObservable();
  
  constructor() { }

  // Current step tracker
  private currentStepSubject = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStepSubject.asObservable();

  // Get current profile
  get currentProfile(): UserProfile {
    return this.profileSubject.value;
  }

  // Update profile
  updateProfile(profile: Partial<UserProfile>): void {
    this.profileSubject.next({
      ...this.profileSubject.value,
      ...profile
    });
  }

  // Update current step
  setCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }

  // Add new skill
  addSkill(skill: Skill): void {
    const skills = [...this.currentProfile.skills];
    const newSkill = {
      ...skill,
      id: this.getNextSkillId()
    };
    
    skills.push(newSkill);
    this.updateProfile({ skills });
  }

  // Add new experience
  addExperience(experience: Experience): void {
    const experiences = [...this.currentProfile.experiences];
    const newExperience = {
      ...experience,
      id: this.getNextExperienceId()
    };
    
    experiences.push(newExperience);
    this.updateProfile({ experiences });
  }

  // Get next available IDs
  private getNextSkillId(): number {
    return Math.max(0, ...this.currentProfile.skills.map(s => s.id || 0)) + 1;
  }

  private getNextExperienceId(): number {
    return Math.max(0, ...this.currentProfile.experiences.map(e => e.id || 0)) + 1;
  }

  // Get average skill proficiency
  getAverageSkillProficiency(): number {
    const skills = this.currentProfile.skills;
    if (skills.length === 0) return 0;
    
    const sum = skills.reduce((acc, skill) => acc + skill.proficiency, 0);
    return Math.round(sum / skills.length);
  }

  // Get experience years
  getTotalExperienceYears(): number {
    const experiences = this.currentProfile.experiences;
    if (experiences.length === 0) return 0;
    
    let totalMonths = 0;
    const now = new Date();
    
    experiences.forEach(exp => {
      const endDate = exp.current ? now : (exp.endDate || now);
      const startDate = exp.startDate;
      
      const monthDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                         (endDate.getMonth() - startDate.getMonth());
      
      totalMonths += monthDiff;
    });
    
    return Math.round(totalMonths / 12);
  }
}