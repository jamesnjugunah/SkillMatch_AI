export interface Interview {
    id: number;
    candidateName: string;
    position: string;
    date: Date;
    time: string;
    duration: number;
    interviewers: string[];
    notes: string;
  }
  
 export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    hasInterview: boolean;
    interviews: Interview[];
  }