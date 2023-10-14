import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChatCard } from './card-chat/card-chat.card';



@NgModule({
  declarations: [
    CardChatCard
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardChatCard
  ]
})
export class CardComponentsModule { }
