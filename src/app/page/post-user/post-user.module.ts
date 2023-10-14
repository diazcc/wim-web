import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostUserPage } from './post-user.page';
import { PostUserRoutingModule } from './post-user-routing.module';
import { NavbarComponentsModule } from 'src/app/components/navbars/navbar-components.module';
import { PostComponentsModule } from 'src/app/components/post/post-components.module';
import { ButtonComponentsModule } from 'src/app/components/buttons/button-components.module';



@NgModule({
  declarations: [
    PostUserPage
  ],
  imports: [
    CommonModule,
    PostUserRoutingModule,
    NavbarComponentsModule,
    PostComponentsModule,
    ButtonComponentsModule
  ]
})
export class PostUserModule { }
