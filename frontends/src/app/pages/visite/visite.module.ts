import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitePageRoutingModule } from './visite-routing.module';

import { VisitePage } from './visite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitePageRoutingModule
  ],
  declarations: [VisitePage]
})
export class VisitePageModule {}
