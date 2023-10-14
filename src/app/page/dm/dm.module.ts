import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmPage } from './dm.page';
import { DmRoutingModule } from './dm-routing.module';
import { CardComponentsModule } from 'src/app/components/cards/card-components.module';



@NgModule({
  declarations: [
    DmPage
  ],
  imports: [
    CommonModule,
    DmRoutingModule,
    CardComponentsModule
  ]
})
export class DmModule { }
