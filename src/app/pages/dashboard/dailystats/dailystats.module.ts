import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailystatsPageRoutingModule } from './dailystats-routing.module';

import { DailystatsPage } from './dailystats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailystatsPageRoutingModule
  ],
  declarations: [DailystatsPage]
})
export class DailystatsPageModule {}
