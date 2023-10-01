import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WimesArticle } from './articles/wimes/wimes.article';
import { ProfileArticle } from './articles/profile/profile.article';
import { HeaderWimeContentWime } from './content-wime/header-wime/header-wime.content-wime';
import { DescriptionWimeContentWime } from './content-wime/description-wime/description-wime.content-wime';
import { CommentsWimeContentWime } from './content-wime/comments-wime/comments-wime.content-wime';
import { AllCommentsSection } from './sections/all-comments/all-comments.section';
import { HeaderArticle } from './articles/header/header.article';
import { NavbarArticle } from './articles/navbar/navbar.article';
import { CardCommentCard } from './cards/card-comment/card-comment.card';
import { PostSection } from './sections/post/post.section';
import { IconDmCard } from './cards/icon-dm/icon-dm.card';
import { CardChatCard } from './cards/card-chat/card-chat.card';
import { PostImageCard } from './cards/post-image/post-image.card';
import { OptionsWimesSectionSetting } from './section-settings/options-wimes/options-wimes.section-setting';
import { register } from 'swiper/element/bundle';
import { NavProfileLinksSection } from './sections/nav-profile-links/nav-profile-links.section';
import { ContentInformationProfileSection } from './sections/content-information-profile/content-information-profile.section';
import { ClickOutsideDirectiveDirective } from './directives/click-outside-directive.directive';
import { MenuArticle } from './articles/menu/menu.article';
import { NewPostOptionArticle } from './articles/new-post-option/new-post-option.article';
import { ShareArticle } from './articles/share/share.article';
import { AlertViewComponent } from './alert-view/alert-view.component';

register();


@NgModule({
  declarations: [
    WimesArticle,
    ProfileArticle,
    HeaderWimeContentWime,
    DescriptionWimeContentWime,
    CommentsWimeContentWime,
    AllCommentsSection,
    HeaderArticle,
    NavbarArticle,
    CardCommentCard,
    PostSection,
    IconDmCard,
    CardChatCard,
    PostImageCard,
    OptionsWimesSectionSetting,
    NavProfileLinksSection,
    ContentInformationProfileSection,
    ClickOutsideDirectiveDirective,
    MenuArticle,
    NewPostOptionArticle,
    ShareArticle,
    AlertViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WimesArticle,
    ProfileArticle,
    HeaderWimeContentWime,
    DescriptionWimeContentWime,
    CommentsWimeContentWime,
    AllCommentsSection,
    HeaderArticle,
    NavbarArticle,
    CardCommentCard,
    PostSection,
    IconDmCard,
    CardChatCard,
    PostImageCard,
    OptionsWimesSectionSetting,
    NavProfileLinksSection,
    ContentInformationProfileSection,
    ClickOutsideDirectiveDirective,
    MenuArticle,
    NewPostOptionArticle,
    ShareArticle,
    AlertViewComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
