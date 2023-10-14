import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.button-component.html',
  styleUrls: ['./dm.button-component.scss']
})
export class DmButtonComponent {
  constructor(
    private router : Router
  ){}

  @Input() classDm = "";


  redirectDm(){
    this.router.navigate(['/dm']);
  }
}
