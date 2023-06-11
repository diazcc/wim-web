import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomePage
  ]
})
export class HomeModule { }
