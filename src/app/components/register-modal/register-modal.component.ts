// register-dialog.component.ts
import { Component, Output, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterDialogComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  
  activeTab: 'jobseeker' | 'employer' | 'admin' = 'jobseeker';
  registerForm: FormGroup;
  isSubmitting = false;
  
  constructor(
    private fb: FormBuilder, 
    private elementRef: ElementRef,
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private authService: AuthService,
    private router: Router
  ) {
    // Create the form with a FIXED password pattern that properly accepts special characters
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        // Fixed pattern that properly handles special characters
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
      termsAgree: [false, Validators.requiredTrue],
      role: [this.activeTab]
    });
  }

  ngOnInit() {
    console.log('Component initialized');
    // Add form validation
    this.registerForm.addValidators(this.passwordMatchValidator.bind(this));
  }

  setActiveTab(tab: 'jobseeker' | 'employer' | 'admin'): void {
    console.log('Tab changed to:', tab);
    this.activeTab = tab;
    this.registerForm.patchValue({ role: tab });
  }

  onSubmit(): void {
    console.log('Submit button clicked');
    console.log('Form valid:', this.registerForm.valid);
    console.log('Form values:', this.registerForm.value);
    
    if (this.registerForm.valid) {
      this.isSubmitting = true;
      console.log('Processing valid form submission');
      
      // Create user data object
      const userData = {
        fullName: this.registerForm.value.fullName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        role: this.activeTab
      };
      
      console.log('User data:', userData);
      
      // For testing purposes - skip the API call and just navigate
      console.log('Would register with:', userData);
      this.handleSuccessfulRegistration();
      
      // Uncomment this when API is ready
      /*
      this.authService.register(userData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.handleSuccessfulRegistration();
        },
        error: (error) => {
          console.error('Registration error:', error);
          this.isSubmitting = false;
        }
      });
      */
    } else {
      console.log('Form is invalid');
      console.log('Form errors:', this.getFormValidationErrors());
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.registerForm);
    }
  }

  handleSuccessfulRegistration() {
    console.log('Registration successful, navigating to dashboard');
    // Navigate based on user role
    switch(this.activeTab) {
      case 'jobseeker':
        this.router.navigate(['/jobseekers/dashboard']);
        break;
      case 'employer':
        this.router.navigate(['/Employer/dashboard']);
        break;
      case 'admin':
        this.router.navigate(['/admin/dashboard']);
        break;
    }
    this.dialogRef.close();
  }

  getFormValidationErrors(): { [key: string]: any } {
    const errors: { [key: string]: any } = {};
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      if (control?.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  @HostListener('click', ['$event'])
  onOverlayClick(event: MouseEvent) {
    // Check if the click was directly on the overlay (not its children)
    if (event.target === this.elementRef.nativeElement.querySelector('.modal-overlay')) {
      this.closeModal();
    }
  }

  closeModal(): void {
    console.log('Closing modal');
    this.dialogRef.close();
  }

  switchToLogin(): void {
    console.log('Switching to login');
    this.dialogRef.close('login');
    this.authService.openLoginDialog();
  }
}