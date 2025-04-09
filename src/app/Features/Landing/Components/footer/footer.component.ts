import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [ CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerLinks: FooterLink[] = [
    { text: 'About Us', url: '#' },
    { text: 'For Job Seekers', url: '#' },
    { text: 'For Employers', url: '#' },
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Service', url: '#' },
    { text: 'Contact Us', url: '#' }
  ];

  currentYear = new Date().getFullYear();
}
