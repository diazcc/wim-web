import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.comment-component.html',
  styleUrls: ['./comments.comment-component.scss']
})
export class CommentsCommentComponent {
  @Input() classAllComments  = "";
  arrayData: boolean[] = [];
  constructor(private el: ElementRef) {}



  @Input() dataAllComments = {
    closeComments: () => {}
  }

}
