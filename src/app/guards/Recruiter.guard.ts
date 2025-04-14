// Recruiter guard

// check if the user has registered as a recruiter
// and is logged in
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../app/core/services/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class RecruiterGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.authService.isJobseeker()) {
        return true;
      }
      
      // Redirect to appropriate page based on user type
      if (this.authService.isRecruiter()) {
        this.router.navigate(['/jobseeker']);
      } else if (this.authService.isAdmin()) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['']);
      }
      
      return false;
    }
  }