import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentsProfile } from './profile/profile.components-profile';
import { DescriptionComponentsProfile } from './description/description.components-profile';
import { LinksComponentsProfile } from './links/links.components-profile';
import { register } from 'swiper/element';
import { ButtonComponentsModule } from '../buttons/button-components.module';

register();


@NgModule({
  declarations: [
    ProfileComponentsProfile,
    DescriptionComponentsProfile,
    LinksComponentsProfile
  ],
  imports: [
    CommonModule,
    ButtonComponentsModule
  ],
  exports:[
    ProfileComponentsProfile,
    DescriptionComponentsProfile,
    LinksComponentsProfile
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileComponentsModule { }
