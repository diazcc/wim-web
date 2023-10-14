import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './search.page';
import { SearchRoutingModule } from './search-routing.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';



@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NavbarComponentsModule
  ]
})
export class SearchModule { }
