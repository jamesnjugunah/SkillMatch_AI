import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Testimonial {
  quote: string;
  author: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: "This platform completely changed my job search. I was matched with a role that perfectly fits my skills, not just my previous job titles.",
      author: "- Sarah J., Software Developer"
    },
    {
      quote: "As a hiring manager, I've found candidates with exactly the skills we need, even from non-traditional backgrounds. Game changer!",
      author: "- Michael T., HR Director"
    },
    {
      quote: "I switched careers completely using this platform. The skills assessment showed me opportunities I never would have considered.",
      author: "- Alex R., Career Changer"
    }
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    }, 5000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
    this.stopSlideShow();
    this.startSlideShow();
  }

}
