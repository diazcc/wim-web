import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.navbar-component.html',
  styleUrls: ['./menu.navbar-component.scss']
})
export class MenuNavbarComponent {
  @Input() dataMenu = {
    classMenu : "",
    reportProblem : () =>{},
    logOut : () =>{}
  }
}
