import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryPage } from './galery.page';

const routes : Routes = [{path:'', component: GaleryPage}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GaleryRoutingModule { }
