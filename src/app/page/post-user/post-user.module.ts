import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostUserPage } from './post-user.page';
import { PostUserRoutingModule } from './post-user-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    PostUserPage
  ],
  imports: [
    CommonModule,
    PostUserRoutingModule,
    ComponentsModule
  ]
})
export class PostUserModule { }
