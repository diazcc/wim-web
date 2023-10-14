import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowsPage } from './follows.page';
import { FollowsRoutingModule } from './follows-routing.module';
import { register } from 'swiper/element/bundle';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';
register();


@NgModule({
  declarations: [
    FollowsPage
  ],
  imports: [
    CommonModule,
    FollowsRoutingModule,
    NavbarComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FollowsModule { }
