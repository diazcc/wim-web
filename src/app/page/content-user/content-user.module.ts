import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentUserPage } from './content-user.page';
import { ContentUserRoutingModule } from './content-user-routing.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';
import { PreviewPostComponentsModule } from 'src/app/components/preview-post/preview-post-components.module';
import { ButtonComponentsModule } from 'src/app/components/buttons/button-components.module';



@NgModule({
  declarations: [
    ContentUserPage
  ],
  imports: [
    CommonModule,
    ContentUserRoutingModule,
    NavbarComponentsModule,
    PreviewPostComponentsModule,
    ButtonComponentsModule
  ]
})
export class ContentUserModule { }
