import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-wime',
  templateUrl: './header.wime-component.html',
  styleUrls: ['./header.wime-component.scss']
})
export class HeaderWimeComponent {
  @Input() dataOpenSettings ={
    open :()=>{}
  }
}
