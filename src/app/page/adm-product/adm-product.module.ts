import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmProductPage } from './adm-product.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmProductRoutingModule } from './adm-product-routing.module';



@NgModule({
  declarations: [
    AdmProductPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdmProductRoutingModule,
    HttpClientModule
  ]
})
export class AdmProductModule { }
