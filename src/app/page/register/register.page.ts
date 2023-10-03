import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, UntypedFormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  formRegister : FormGroup;
  alertUserName : boolean = false;
  alertPassword : boolean = false;
  alertEmail : boolean = false;
  alertEmailConfirm : boolean = false;
  alertPhoneNumber : boolean = false;
  stateForm : boolean = false;
  textUserName  = "";
  textPassword  = "";
  textEmail  = "";
  textEmailConfirm  = "";
  textPhoneNumber  = "";
  dataAlert = {
    classAlert : "show",
    text : "Requisitos: Nombre usuario en minuscula y sin espacios, contraseña mas de 6 caracteres",
    textButton : "Continuar",
    redirect : ()=>{this.closeAlert()}
  }
  constructor(
    private renderer : Renderer2,
    private router : Router,
    private userService : UserService
  ){
    this.formRegister = new FormGroup({
      userName : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
      emailConfirm : new FormControl(),
      phoneNumber : new FormControl(),
    })
  }


  ngAfterViewInit(){
    this.renderer.addClass(document.body,"bodyWhite")
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body,"bodyWhite")
  }

  onSubmit(){
    this.validateForm();
  }

  validateForm(){
    //userName
    if (this.formRegister.value.userName=="" || this.formRegister.value.userName==null) {
      this.stateForm = false;
      this.alertUserName = true;
      this.textUserName = "Los datos ingresados no son aceptables";
    } else if(/[A-Z]/.test(this.formRegister.value.userName)) {
      this.stateForm = false;
      this.alertUserName = true;
      console.log("may");
      this.textUserName = "El nombre debe ser en minisculas";
    } else if(this.formRegister.value.userName.includes(' ')){
      this.stateForm = false;
      this.alertUserName = true;
      console.log("vacio");
      this.textUserName = "No puede haber espacios";
    }else {
      this.alertUserName = false ;
      this.stateForm = true;
    }
    //password
    if(this.formRegister.value.password == "" || this.formRegister.value.password == null) {
      this.stateForm = false;
      this.alertPassword = true;
      this.textPassword = "El campo es obligatorio";

    }else {
      this.alertPassword = false ;
      this.stateForm = true;
    }
    //email emailConfirm
    if (this.formRegister.value.email == "" || this.formRegister.value.email== null) {
      this.stateForm = false;
      this.alertEmailConfirm = true;
      this.textEmailConfirm = "Uno de los campos del correo estan vacios";
    } else if(this.formRegister.value.email != this.formRegister.value.emailConfirm){
      this.stateForm = false;
      this.alertEmailConfirm = true;
      this.textEmailConfirm = "Los correos no son iguales";

    }else {
      this.alertEmailConfirm = false ;
      this.stateForm = true;
    }

    //phoneNumber
    if (this.formRegister.value.phoneNumber == "" || this.formRegister.value.phoneNumber== null) {
      this.stateForm = false;
      this.alertPhoneNumber = true;
      this.textPhoneNumber = "El campo esta vacio";
    } else {
      this.alertPhoneNumber = false ;
      this.stateForm = true;
    }

    if (this.stateForm) {
      this.setData();
    }
  }


  // dataAlert
  closeAlert(){
    this.dataAlert.classAlert = "hidde"
  }
  setData(){
    const data = {
      userName : this.formRegister.value.userName,
      password : this.formRegister.value.password,
      email : this.formRegister.value.email,
      phoneNumber : this.formRegister.value.phoneNumber,
    }
    console.log(data);
    this.userService.register(data.email, data.password)
    .then(()=>{
      this.dataAlert.classAlert = "show";
    })
    .catch((e)=>{
      console.log(e);
    });
  }
}
