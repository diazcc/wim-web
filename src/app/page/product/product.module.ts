import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductPage } from './product.page';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductRoutingModule
  ]
})
export class ProductModule {




}



