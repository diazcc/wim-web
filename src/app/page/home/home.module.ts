import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { register } from 'swiper/element/bundle';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';
import { WimeComponentsModule } from 'src/app/components/wime/wime-components.module';
register();



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponentsModule,
    WimeComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
