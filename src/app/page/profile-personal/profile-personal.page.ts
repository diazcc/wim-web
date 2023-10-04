import { Component,Input, ElementRef, HostListener,ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// import Swiper from 'swiper';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.page.html',
  styleUrls: ['./profile-personal.page.scss']
})
export class ProfilePersonalPage {
  @ViewChild('swiperWime', { static: false }) swiperWime!: ElementRef;
  @ViewChild('elementoDeseado') elementoDeseado!: ElementRef;
  classShare = "";
  stateComment : boolean = false;
  stateColorBackGround : number = 0;
  classAllComments = "hidde";
  dataMenuSide = {
    classMenu : "hidde",
    reportProblem : () =>{},
    logOut : () =>{this.userServices.logOut().then(()=>{
      this.router.navigate(['/login']);
    });}
  }
  classNewPostOptions = "hidde";
  dataNavBar = {
    imgHome: "home",
    imgSearch: "search",
    imgMore: "more",
    imgNoti: "message-white",
    imgUser: "/assets/img/foto.png",
    classNavbar :"",
    setNewPost : ()=>{this.openNewPost()},
    redirectHome : ()=>{this.router.navigate(['/home']);},
    redirectSearch:()=>{},
    redirectUndefined : ()=>{}
  }
  dataMenu= {
    setMenu: ()=>{this.openMenu()}
  }
  dataSettingWime = {
    classSetting :"hidde",
    close :  () =>{ this.closeSetting()},
    reportContent : () =>{console.log("reportContent")},
    reportCount : () =>{console.log("reportCount")}
  }
  dataDescription ={
    openComment: () =>{this.openComment()},
    openShare: ()=>{this.openShare()}
  }
  dataAllComments ={
    closeComments : () =>{
      this.closeComments();
    }
  }
  dataOpenSettings ={
    open :()=>{
      this.openSetting();
    }
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router : Router,
    private userServices : UserService

    ) {}

  ngAfterViewInit() {
    const swiperEl = document.getElementById('swiper-wime');
    console.log(swiperEl);
    swiperEl?.addEventListener('slidechange', (event:any) => {
      console.log(event.detail[0].realIndex);
      if (event.detail[0].realIndex === 0) {
        this.stateColorBackGround = event.detail[0].realIndex;
        console.log('Estás en el 1 slide.');
        this.dataNavBar.classNavbar = "";
        this.renderer.removeClass(document.body, 'bodyBlack');

      }
      if (event.detail[0].realIndex === 1) {
        this.stateColorBackGround = event.detail[0].realIndex
        console.log('Estás en el 2 slide.');
        this.dataNavBar.classNavbar = "viewWime";
        this.renderer.addClass(document.body, 'bodyBlack');
      }
    });
  }
  ngOnInit(){
    window.scrollTo({top: 0,behavior: 'smooth',})
  }

  // windows validators

  closeComments(){
    this.classAllComments= "hidde";
    this.stateComment = false;
  }
  openComment(){
    this.classAllComments= "show";
    this.stateComment = true;
  }

  openSetting(){
    this.dataSettingWime.classSetting ="show";
  }
  closeSetting(){
    this.dataSettingWime.classSetting="hidde"
  }

  openMenu(){
    this.dataMenuSide.classMenu = "show";
    console.log("Sdsds");
  }
  closeMenu(){
    this.dataMenuSide.classMenu = "hidde";
  }

  openNewPost(){
    this.classNewPostOptions = "show";
    this.setIconsBlackNavbar();
  }
  closeNewPost(){
    if (this.stateColorBackGround==0) {
      this.setIconsDefaultNavbar();
    }else if(this.stateColorBackGround!=0){
      this.setIconsWhiteNavbar();
    }
    this.classNewPostOptions = "hidde";
  }

  openShare(){
    this.classShare = "show";
  }

  //validators outside

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.id === 'fatherAllComments') {
      // El clic se originó en la etiqueta con el ID 'allComments' o dentro de ella
      // Realiza las acciones que necesites aquí
      console.log('Clic dentro de allComments');
      this.classAllComments= "hidde";
    }
    if (clickedElement.id === 'backgroundSettings') {
      // El clic se originó en la etiqueta con el ID 'allComments' o dentro de ella
      // Realiza las acciones que necesites aquí
      console.log('Clic dentro settings');
      this.dataSettingWime.classSetting="hidde"
    }

    if (clickedElement.id === 'backgroundMenu') {
      // El clic se originó en la etiqueta con el ID 'allComments' o dentro de ella
      // Realiza las acciones que necesites aquí
      console.log('Clic dentro backgroundMenu');
      this.closeMenu();
    }
    if (clickedElement.id === 'backgrounNewPostOptions') {
      // El clic se originó en la etiqueta con el ID 'allComments' o dentro de ella
      // Realiza las acciones que necesites aquí
      console.log('Clic dentro backgroundMenu');
      this.closeNewPost();
    }
    if (clickedElement.id === 'share') {
      // El clic se originó en la etiqueta con el ID 'allComments' o dentro de ella
      // Realiza las acciones que necesites aquí
      this.classShare = "hidde";
      console.log('Clic dentro share');

    }
  }

  //setData Navbar

  setIconsBlackNavbar(){
    this.dataNavBar.classNavbar= "white";
    this.dataNavBar.imgHome ="home-black";
    this.dataNavBar.imgNoti ="message-black";
    this.dataNavBar.imgMore ="more-black";
    this.dataNavBar.imgSearch ="search-black";
  }

 setIconsWhiteNavbar(){
  this.dataNavBar.classNavbar= "viewWime";
  this.dataNavBar.imgHome ="home";
  this.dataNavBar.imgNoti ="message-white";
  this.dataNavBar.imgMore ="more";
  this.dataNavBar.imgSearch ="search";
 }

 setIconsDefaultNavbar(){
  this.dataNavBar.classNavbar= "";
  this.dataNavBar.imgHome ="home";
  this.dataNavBar.imgNoti ="message-white";
  this.dataNavBar.imgMore ="more";
  this.dataNavBar.imgSearch ="search";
 }




 ngOnDestroy(){
  this.renderer.removeClass(document.body, 'bodyBlack');

 }

}
