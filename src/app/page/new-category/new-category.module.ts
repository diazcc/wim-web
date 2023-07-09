import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCategoryPage } from './new-category.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NewCategoryRoutingModule } from './new-category-routing.module';



@NgModule({
  declarations: [
    NewCategoryPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NewCategoryRoutingModule,
    HttpClientModule
  ]
})
export class NewCategoryModule { }
