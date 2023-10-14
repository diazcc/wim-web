import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserDescriptionPage } from './new-user-description.page';
import { NewUserDescriptionRoutingModule } from './new-user-description-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';



@NgModule({
  declarations: [
    NewUserDescriptionPage
  ],
  imports: [
    CommonModule,
    NewUserDescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    UserService
  ]
})
export class NewUserDescriptionModule { }
