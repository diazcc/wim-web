import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserDescriptionPage } from './new-user-description.page';
import { NewUserDescriptionRoutingModule } from './new-user-description-routing.module';



@NgModule({
  declarations: [
    NewUserDescriptionPage
  ],
  imports: [
    CommonModule,
    NewUserDescriptionRoutingModule
  ]
})
export class NewUserDescriptionModule { }
