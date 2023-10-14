import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostSection } from './sections/post/post.section';
import { IconDmCard } from './cards/icon-dm/icon-dm.card';
import { CardChatCard } from './cards/card-chat/card-chat.card';
import { PostImageCard } from './cards/post-image/post-image.card';
import { register } from 'swiper/element/bundle';
import { ClickOutsideDirectiveDirective } from './directives/click-outside-directive.directive';

register();


@NgModule({
  declarations: [
    PostSection,
    IconDmCard,
    CardChatCard,
    PostImageCard,
    ClickOutsideDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PostSection,
    IconDmCard,
    CardChatCard,
    PostImageCard,
    ClickOutsideDirectiveDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
