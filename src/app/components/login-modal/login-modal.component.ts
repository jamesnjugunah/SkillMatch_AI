import { Component, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  imports: [  ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginDialogComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToRegister = new EventEmitter<void>();
  
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private elementRef: ElementRef,
    private dialogRef: MatDialogRef<LoginDialogComponent>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted:', this.loginForm.value);
      // Here you would typically call your authentication service
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.loginForm);
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

  forgotPassword(event: Event): void {
    event.preventDefault();
    // Implement password reset functionality
    console.log('Forgot password clicked');
  }
  onSwitchToRegister(event: MouseEvent): void {
    this.switchToRegister.emit();
  }
}