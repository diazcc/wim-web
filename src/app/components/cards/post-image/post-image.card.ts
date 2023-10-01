import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.card.html',
  styleUrls: ['./post-image.card.scss']
})
export class PostImageCard {
  constructor(
    private router : Router
  ){}

  redirectPost(){
    this.router.navigate(['/post']);
  }
}
