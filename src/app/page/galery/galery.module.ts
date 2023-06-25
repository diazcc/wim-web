import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryPage } from './galery.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { GaleryRoutingModule } from './galery-routing.module';



@NgModule({
  declarations: [
    GaleryPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    GaleryRoutingModule
  ]
})
export class GaleryModule { }
