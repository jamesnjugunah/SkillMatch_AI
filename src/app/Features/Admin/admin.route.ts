//admin routes
import { Routes } from '@angular/router';
import { AiManagementComponent } from './ai-management/ai-management.component';
import { ReportsComponent } from './reports/reports.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const adminRoutes: Routes = [
    { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'ai-management', component: AiManagementComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'user-management', component: UserManagementComponent },
    { path: 'content-management', component: ContentManagementComponent },
]