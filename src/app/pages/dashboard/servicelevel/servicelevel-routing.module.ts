import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicelevelPage } from './servicelevel.page';

const routes: Routes = [
  {
    path: '',
    component: ServicelevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicelevelPageRoutingModule {}
