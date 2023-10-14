import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePersonalPage } from './profile-personal.page';
import { ProfilePersonalRoutingModule } from './profile-personal-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { register } from 'swiper/element/bundle';
import { WimeComponentsModule } from 'src/app/components/wime/wime-components.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';
import { OptionComponentsModule } from 'src/app/components/options/option-components.module';
import { ProfileComponentsModule } from 'src/app/components/profile/profile-components.module';
import { ComponentsCommentsModule } from 'src/app/components/comments/components-comments.module';
register();


@NgModule({
  declarations: [
    ProfilePersonalPage
  ],
  imports: [
    CommonModule,
    ProfilePersonalRoutingModule,
    ComponentsModule,
    WimeComponentsModule,
    NavbarComponentsModule,
    OptionComponentsModule,
    ProfileComponentsModule,
    ComponentsCommentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePersonalModule { }
