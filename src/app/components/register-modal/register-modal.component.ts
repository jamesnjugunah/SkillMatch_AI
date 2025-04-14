// components/register-dialog/register-dialog.component.ts
import { Component, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LoginDialogComponent } from '../login-modal/login-modal.component'; 

@Component({
  selector: 'app-register-dialog',
  imports:[ ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterDialogComponent {
  @Output() close = new EventEmitter<void>();
  
  activeTab: 'jobseeker' | 'employer' | 'admin' = 'jobseeker';
  registerForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private elementRef: ElementRef,
    private dialogRef: MatDialogRef<RegisterDialogComponent>
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
      termsAgree: [false, Validators.requiredTrue]
    }, { 
      validators: this.passwordMatchValidator 
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  setActiveTab(tab: 'jobseeker' | 'employer' | 'admin'): void {
    this.activeTab = tab;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
      // Here you would typically call your authentication service
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.registerForm);
    }
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
  // Close button click handler
  closeModal(): void {
    this.dialogRef.close();
  }
  switchToLogin(): void {
    // Emit an event that can be caught by the parent to switch to login
    // Or implement your own login navigation logic
    console.log('Switch to login clicked');
  }

}