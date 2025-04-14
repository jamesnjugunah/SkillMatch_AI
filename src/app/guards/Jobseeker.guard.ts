import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobseekerGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isJobseeker()) {
      return true;
    }
    
    // Redirect to appropriate page based on user type
    if (this.authService.isRecruiter()) {
      this.router.navigate(['/recruiters']);
    } else if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['']);
    }
    
    return false;
  }
}