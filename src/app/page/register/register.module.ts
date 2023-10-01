import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPage } from './register.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule { }
