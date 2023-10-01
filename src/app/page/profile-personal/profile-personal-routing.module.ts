import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePersonalPage } from './profile-personal.page';

const routes : Routes = [{path:'', component: ProfilePersonalPage}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfilePersonalRoutingModule { }
