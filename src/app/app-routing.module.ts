import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'agentlist',
    loadChildren: () => import('./pages/dashboard/agentlist/agentlist.module').then( m => m.AgentlistPageModule)
  },
  {
    path: 'dailystats',
    loadChildren: () => import('./pages/dashboard/dailystats/dailystats.module').then( m => m.DailystatsPageModule)
  },
  {
    path: 'servicelevel',
    loadChildren: () => import('./pages/dashboard/servicelevel/servicelevel.module').then( m => m.ServicelevelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
