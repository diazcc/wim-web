import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyCategoryPage } from './modify-category.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModifyCategoryRoutingModule } from './modify-category-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModifyCategoryPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ModifyCategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ModifyCategoryModule { }
