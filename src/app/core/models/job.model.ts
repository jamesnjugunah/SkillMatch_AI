export interface Job {
    id: number;
    company: {
      name: string;
      location: string;
      logoUrl: string;
    };
    title: string;
    salary: string;
    type: string;
    location: string;
    tags: string[];
    savedDate?: Date;
    applicationStatus?: string;
    applicationDate?: Date;
  }