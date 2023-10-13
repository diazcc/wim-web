import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPage } from './register.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ComponentsAlertsModule } from 'src/app/components/alterts/components-alerts.module';




@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsAlertsModule
  ],
  providers:[
    UserService
  ]
})
export class RegisterModule { }
