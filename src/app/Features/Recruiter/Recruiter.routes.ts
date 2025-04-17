// recruiters routes

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { AnalyticsComponent } from './analytics/analytics.component';




export const RECRUITER_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'interviews', component: InterviewsComponent},
    { path: 'job-posting', component: JobPostingComponent},
    { path: 'candidates', component: CandidatesComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'messages', component: MessagesComponent},
    { path: 'analytics', component: AnalyticsComponent},

]