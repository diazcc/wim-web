import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentsProfile } from './profile/profile.components-profile';
import { DescriptionComponentsProfile } from './description/description.components-profile';
import { LinksComponentsProfile } from './links/links.components-profile';
import { register } from 'swiper/element';

register();


@NgModule({
  declarations: [
    ProfileComponentsProfile,
    DescriptionComponentsProfile,
    LinksComponentsProfile
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProfileComponentsProfile,
    DescriptionComponentsProfile,
    LinksComponentsProfile
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileComponentsModule { }
