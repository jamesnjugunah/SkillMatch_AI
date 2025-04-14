// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPageComponent } from './Features/jobSeeker/job-page/job-page.component';
// import { RecruiterPageComponent } from './pages/recruiter-page/recruiter-page.component';
// import { AdminPageComponent } from './pages/admin-page/admin-page.component';

// Guard imports
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { JobseekerGuard } from '../app/guards/Jobseeker.guard';

import { LandingPageComponent } from './Features/Landing/page/landing-page/landing-page.component';

const routes: Routes = [
  // Public route - Landing page
  { 
    path: '', 
    component: LandingPageComponent 
  },
  
  // Protected routes with role-specific guards
  { 
    path: 'jobseekers', 
    component: JobPageComponent, 
    canActivate: [AuthGuard, JobseekerGuard] 
  },
  // { 
  //   path: 'recruiters', 
  //   component: RecruiterPageComponent, 
  //   canActivate: [AuthGuard, RecruiterGuard] 
  // },
  // { 
  //   path: 'admin', 
  //   component: AdminPageComponent, 
  //   canActivate: [AuthGuard, AdminGuard] 
  // },
  
  // Additional routes for job seeker features
  { 
    path: 'jobseekers/profile',
    loadChildren: () => import('./modules/jobseeker/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard, JobseekerGuard]
  },
  { 
    path: 'jobseekers/job-search',
    loadChildren: () => import('./modules/jobseeker/job-search/job-search.module').then(m => m.JobSearchModule),
    canActivate: [AuthGuard, JobseekerGuard]
  },
  { 
    path: 'jobseekers/applications',
    loadChildren: () => import('../app/Features/jobSeeker/Pages/applications/applications.component').then(m => m.ApplicationsModule),
    canActivate: [AuthGuard, JobseekerGuard]
  },
  
  // Additional routes for recruiter features
  // { 
  //   path: 'recruiters/company-profile',
  //   loadChildren: () => import('./modules/recruiter/company-profile/company-profile.module').then(m => m.CompanyProfileModule),
  //   canActivate: [AuthGuard, RecruiterGuard]
  // },
  // { 
  //   path: 'recruiters/job-posts',
  //   loadChildren: () => import('./modules/recruiter/job-posts/job-posts.module').then(m => m.JobPostsModule),
  //   canActivate: [AuthGuard, RecruiterGuard]
  // },
  // { 
  //   path: 'recruiters/applicants',
  //   loadChildren: () => import('./modules/recruiter/applicants/applicants.module').then(m => m.ApplicantsModule),
  //   canActivate: [AuthGuard, RecruiterGuard]
  // },
  
  // // Admin routes
  // { 
  //   path: 'admin/users',
  //   loadChildren: () => import('./modules/admin/users/users.module').then(m => m.UsersModule),
  //   canActivate: [AuthGuard, AdminGuard]
  // },
  // { 
  //   path: 'admin/job-categories',
  //   loadChildren: () => import('./modules/admin/job-categories/job-categories.module').then(m => m.JobCategoriesModule),
  //   canActivate: [AuthGuard, AdminGuard]
  // },
  // { 
  //   path: 'admin/reports',
  //   loadChildren: () => import('./modules/admin/reports/reports.module').then(m => m.ReportsModule),
  //   canActivate: [AuthGuard, AdminGuard]
  // },

  // Wildcard route for 404 - must be last
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }