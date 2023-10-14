import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPhotoPage } from './new-photo.page';
import { NewPhotoRoutingModule } from './new-photo-routing.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';



@NgModule({
  declarations: [
    NewPhotoPage
  ],
  imports: [
    CommonModule,
    NewPhotoRoutingModule,
    NavbarComponentsModule
  ]
})
export class NewPhotoModule { }
