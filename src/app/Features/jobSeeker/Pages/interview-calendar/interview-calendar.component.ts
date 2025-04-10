import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Interview } from '../../../../core/models/interviews.model';
import { CalendarDay } from '../../../../core/models/interviews.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview-calendar',
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './interview-calendar.component.html',
  styleUrl: './interview-calendar.component.css'
})
export class InterviewCalendarComponent implements OnInit {
  currentDate = new Date();
  selectedDate: Date | null = null;
  calendarDays: CalendarDay[] = [];
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  interviews: Interview[] = [];
  selectedMonthInterviews: Interview[] = [];
  selectedDateInterviews: Interview[] = [];
  
  interviewForm: FormGroup;
  showForm = false;
  editMode = false;
  editIndex = -1;

  timeSlots: string[] = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  constructor(private fb: FormBuilder) {
    this.interviewForm = this.fb.group({
      candidateName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      date: [null, [Validators.required]],
      time: ['', [Validators.required]],
      duration: [60, [Validators.required, Validators.min(15)]],
      interviewers: [[], [Validators.required]],
      notes: ['']
    });
  }

  ngOnInit(): void {
    // Sample data
    this.interviews = [
      {
        id: 1,
        candidateName: 'John Smith',
        position: 'Frontend Developer',
        date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 15),
        time: '10:00 AM',
        duration: 60,
        interviewers: ['Alice Johnson', 'Bob Miller'],
        notes: 'First round technical interview'
      },
      {
        id: 2,
        candidateName: 'Jane Wilson',
        position: 'UX Designer',
        date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 18),
        time: '02:00 PM',
        duration: 45,
        interviewers: ['Chris Davis', 'Diana Evans'],
        notes: 'Portfolio review'
      }
    ];
    
    this.generateCalendar();
    this.filterInterviewsForMonth();
  }

  generateCalendar(): void {
    this.calendarDays = [];
    
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of the week for the first day (0-6)
    const firstDayIndex = firstDay.getDay();
    
    // Days from previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = 0; i < firstDayIndex; i++) {
      const date = new Date(year, month - 1, prevMonthLastDay - firstDayIndex + i + 1);
      this.calendarDays.push({
        date,
        isCurrentMonth: false,
        hasInterview: this.hasInterviewOnDate(date),
        interviews: this.getInterviewsForDate(date)
      });
    }
    
    // Days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      this.calendarDays.push({
        date,
        isCurrentMonth: true,
        hasInterview: this.hasInterviewOnDate(date),
        interviews: this.getInterviewsForDate(date)
      });
    }
    
    // Fill remaining days from next month
    const remainingDays = 42 - this.calendarDays.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      this.calendarDays.push({
        date,
        isCurrentMonth: false,
        hasInterview: this.hasInterviewOnDate(date),
        interviews: this.getInterviewsForDate(date)
      });
    }
  }

  hasInterviewOnDate(date: Date): boolean {
    return this.interviews.some(interview => 
      interview.date.getFullYear() === date.getFullYear() &&
      interview.date.getMonth() === date.getMonth() &&
      interview.date.getDate() === date.getDate()
    );
  }

  getInterviewsForDate(date: Date): Interview[] {
    return this.interviews.filter(interview => 
      interview.date.getFullYear() === date.getFullYear() &&
      interview.date.getMonth() === date.getMonth() &&
      interview.date.getDate() === date.getDate()
    );
  }

  filterInterviewsForMonth(): void {
    this.selectedMonthInterviews = this.interviews.filter(interview => 
      interview.date.getFullYear() === this.currentDate.getFullYear() &&
      interview.date.getMonth() === this.currentDate.getMonth()
    );
  }
  updateInterviewers(value: string): void {
    const interviewers = value.split(',')
      .map(interviewer => interviewer.trim())
      .filter(interviewer => interviewer);
    
    this.interviewForm.get('interviewers')?.setValue(interviewers);
    this.interviewForm.get('interviewers')?.markAsTouched();
  }

  selectDate(day: CalendarDay): void {
    this.selectedDate = day.date;
    this.selectedDateInterviews = day.interviews;
    this.interviewForm.patchValue({ date: day.date });
  }

  prevMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
    this.filterInterviewsForMonth();
    this.selectedDate = null;
    this.selectedDateInterviews = [];
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
    this.filterInterviewsForMonth();
    this.selectedDate = null;
    this.selectedDateInterviews = [];
  }

  openNewInterviewForm(): void {
    this.interviewForm.reset();
    this.interviewForm.patchValue({
      date: this.selectedDate,
      duration: 60,
      interviewers: []
    });
    this.showForm = true;
    this.editMode = false;
  }

  editInterview(interview: Interview): void {
    this.editMode = true;
    this.editIndex = this.interviews.findIndex(i => i.id === interview.id);
    this.interviewForm.patchValue({
      candidateName: interview.candidateName,
      position: interview.position,
      date: interview.date,
      time: interview.time,
      duration: interview.duration,
      interviewers: interview.interviewers,
      notes: interview.notes
    });
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editMode = false;
    this.interviewForm.reset();
  }

  saveInterview(): void {
    if (this.interviewForm.valid) {
      const formValue = this.interviewForm.value;
      
      if (this.editMode && this.editIndex >= 0) {
        // Update existing interview
        this.interviews[this.editIndex] = {
          ...this.interviews[this.editIndex],
          candidateName: formValue.candidateName,
          position: formValue.position,
          date: formValue.date,
          time: formValue.time,
          duration: formValue.duration,
          interviewers: formValue.interviewers,
          notes: formValue.notes
        };
      } else {
        // Add new interview
        const newInterview: Interview = {
          id: this.interviews.length + 1,
          candidateName: formValue.candidateName,
          position: formValue.position,
          date: formValue.date,
          time: formValue.time,
          duration: formValue.duration,
          interviewers: formValue.interviewers,
          notes: formValue.notes
        };
        
        this.interviews.push(newInterview);
      }
      
      this.closeForm();
      this.generateCalendar();
      this.filterInterviewsForMonth();
      
      if (this.selectedDate) {
        this.selectedDateInterviews = this.getInterviewsForDate(this.selectedDate);
      }
    }
  }

  deleteInterview(interview: Interview): void {
    if (confirm('Are you sure you want to delete this interview?')) {
      const index = this.interviews.findIndex(i => i.id === interview.id);
      if (index >= 0) {
        this.interviews.splice(index, 1);
        this.generateCalendar();
        this.filterInterviewsForMonth();
        
        if (this.selectedDate) {
          this.selectedDateInterviews = this.getInterviewsForDate(this.selectedDate);
        }
      }
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return this.isSameDay(date, today);
  }

}
