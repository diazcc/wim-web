import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsCommentComponent } from './comments/comments.comment-component';
import { CardCommentCommentComponent } from './card-comment/card-comment.comment-component';



@NgModule({
  declarations: [
    CommentsCommentComponent,
    CardCommentCommentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommentsCommentComponent,
    CardCommentCommentComponent
  ]
})
export class ComponentsCommentsModule { }
