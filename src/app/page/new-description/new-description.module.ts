import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDescriptionPage } from './new-description.page';
import { NewDescriptionRoutingModule } from './new-description-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    NewDescriptionPage
  ],
  imports: [
    CommonModule,
    NewDescriptionRoutingModule,
    ComponentsModule
  ]
})
export class NewDescriptionModule { }
