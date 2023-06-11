import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplate } from './templates/home/home.template';



@NgModule({
  declarations: [HomeTemplate],
  imports: [
    CommonModule
  ],
  exports:[
    HomeTemplate
  ]
})
export class ComponentsModule { }
