import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index-presentation',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class Login {
  classLoading = "hidde";
  classContent = "";
  classImg = "hidde";
  classDescription = "hidde";
  classFormLogin = "hidde";
  formLogin : FormGroup;
  dataAlert = {
    classAlert : "hidde",
    text : "texto",
    textButton : "texto",
    redirect : ()=>{this.router.navigate(['/login'])}
  }
  constructor(
    private router : Router,
    private renderer : Renderer2,
    private userServices : UserService
  ){
    this.formLogin = new FormGroup({
      email : new  FormControl,
      password : new FormControl
    });
  }

  ngOnInit(){
    localStorage.removeItem('uid');
    setTimeout(() => {
      this.classImg = "show";
    }, 1700);
    setTimeout(() => {
      this.classDescription = "show";
    }, 2000);
    setTimeout(() => {
      this.classDescription = "hidde";
      this.classFormLogin = "show";

    }, 4000);


  }
  redirectHome(){
    this.router.navigate(['/home']);
  }
  redirectCrearCount(){
    this.router.navigate(['/register'])
  }

  validateData(){

    //email
    if (this.formLogin.value.email == null || this.formLogin.value.email == "" || this.formLogin.value.password == null || this.formLogin.value.password == "") {
      this.dataAlert ={
        classAlert : "show",
        text : "Al parecer uno de los campos esta vacio",
        textButton : "Cerrar",
        redirect : ()=>{
          this.dataAlert.classAlert="hidde"
        }
      }
    } else {
      this.login();
    }
  }

  login(){
    this.userServices.login(this.formLogin.value.email, this.formLogin.value.password)
    .then((response :any)=>{
      console.log(response.user.uid);
      localStorage.setItem('uid' ,response.user.uid);
      this.router.navigate(['/profileUser'])
    })
    .catch((e : any)=>{
      console.log(e);
      this.dataAlert = {
        classAlert : "show",
        text : "El usuario "+this.formLogin.value.email+" no existe o la contraseña es incorrecta",
        textButton : "Cerrar",
        redirect : () =>{
          this.dataAlert.classAlert="hidde"
        }
      }
    });
  }
}
