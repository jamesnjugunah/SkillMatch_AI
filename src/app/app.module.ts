import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobPageComponent } from './Features/jobSeeker/job-page/job-page.component';
import { EmployerComponent } from './Features/Recruiter/employer/employer.component';
import { AdminPageComponent } from './Features/Admin/admin-page/admin-page.component';
import { RecruiterGuard } from './guards/Recruiter.guard';

// Guard imports
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { JobseekerGuard } from '../app/guards/Jobseeker.guard';

import { LandingPageComponent } from './Features/Landing/page/landing-page/landing-page.component';

export const routes: Routes = [
     { 
        path: '', 
        component: LandingPageComponent 
      },
      
      
      { 
        path: 'jobseekers', 
        component: JobPageComponent, 
        canActivate: [AuthGuard, JobseekerGuard] 
      },
      { 
        path: 'Employer', 
        component: EmployerComponent, 
        canActivate: [AuthGuard, RecruiterGuard] 
      },
      { 
        path: 'admin', 
        component: AdminPageComponent, 
        canActivate: [AuthGuard, AdminGuard] 
      },
    {
        path: '',
        loadComponent() {
            return import('./Features/Landing/page/landing-page/landing-page.component').then(({ LandingPageComponent }) => LandingPageComponent);
        },
    },

    // {
    //     path: 'features',
    //     loadComponent() {
    //         return import('./features/features.component').then(({ FeaturesComponent }) => FeaturesComponent);
    //     },
    // },
//     {
//         path: 'howitworks',
//         loadComponent() {
//             return import('./howitworks/howitworks.component').then(({ HowitworksComponent  }) =>HowitworksComponent );
//         },
//     },
    
    {
        path: 'Recruiter',
        loadChildren: () => import('../app/Features/Recruiter/Recruiter.routes').then(m => m.RECRUITER_ROUTES)
    },
    {
        path: 'jobseeker',
        loadChildren: () => import('../app/Features/jobSeeker/jobSeeker.routes').then(m => m.jobSeekerRoutes)
    },
    {
        path: 'admin',
        loadChildren: () => import('../app/Features/Admin/admin.route').then(m => m.adminRoutes)
    },
  
    { 
        path: '**', 
        redirectTo: '' 
      }
      
];