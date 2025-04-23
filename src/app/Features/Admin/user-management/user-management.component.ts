import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-04-20' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-04-19' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2025-03-15' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Pending', lastLogin: 'N/A' }
  ];

  filteredUsers = [...this.users];
  selectedUser: User | null = null;
  isAddUserModalOpen = false;
  isEditUserModalOpen = false;
  isDeleteUserModalOpen = false;
  statusFilter = 'all';
  roleFilter = 'all';
  
  newUser = {
    name: '',
    email: '',
    role: '',
    status: 'Pending'
  };

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(user => {
      const statusMatch = this.statusFilter === 'all' || user.status === this.statusFilter;
      const roleMatch = this.roleFilter === 'all' || user.role === this.roleFilter;
      return statusMatch && roleMatch;
    });
  }

  resetFilters(): void {
    this.statusFilter = 'all';
    this.roleFilter = 'all';
    this.filteredUsers = [...this.users];
  }

  openAddUserModal(): void {
    this.newUser = {
      name: '',
      email: '',
      role: '',
      status: 'Pending'
    };
    this.isAddUserModalOpen = true;
  }

  closeAddUserModal(): void {
    this.isAddUserModalOpen = false;
  }

  addUser(): void {
    const newId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    const user: User = {
      id: newId,
      name: this.newUser.name,
      email: this.newUser.email,
      role: this.newUser.role,
      status: this.newUser.status,
      lastLogin: 'N/A'
    };
    
    this.users.push(user);
    this.filteredUsers = [...this.users];
    this.applyFilters();
    this.isAddUserModalOpen = false;
  }

  openEditUserModal(user: User): void {
    this.selectedUser = { ...user };
    this.isEditUserModalOpen = true;
  }

  closeEditUserModal(): void {
    this.isEditUserModalOpen = false;
  }

  updateUser(): void {
    if (this.selectedUser) {
      const index = this.users.findIndex(u => u.id === this.selectedUser?.id);
      if (index !== -1) {
        this.users[index] = { ...this.selectedUser };
        this.filteredUsers = [...this.users];
        this.applyFilters();
      }
      this.isEditUserModalOpen = false;
    }
  }

  openDeleteUserModal(user: User): void {
    this.selectedUser = user;
    this.isDeleteUserModalOpen = true;
  }

  closeDeleteUserModal(): void {
    this.isDeleteUserModalOpen = false;
  }

  deleteUser(): void {
    this.users = this.users.filter(u => u.id !== this.selectedUser?.id);
    this.filteredUsers = this.filteredUsers.filter(u => u.id !== this.selectedUser?.id);
    this.isDeleteUserModalOpen = false;
  }
}