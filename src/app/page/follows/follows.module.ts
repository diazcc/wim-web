import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowsPage } from './follows.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FollowsRoutingModule } from './follows-routing.module';
import { register } from 'swiper/element/bundle';
register();


@NgModule({
  declarations: [
    FollowsPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FollowsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FollowsModule { }
