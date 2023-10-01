import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-wime',
  templateUrl: './header-wime.content-wime.html',
  styleUrls: ['./header-wime.content-wime.scss']
})
export class HeaderWimeContentWime {
  @Input() dataOpenSettings ={
    open :()=>{}
  }
}
