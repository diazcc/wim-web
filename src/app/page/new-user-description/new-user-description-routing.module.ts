import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewUserDescriptionPage } from './new-user-description.page';


const routes : Routes = [{path:'', component: NewUserDescriptionPage}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewUserDescriptionRoutingModule { }
