import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private userSettings: UserSettings = {
    id: 1,
    email: 'user@example.com',
    displayName: 'John Doe',
    notificationPreferences: {
      newJobs: true,
      applicationUpdates: true,
      jobAlerts: true,
      weeklyDigest: false
    },
    privacySettings: {
      profileVisibility: 'public',
      allowRecruiters: true,
      showSalary: false
    },
    theme: 'light',
    language: 'en'
  };

  constructor(private http: HttpClient) {}

  getUserSettings(): Observable<UserSettings> {
    // In a real app, this would make an API call
    return of(this.userSettings);
  }

  updateUserSettings(settings: UserSettings): Observable<UserSettings> {
    // In a real app, this would make an API call
    this.userSettings = { ...settings };
    return of(this.userSettings);
  }

  updateEmail(email: string): Observable<UserSettings> {
    this.userSettings.email = email;
    return of(this.userSettings);
  }

  updatePassword(currentPassword: string, newPassword: string): Observable<boolean> {
    // In a real app, this would make an API call
    // Password change simulation
    return of(true);
  }

  deleteAccount(password: string): Observable<boolean> {
    // In a real app, this would make an API call
    // Account deletion simulation
    return of(true);
  }
}