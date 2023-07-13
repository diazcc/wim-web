import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmHomePage } from './adm-home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { AdmHomeRoutingModule } from './adm-home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdmHomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdmHomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    ProductServicesService
  ]
})
export class AdmHomeModule { }
