import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductPage } from './product.page';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductRoutingModule,
    HttpClientModule
  ]
})
export class ProductModule {




}



