import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPage } from './chat.page';
import { ChatRoutingModule } from './chat-routing.module';



@NgModule({
  declarations: [
    ChatPage
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
