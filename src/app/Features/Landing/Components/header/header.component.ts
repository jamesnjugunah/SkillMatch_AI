import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  openLoginDialog(): void {
    this.authService.openLoginDialog();
  }
  
  openRegisterDialog(): void {
    this.authService.openRegisterDialog();
  }

  

}
