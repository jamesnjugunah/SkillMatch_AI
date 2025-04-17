//jobseeker routes
import { Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { CareerPathComponent } from './career-path/career-path.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { InterviewCalendarComponent } from './interview-calendar/interview-calendar.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';




export const jobSeekerRoutes: Routes = [
    {path : '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path : 'dashboard', component: DashboardComponent},
    {path : 'applications', component: ApplicationsComponent},
    {path : 'my-jobs', component: MyJobsComponent},
    {path : 'interview-calendar', component: InterviewCalendarComponent},
    {path : 'career-path', component: CareerPathComponent},
    {path : 'profile', component: ProfileComponent},
    {path : 'settings', component: SettingsComponent},
    {path : 'help-support', component: HelpSupportComponent},
    {path : '**', redirectTo: 'dashboard'}
]