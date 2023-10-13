import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.alert.html',
  styleUrls: ['./alert.alert.scss']
})
export class AlertAlert {
  @Input() dataAlert = {
    classAlert : "",
    text : "",
    textButton : "",
    redirect : ()=>{}
  }
}
