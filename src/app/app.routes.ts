// app.routes.ts
import { Routes } from '@angular/router';
import { JobPageComponent } from './Features/jobSeeker/job-page/job-page.component';
import { EmployerComponent } from './Features/Recruiter/employer/employer.component';
import { AdminPageComponent } from './Features/Admin/admin-page/admin-page.component';
// import { RecruiterGuard } from './guards/Recruiter.guard';
// import { AuthGuard } from './guards/auth.guard';
// import { AdminGuard } from './guards/admin.guard';
// import { JobseekerGuard } from './guards/Jobseeker.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Features/Landing/page/landing-page/landing-page.component')
      .then(m => m.LandingPageComponent)
  },
  {
    path: 'jobseekers',
    component: JobPageComponent,
    children: [{
      path: '',
      loadChildren: () => import('./Features/jobSeeker/jobSeeker.routes')
        .then(m => m.jobSeekerRoutes)
    }]
    // canActivate: [AuthGuard, JobseekerGuard]
  },
  {
    path: 'Employer',
    component: EmployerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Features/Recruiter/Recruiter.routes')
          .then(m => m.RECRUITER_ROUTES)
      }
    ],
    // canActivate: [AuthGuard, RecruiterGuard]
  },
  {
    path: 'profile-builder',
    loadComponent: () => import('./Features/profile-builder/profile-builder.component')
      .then(m => m.ProfileBuilderComponent)
  },
  

 
  {
    path: 'admin',
    component: AdminPageComponent,
    children:[{
      path:'',
      loadChildren: () => import('./Features/Admin/admin.route')
        .then(m => m.adminRoutes)
    }]
    // canActivate: [AuthGuard, AdminGuard]
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];