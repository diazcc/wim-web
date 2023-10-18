import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostPostComponent } from './post/post.post-component';



@NgModule({
  declarations: [
    PostPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PostPostComponent
  ]
})
export class PostComponentsModule { }
