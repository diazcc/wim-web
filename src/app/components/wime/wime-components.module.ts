import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WimeWimeComponent } from './wime/wime.wime-component';
import { DescriptionWimeComponent } from './description/description.wime-component';
import { HeaderWimeComponent } from './header/header.wime-component';
import { ButtonComponentsModule } from '../buttons/button-components.module';



@NgModule({
  declarations: [
    WimeWimeComponent,
    DescriptionWimeComponent,
    HeaderWimeComponent
  ],
  imports: [
    CommonModule,
    ButtonComponentsModule
  ],
  exports:[
    WimeWimeComponent,
    DescriptionWimeComponent,
    HeaderWimeComponent
  ]
})
export class WimeComponentsModule { }
