import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.option-component.html',
  styleUrls: ['./share.option-component.scss']
})
export class ShareOptionComponent {
  @Input() classShare = "hidde";

}
