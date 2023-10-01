import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.section.html',
  styleUrls: ['./all-comments.section.scss']
})
export class AllCommentsSection {
  @Input() classAllComments  = "";
  arrayData: boolean[] = [];
  @Output() stateAllComments = new EventEmitter<boolean[]>();
  constructor(private el: ElementRef) {}



  @Input() dataAllComments = {
    closeComments: () => {}
  }


}
