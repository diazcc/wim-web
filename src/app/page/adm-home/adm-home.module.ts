import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmHomePage } from './adm-home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { AdmHomeRoutingModule } from './adm-home-routing.module';



@NgModule({
  declarations: [
    AdmHomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdmHomeRoutingModule,
    HttpClientModule
  ],
  providers:[
    ProductServicesService
  ]
})
export class AdmHomeModule { }
