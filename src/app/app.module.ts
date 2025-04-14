// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/Features/Recruiter/dashboard/dashboard.component';

// Remove all component imports that are standalone

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  // No declarations for standalone components
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    // Import your standalone components here if needed
  ],
  providers: []
  // Remove bootstrap array completely
})
export class AppModule { }