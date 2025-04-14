// services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../../components/register-modal/register-modal.component';
import { LoginDialogComponent } from '../../components/login-modal/login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }
  
  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
  
  isAdmin(): boolean {
    const user = this.currentUserSubject.value;
    return user && user.role === 'admin';
  }
  isJobseeker(): boolean {
    const user = this.currentUserSubject.value;
    return user && user.role === 'jobseeker';
  }
  isRecruiter(): boolean {
    const user = this.currentUserSubject.value;
    return user && user.role === 'recruiter';
  }
  
  login(email: string, password: string): Observable<any> {
    // Replace with your actual API endpoint
    return this.http.post<any>('/api/auth/login', { email, password })
      .pipe(
        tap(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }
  
  register(userData: any): Observable<any> {
    // Replace with your actual API endpoint
    return this.http.post<any>('/api/auth/register', userData)
      .pipe(
        tap(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }
  
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'register') {
        this.openRegisterDialog();
      }
    });
  }
  
  openRegisterDialog(): void {
    this.dialog.open(RegisterDialogComponent);
  }
}