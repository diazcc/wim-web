import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { register } from 'swiper/element/bundle';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';
register();



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    NavbarComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
