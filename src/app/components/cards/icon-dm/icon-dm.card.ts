import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-dm',
  templateUrl: './icon-dm.card.html',
  styleUrls: ['./icon-dm.card.scss']
})
export class IconDmCard {
  constructor(
    private router : Router
  ){}

  @Input() classDm = "";


  redirectDm(){
    this.router.navigate(['/dm']);
  }
}
