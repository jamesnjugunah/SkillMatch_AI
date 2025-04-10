export interface Profile {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    links: {
      linkedin: string;
      github: string;
      portfolio: string;
    };
    completionPercentage: number;
    summary: string[];
    experiences: Experience[];
    education: Education[];
    skills: {
      frontend: Skill[];
      tools: Skill[];
      soft: string[];
    };
    resumes: Resume[];
    preferences: JobPreferences;
  }
  
export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    duration: string;
    description: string[];
    tags: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    period: string;
    location: string;
    description: string[];
  }
  
  export interface Skill {
    name: string;
    level: string;
    percentage: number;
  }
  
  export interface Resume {
    name: string;
    type: string;
    uploadDate: string;
    isDefault: boolean;
  }
  
  export interface JobPreferences {
    jobTitles: string[];
    locations: string[];
    jobTypes: string[];
    workEnvironment: string[];
    salary: string;
    industries: string[];
    relocation: string;
    travel: string;
    workAuthorization: string;
    noticePeriod: string;
  }