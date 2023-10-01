import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewPhotoPage } from './new-photo.page';



const routes : Routes = [{path:'', component: NewPhotoPage}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewPhotoRoutingModule { }
