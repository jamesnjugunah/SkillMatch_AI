import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    
    // Redirect to appropriate page based on user type
    if (this.authService.isJobseeker()) {
      this.router.navigate(['/jobseekers']);
    } else if (this.authService.isRecruiter()) {
      this.router.navigate(['/recruiters']);
    } else {
      this.router.navigate(['']);
    }
    
    return false;
  }
}