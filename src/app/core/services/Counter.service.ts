import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  animateCounter(element: HTMLElement, target: number, duration = 2000): void {
    const start = 0;
    const increment = Math.ceil(target / (duration / 16));
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = current.toLocaleString();
      }
    }, 16);
  }
}