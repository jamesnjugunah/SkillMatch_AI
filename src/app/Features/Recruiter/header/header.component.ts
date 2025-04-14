import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [ CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user = {
    name: 'John Doe',
    initials: 'JD'
  };

  notifications = 3;
  messages = 5;

}
