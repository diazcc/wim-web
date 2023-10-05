import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoProfilePage } from './photo-profile.page';


const routes : Routes = [{path:'', component: PhotoProfilePage}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotoProfileRoutingModule { }
