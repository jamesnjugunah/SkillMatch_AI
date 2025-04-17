import { Skill } from './skill.model';
import { Experience } from './experience.model';

export interface UserProfile {
  fullName: string;
  email: string;
  profession: string;
  bio: string;
  skills: Skill[];
  experiences: Experience[];
}