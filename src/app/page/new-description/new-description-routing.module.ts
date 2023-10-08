import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewDescriptionPage } from './new-description.page';

const routes : Routes = [{path:'', component: NewDescriptionPage}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewDescriptionRoutingModule { }
