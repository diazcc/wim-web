import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertAlert } from './alert/alert.alert';
import { LoadAlert } from './load/load.alert';



@NgModule({
  declarations: [
    AlertAlert,
    LoadAlert
  ],
  imports: [
    CommonModule
  ],
  exports :[
    AlertAlert,
    LoadAlert
  ]
})
export class ComponentsAlertsModule { }
