import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatOptionModule } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatMenuModule } from '@angular/material/menu';
import { MatTable } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../../core/services/user.service';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { EditUserComponent } from './dialogs/edit-user/edit-user.component';
import { DeleteUserComponent } from './dialogs/delete-user/delete-user.component';


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: Date;
}

@Component({
  selector: 'app-user-management',
  imports: [ MatPaginator, MatSort, MatTable, MatFormFieldModule, MatMenuModule, MatProgressSpinner, CommonModule, MatIcon, ReactiveFormsModule, MatOptionModule ],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'lastLogin', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  searchControl = new FormControl('');
  roleFilter = new FormControl('');
  statusFilter = new FormControl('');
  
  roles: string[] = ['Admin', 'Editor', 'Viewer', 'User'];
  statuses: string[] = ['Active', 'Inactive', 'Pending', 'Suspended'];
  
  isLoading = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Setup search and filter controls
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => {
      this.applyFilter();
    });
    
    this.roleFilter.valueChanges.subscribe(() => this.applyFilter());
    this.statusFilter.valueChanges.subscribe(() => this.applyFilter());
    
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers() {
    this.isLoading = true;
    // In a real application, this would call your user service
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading users', error);
        this.isLoading = false;
      }
    });
  }

  applyFilter() {
    const searchTerm = this.searchControl.value?.toLowerCase() || '';
    const roleFilter = this.roleFilter.value || '';
    const statusFilter = this.statusFilter.value || '';

    // Create a combined filter function
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const matchesSearch = data.name.toLowerCase().includes(searchTerm) || 
                           data.email.toLowerCase().includes(searchTerm);
      const matchesRole = roleFilter ? data.role === roleFilter : true;
      const matchesStatus = statusFilter ? data.status === statusFilter : true;
      
      return matchesSearch && matchesRole && matchesStatus;
    };
    
    // Trigger filtering (using empty string as the filterValue because we're using a custom filterPredicate)
    this.dataSource.filter = ' ';
  }

  resetFilters() {
    this.searchControl.setValue('');
    this.roleFilter.setValue('');
    this.statusFilter.setValue('');
    this.dataSource.filter = '';
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(result).subscribe({
          next: () => {
            this.loadUsers();
          },
          error: (error) => {
            console.error('Error adding user', error);
          }
        });
      }
    });
  }

  openEditUserDialog(user: User) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(result.id, result).subscribe({
          next: () => {
            this.loadUsers();
          },
          error: (error) => {
            console.error('Error updating user', error);
          }
        });
      }
    });
  }

  openDeleteUserDialog(user: User) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user.id).subscribe({
          next: () => {
            this.loadUsers();
          },
          error: (error) => {
            console.error('Error deleting user', error);
          }
        });
      }
    });
  }
}
