import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewWimePage } from './new-wime.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewWimeRoutingModule } from './new-wime-routing.module';



@NgModule({
  declarations: [
    NewWimePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NewWimeRoutingModule
  ]
})
export class NewWimeModule { }
