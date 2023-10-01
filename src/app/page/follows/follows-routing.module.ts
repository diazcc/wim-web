import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FollowsPage } from './follows.page';


const routes : Routes = [{path:'', component: FollowsPage}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FollowsRoutingModule { }
