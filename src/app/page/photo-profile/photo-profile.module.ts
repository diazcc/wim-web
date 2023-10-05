import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoProfilePage } from './photo-profile.page';
import { PhotoProfileRoutingModule } from './photo-profile-routing.module';



@NgModule({
  declarations: [
    PhotoProfilePage
  ],
  imports: [
    CommonModule,
    PhotoProfileRoutingModule
  ]
})
export class PhotoProfileModule { }
