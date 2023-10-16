import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import 'resize-observer-polyfill';

@Component({
  selector: 'app-header',
  templateUrl: './header.navbar-component.html',
  styleUrls: ['./header.navbar-component.scss']
})
export class HeaderNavbarComponent {
  @ViewChild('userName') userName!: ElementRef;
  @Input() dataHeader = {
    userName : "WIM",
    countFollowers : "0",
    countFollowing : "0",
    setMenu : ()=>{},
  }
  stateFollowing : boolean = true;
  stateFollowers : boolean = true;

  constructor(
    private router : Router
  ){}

  ngAfterViewInit() {
    // Obtén el ancho en píxeles del div
    const divWidth = this.userName.nativeElement.offsetWidth;
    console.log("Ancho del div: " + divWidth + " píxeles");


    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const nuevoAncho = entry.contentRect.width;
        console.log("Ancho del elemento cambió a: " + nuevoAncho + " píxeles");
        if (nuevoAncho>= 140) {
          console.log("se paso");
          this.unsetFollow();
        }else{
          this.setFollow();
        }
      }
    });
    resizeObserver.observe(this.userName.nativeElement);
  }

  unsetFollow(){
    this.stateFollowers =false;
    this.stateFollowing =false;
  }
  setFollow(){
    this.stateFollowers =true;
    this.stateFollowing =true;
  }

  redirectPerfil(){
    this.router.navigate(['/profileUser']);
  }
  redirectViewFollows(){
    this.router.navigate(['/follows']);
  }
}
