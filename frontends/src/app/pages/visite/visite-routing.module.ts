import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitePage } from './visite.page';

const routes: Routes = [
  {
    path: '',
    component: VisitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitePageRoutingModule {}
