import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePersonalPage } from './profile-personal.page';
import { ProfilePersonalRoutingModule } from './profile-personal-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { register } from 'swiper/element/bundle';
register();


@NgModule({
  declarations: [
    ProfilePersonalPage
  ],
  imports: [
    CommonModule,
    ProfilePersonalRoutingModule,
    ComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePersonalModule { }
