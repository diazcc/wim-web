import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { Login } from './login.page';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsAlertsModule } from 'src/app/components/alterts/components-alerts.module';

@NgModule({
  declarations: [
    Login
    ],
  imports: [
    CommonModule,
    ComponentsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsAlertsModule
  ]
})
export class LoginModule { }
