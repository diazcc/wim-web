import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.preview-post-component.html',
  styleUrls: ['./preview-post.preview-post-component.scss']
})
export class PreviewPostPreviewPostComponent {
  constructor(
    private router : Router
  ){}

  redirectPost(){
    this.router.navigate(['/post']);
  }
}
