import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicelevelPageRoutingModule } from './servicelevel-routing.module';

import { ServicelevelPage } from './servicelevel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicelevelPageRoutingModule
  ],
  declarations: [ServicelevelPage]
})
export class ServicelevelPageModule {}
