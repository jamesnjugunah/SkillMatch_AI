import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-edit-user',
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatIconModule, MatCheckboxModule ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  userForm: FormGroup;
  roles: string[] = ['Admin', 'Editor', 'Viewer', 'User'];
  statuses: string[] = ['Active', 'Inactive', 'Pending', 'Suspended'];
  changePassword = false;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      id: [data.id],
      name: [data.name, [Validators.required]],
      email: [data.email, [Validators.required, Validators.email]],
      role: [data.role, [Validators.required]],
      status: [data.status, [Validators.required]],
      password: ['']
    });
  }

  toggleChangePassword(): void {
    this.changePassword = !this.changePassword;
    if (this.changePassword) {
      this.userForm.get('password')?.setValidators([Validators.required, Validators.minLength(8)]);
    } else {
      this.userForm.get('password')?.clearValidators();
      this.userForm.get('password')?.setValue('');
    }
    this.userForm.get('password')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (!this.changePassword) {
        delete formData.password;
      }
      this.dialogRef.close(formData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
