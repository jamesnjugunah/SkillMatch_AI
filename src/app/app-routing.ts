import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPageComponent } from './Features/jobSeeker/job-page/job-page.component';
import { DashboardComponent } from './Features/jobSeeker/Pages/dashboard/dashboard.component';
import { MyJobsComponent } from './Features/jobSeeker/Pages/my-jobs/my-jobs.component';
import { CareerPathComponent } from './Features/jobSeeker/Pages/career-path/career-path.component';
import { ApplicationsComponent } from './Features/jobSeeker/Pages/applications/applications.component';
import { HelpSupportComponent } from './Features/jobSeeker/Pages/help-support/help-support.component';
import { InterviewCalendarComponent } from './Features/jobSeeker/Pages/interview-calendar/interview-calendar.component';
import { ProfileComponent } from './Features/jobSeeker/Pages/profile/profile.component';
import { SettingsComponent } from './Features/jobSeeker/Pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: JobPageComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'my-jobs', component: MyJobsComponent },
      { path: 'career-path', component: CareerPathComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'help-support', component: HelpSupportComponent },
      { path: 'interview-calendar', component: InterviewCalendarComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Only forRoot here, nowhere else
  exports: [RouterModule]
})
export class AppRoutingModule { }
