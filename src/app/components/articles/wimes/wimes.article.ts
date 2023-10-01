import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wimes',
  templateUrl: './wimes.article.html',
  styleUrls: ['./wimes.article.scss']
})
export class WimesArticle {
  @Input() classAllComments = "";

  @Input() dataDescription ={
    openComment: () =>{},
    openShare: ()=>{}
  }
  @Input() dataAllComments ={
    closeComments : () =>{
    }
  }
  @Input() dataOpenSettings ={
    open :()=>{
    }
  }

  @Input()clickView(){
    console.log("click wime");
  }

}
