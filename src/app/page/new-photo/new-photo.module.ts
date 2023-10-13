import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPhotoPage } from './new-photo.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewPhotoRoutingModule } from './new-photo-routing.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';



@NgModule({
  declarations: [
    NewPhotoPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NewPhotoRoutingModule,
    NavbarComponentsModule
  ]
})
export class NewPhotoModule { }
