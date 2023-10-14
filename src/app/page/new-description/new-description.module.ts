import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDescriptionPage } from './new-description.page';
import { NewDescriptionRoutingModule } from './new-description-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsAlertsModule } from 'src/app/components/alterts/components-alerts.module';



@NgModule({
  declarations: [
    NewDescriptionPage
  ],
  imports: [
    CommonModule,
    NewDescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsAlertsModule
  ]
})
export class NewDescriptionModule { }
