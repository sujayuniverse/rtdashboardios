import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentlistPage } from './agentlist.page';

const routes: Routes = [
  {
    path: '',
    component: AgentlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentlistPageRoutingModule {}
