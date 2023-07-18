import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedProductsPage } from './featured-products.page';
import { FeaturedProductsRoutingModule } from './featured-products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FeaturedProductsPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    FeaturedProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeaturedProductsModule { }
