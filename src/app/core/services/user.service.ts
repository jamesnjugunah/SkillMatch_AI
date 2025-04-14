import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/users'; // Replace with your actual API endpoint
  
  // Mock data for demo purposes
  private mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: new Date(2025, 3, 10) },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', lastLogin: new Date(2025, 3, 12) },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', lastLogin: new Date(2025, 2, 15) },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Viewer', status: 'Active', lastLogin: new Date(2025, 3, 13) },
    { id: 5, name: 'Chris Evans', email: 'chris@example.com', role: 'User', status: 'Pending', lastLogin: null },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Suspended', lastLogin: new Date(2025, 1, 20) },
    { id: 7, name: 'Tom Wilson', email: 'tom@example.com', role: 'User', status: 'Active', lastLogin: new Date(2025, 3, 1) },
    { id: 8, name: 'Sarah Lee', email: 'sarah@example.com', role: 'Viewer', status: 'Active', lastLogin: new Date(2025, 3, 8) }
  ];

  constructor(private http: HttpClient) { }

  // In a real application, these methods would make actual HTTP requests
  
  getUsers(): Observable<any[]> {
    // Mock API call with delay
    return of(this.mockUsers).pipe(delay(500));
    
    // Real implementation would be:
    // return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    const user = this.mockUsers.find(u => u.id === id);
    return of(user).pipe(delay(300));
    
    // return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addUser(user: any): Observable<any> {
    // Mock implementation
    const newUser = {
      ...user,
      id: this.mockUsers.length + 1,
      lastLogin: null
    };
    this.mockUsers.push(newUser);
    return of(newUser).pipe(delay(500));
    
    // return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    // Mock implementation
    const index = this.mockUsers.findIndex(u => u.id === id);
    if (index !== -1) {
      this.mockUsers[index] = { ...this.mockUsers[index], ...user };
    }
    return of(user).pipe(delay(500));
    
    // return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    // Mock implementation
    const index = this.mockUsers.findIndex(u => u.id === id);
    if (index !== -1) {
      this.mockUsers.splice(index, 1);
    }
    return of({ success: true }).pipe(delay(500));
    
    // return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}