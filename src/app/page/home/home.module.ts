import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { register } from 'swiper/element/bundle';
register();



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
