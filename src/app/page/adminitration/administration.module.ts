import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminitrationPage } from './adminitration.page';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductServicesService } from 'src/app/services/product-services.service';



@NgModule({
  declarations: [
    AdminitrationPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductServicesService
  ]
})
export class AdministrationModule { }
