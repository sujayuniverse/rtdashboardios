import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailystatsPage } from './dailystats.page';

const routes: Routes = [
  {
    path: '',
    component: DailystatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailystatsPageRoutingModule {}
