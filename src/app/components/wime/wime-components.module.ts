import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WimeWimeComponent } from './wime/wime.wime-component';
import { DescriptionWimeComponent } from './description/description.wime-component';
import { HeaderWimeComponent } from './header/header.wime-component';



@NgModule({
  declarations: [
    WimeWimeComponent,
    DescriptionWimeComponent,
    HeaderWimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WimeWimeComponent,
    DescriptionWimeComponent,
    HeaderWimeComponent
  ]
})
export class WimeComponentsModule { }
