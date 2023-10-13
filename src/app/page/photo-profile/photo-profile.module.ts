import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoProfilePage } from './photo-profile.page';
import { PhotoProfileRoutingModule } from './photo-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ComponentsModule } from 'src/app/components/components.module';
import { ComponentsAlertsModule } from 'src/app/components/alterts/components-alerts.module';



@NgModule({
  declarations: [
    PhotoProfilePage
  ],
  imports: [
    CommonModule,
    PhotoProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    ComponentsAlertsModule
  ],
  providers:[
    UserService
  ]
})
export class PhotoProfileModule { }
