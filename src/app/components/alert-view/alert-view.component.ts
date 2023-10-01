import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.scss']
})
export class AlertViewComponent {
  @Input() dataAlert = {
    classAlert : "",
    text : "",
    textButton : "",
    redirect : ()=>{}
  }
}
