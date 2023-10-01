import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './search.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
