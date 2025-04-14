//jobseeker routes
import { Routes } from '@angular/router';
import { ApplicationsComponent } from './Pages/applications/applications.component';
import { CareerPathComponent } from './Pages/career-path/career-path.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HelpSupportComponent } from './Pages/help-support/help-support.component';
import { InterviewCalendarComponent } from './Pages/interview-calendar/interview-calendar.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SettingsComponent } from './Pages/settings/settings.component';



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
]