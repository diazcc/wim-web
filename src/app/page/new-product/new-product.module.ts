import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductPage } from './new-product.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NewProductRoutingModule } from './new-product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { AdminService } from 'src/app/services/admin.service';



@NgModule({
  declarations: [
    NewProductPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NewProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    ProductServicesService,
    AdminService
  ]
})
export class NewProductModule { }
