import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewWimePage } from './new-wime.page';
import { NewWimeRoutingModule } from './new-wime-routing.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';



@NgModule({
  declarations: [
    NewWimePage
  ],
  imports: [
    CommonModule,
    NewWimeRoutingModule,
    NavbarComponentsModule
  ]
})
export class NewWimeModule { }
