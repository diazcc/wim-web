import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmPage } from './dm.page';
import { DmRoutingModule } from './dm-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    DmPage
  ],
  imports: [
    CommonModule,
    DmRoutingModule,
    ComponentsModule
  ]
})
export class DmModule { }
