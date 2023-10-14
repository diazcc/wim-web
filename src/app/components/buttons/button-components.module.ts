import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmButtonComponent } from './dm/dm.button-component';



@NgModule({
  declarations: [
    DmButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DmButtonComponent
  ]
})
export class ButtonComponentsModule { }
