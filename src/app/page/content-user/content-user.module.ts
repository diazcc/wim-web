import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentUserPage } from './content-user.page';
import { ContentUserRoutingModule } from './content-user-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ContentUserPage
  ],
  imports: [
    CommonModule,
    ContentUserRoutingModule,
    ComponentsModule
  ]
})
export class ContentUserModule { }
