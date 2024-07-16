import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentlistPageRoutingModule } from './agentlist-routing.module';

import { AgentlistPage } from './agentlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentlistPageRoutingModule
  ],
  declarations: [AgentlistPage]
})
export class AgentlistPageModule {}
