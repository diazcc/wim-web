import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmCategoryPage } from './adm-category.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmCategoryRoutingModule } from './adm-category-routing.module';



@NgModule({
  declarations: [
    AdmCategoryPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdmCategoryRoutingModule,
    HttpClientModule
  ]
})
export class AdmCategoryModule { }
