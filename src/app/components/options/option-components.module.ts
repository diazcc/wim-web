import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareOptionComponent } from './share/share.option-component';
import { OptionsWimeOptionComponent } from './options-wime/options-wime.option-component';



@NgModule({
  declarations: [
    ShareOptionComponent,
    OptionsWimeOptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShareOptionComponent,
    OptionsWimeOptionComponent
  ]
})
export class OptionComponentsModule { }
