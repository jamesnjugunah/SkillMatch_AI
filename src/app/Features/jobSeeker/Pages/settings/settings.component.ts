import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSettings } from '../../../../core/models/settings.model';
import { SettingsService } from '../../../../core/services/setting.service';

@Component({
  selector: 'app-settings',
  imports: [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  activeTab: string = 'account';
  userSettings: UserSettings | null = null;
  isLoading: boolean = true;
  saveSuccess: boolean = false;
  saveError: boolean = false;
  
  accountForm: FormGroup;
  notificationForm: FormGroup;
  privacyForm: FormGroup;
  passwordForm: FormGroup;
  
  themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System Default' }
  ];
  
  languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' }
  ];
  
  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder
  ) {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', Validators.required],
      theme: ['light'],
      language: ['en']
    });
    
    this.notificationForm = this.fb.group({
      newJobs: [true],
      applicationUpdates: [true],
      jobAlerts: [true],
      weeklyDigest: [false]
    });
    
    this.privacyForm = this.fb.group({
      profileVisibility: ['public'],
      allowRecruiters: [true],
      showSalary: [false]
    });
    
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  
  ngOnInit(): void {
    this.loadUserSettings();
  }
  
  loadUserSettings(): void {
    this.isLoading = true;
    this.settingsService.getUserSettings().subscribe({
      next: (settings) => {
        this.userSettings = settings;
        this.populateFormValues(settings);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading settings', err);
        this.isLoading = false;
      }
    });
  }
  
  populateFormValues(settings: UserSettings): void {
    this.accountForm.patchValue({
      email: settings.email,
      displayName: settings.displayName,
      theme: settings.theme,
      language: settings.language
    });
    
    this.notificationForm.patchValue({
      newJobs: settings.notificationPreferences.newJobs,
      applicationUpdates: settings.notificationPreferences.applicationUpdates,
      jobAlerts: settings.notificationPreferences.jobAlerts,
      weeklyDigest: settings.notificationPreferences.weeklyDigest
    });
    
    this.privacyForm.patchValue({
      profileVisibility: settings.privacySettings.profileVisibility,
      allowRecruiters: settings.privacySettings.allowRecruiters,
      showSalary: settings.privacySettings.showSalary
    });
  }
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    // Reset status messages when switching tabs
    this.saveSuccess = false;
    this.saveError = false;
  }
  
  saveAccountSettings(): void {
    if (this.accountForm.invalid) {
      return;
    }
    
    if (!this.userSettings) {
      return;
    }
    
    const updatedSettings = {
      ...this.userSettings,
      email: this.accountForm.value.email,
      displayName: this.accountForm.value.displayName,
      theme: this.accountForm.value.theme,
      language: this.accountForm.value.language
    };
    
    this.saveSettings(updatedSettings);
  }
  
  saveNotificationSettings(): void {
    if (this.notificationForm.invalid || !this.userSettings) {
      return;
    }
    
    const updatedSettings = {
      ...this.userSettings,
      notificationPreferences: {
        newJobs: this.notificationForm.value.newJobs,
        applicationUpdates: this.notificationForm.value.applicationUpdates,
        jobAlerts: this.notificationForm.value.jobAlerts,
        weeklyDigest: this.notificationForm.value.weeklyDigest
      }
    };
    
    this.saveSettings(updatedSettings);
  }
  
  savePrivacySettings(): void {
    if (this.privacyForm.invalid || !this.userSettings) {
      return;
    }
    
    const updatedSettings = {
      ...this.userSettings,
      privacySettings: {
        profileVisibility: this.privacyForm.value.profileVisibility,
        allowRecruiters: this.privacyForm.value.allowRecruiters,
        showSalary: this.privacyForm.value.showSalary
      }
    };
    
    this.saveSettings(updatedSettings);
  }
  
  saveSettings(settings: UserSettings): void {
    this.isLoading = true;
    this.settingsService.updateUserSettings(settings).subscribe({
      next: (updatedSettings) => {
        this.userSettings = updatedSettings;
        this.saveSuccess = true;
        this.saveError = false;
        this.isLoading = false;
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Error updating settings', err);
        this.saveError = true;
        this.saveSuccess = false;
        this.isLoading = false;
      }
    });
  }
  
  changePassword(): void {
    if (this.passwordForm.invalid) {
      return;
    }
    
    this.isLoading = true;
    this.settingsService.updatePassword(
      this.passwordForm.value.currentPassword,
      this.passwordForm.value.newPassword
    ).subscribe({
      next: (success) => {
        if (success) {
          this.saveSuccess = true;
          this.saveError = false;
          this.passwordForm.reset();
        } else {
          this.saveError = true;
          this.saveSuccess = false;
        }
        this.isLoading = false;
        
        // Reset success message after 3 seconds
        if (this.saveSuccess) {
          setTimeout(() => {
            this.saveSuccess = false;
          }, 3000);
        }
      },
      error: (err) => {
        console.error('Error changing password', err);
        this.saveError = true;
        this.saveSuccess = false;
        this.isLoading = false;
      }
    });
  }
  
  deleteAccount(): void {
    const confirmation = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmation) {
      return;
    }
    
    const password = prompt('Please enter your password to confirm account deletion:');
    if (!password) {
      return;
    }
    
    this.isLoading = true;
    this.settingsService.deleteAccount(password).subscribe({
      next: (success) => {
        if (success) {
          alert('Your account has been deleted. You will now be logged out.');
          // In a real app, would redirect to logout
          window.location.href = '/login';
        } else {
          alert('Account deletion failed. Please check your password and try again.');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error deleting account', err);
        alert('An error occurred. Please try again later.');
        this.isLoading = false;
      }
    });
  }
  
  passwordMatchValidator(group: FormGroup): {[key: string]: any} | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    
    return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
  }

}
