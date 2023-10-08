import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserDescriptionPage } from './new-user-description.page';
import { NewUserDescriptionRoutingModule } from './new-user-description-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    NewUserDescriptionPage
  ],
  imports: [
    CommonModule,
    NewUserDescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers:[
    UserService
  ]
})
export class NewUserDescriptionModule { }
