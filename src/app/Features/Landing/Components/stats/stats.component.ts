import { Component, ElementRef } from '@angular/core';
import { CounterService } from '../../../../core/services/Counter.service'; 
import { CommonModule } from '@angular/common';

interface StatItem {
  id: string;
  value: number;
  label: string;
}
@Component({
  selector: 'app-stats',
  imports: [ CommonModule ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})

export class StatsComponent {
  stats: StatItem[] = [
    { id: 'users-counter', value: 150000, label: 'Active Users' },
    { id: 'matches-counter', value: 85000, label: 'Successful Matches' },
    { id: 'companies-counter', value: 3200, label: 'Partner Companies' },
    { id: 'satisfaction-counter', value: 98, label: 'Satisfaction Rate' }
  ];

  constructor(private el: ElementRef, private counterService: CounterService) { }
  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.el.nativeElement);
  }

  animateCounters() {
    this.stats.forEach(stat => {
      const element = document.getElementById(stat.id);
      if (element) {
        this.counterService.animateCounter(element, stat.value);
      }
    });
  }

}
