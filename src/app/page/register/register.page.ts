import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, UntypedFormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription = new Subscription();
  private arrayDataUser : any = [];
  classLoading = "hidde";
  formRegister : FormGroup;
  alertUserName : boolean = false;
  alertName : boolean = false;
  alertPassword : boolean = false;
  alertEmail : boolean = true;
  alertEmailConfirm : boolean = false;
  alertPhoneNumber : boolean = false;
  stateForm : boolean = false;
  textUserName  = "";
  textName  = "";
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
      name : new FormControl(),
      userName : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
      emailConfirm : new FormControl(),
      phoneNumber : new FormControl(),
    })
  }
  ngOnInit(){
    this.getUserData();
  }
  ngAfterViewInit(){
    this.renderer.addClass(document.body,"bodyWhite")
  }
  onSubmit(){
    this.validateForm();
  }
  // listeners

  onInputChangeName(event: any) {
    const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\``|,.<>\/?]+/;
    const numbersRegex = /[0-9]/;
    if (specialCharactersRegex.test(event.target.value) || numbersRegex.test(event.target.value)) {
      console.log('El valor contiene caracteres especiales y números.');
      this.alertName = true;
      this.textName = "Tu nombre no debe contener caracteres especiales o numeros";

    } else {
      this.alertName = false;
    }

  }
  onInputChangeUserName(event: any) {
    const inputValue = event.target.value;
    const userNames :any = [];
    if (inputValue.length>=2) {
      this.arrayDataUser.map((value:any)=>{
        userNames.push(value.userName);
        if (userNames.includes(inputValue)) {
          this.alertUserName = true;
          this.textUserName = "Este usuario ya existe";
        } else {
          this.alertUserName = false;
        }
      })
    }
  }
  onInputChangeEmail(event: any) {
    const inputValue = event.target.value;
    const userEmail :any = [];
    if (inputValue.length>=2) {
      this.arrayDataUser.map((value:any)=>{
        userEmail.push(value.userEmail);
        if (userEmail.includes(inputValue)) {
          this.alertEmail = true;
          this.textEmail = "Este correo ya esta registrado";
        }else{
          this.alertEmail = false;
        }
      })
    }
  }


  //-------------------validators
  //validate form
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
    // name
    if (this.formRegister.value.name=="" || this.formRegister.value.name==null) {
      this.stateForm = false;
      this.alertUserName = true;
      this.textUserName = "El campo esta vacio";
    } else {
      this.stateForm = true;
      this.alertUserName = false;
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
  //gets y sets
  getUserData(){
    const arrayData : any  = [];

    const userIdSubs = this.userService.getUserId().subscribe((response:any)=>{
      console.log(response);
      response.map((value : any) =>{
      console.log(value);

        const dataUserSubs = this.userService.getUserData(value.id).subscribe((response)=>{
          arrayData.push(response[0]);
          this.arrayDataUser.push(response[0]);
        });
      console.log(arrayData);

        this.subscription.add(dataUserSubs);
      });
    });
    this.subscription.add(userIdSubs);
  }

  getDataUserForm(){
    const userData = {
      name :  this.formRegister.value?.name,
      userName : this.formRegister.value?.userName,
      phoneNumber : this.formRegister.value?.phoneNumber,
      userEmail : this.formRegister.value?.email
    }
    console.log(userData);
    return userData;
  }
  setData(){
    let userId = "";
    this.classLoading = "show";
    const userData = {
      userName : this.formRegister.value.userName,
      password : this.formRegister.value.password,
      email : this.formRegister.value.email,
      phoneNumber : this.formRegister.value.phoneNumber,
    }
    this.userService.register(userData.email, userData.password)
    .then((response:any)=>{
      console.log(response.user.uid);
      const userId = response.user.uid;
      this.userService.createUserIdandSetData(response.user.uid)
      .then((response : any)=>{
        console.log(response);
        this.userService.addDataUser(userId,this.getDataUserForm())
        .then(()=>{
          this.classLoading = "hidde";
          this.dataAlert = {
            classAlert : "show",
            text : "¡"+userData.userName+" se ha creado exitosamente tu cuenta!",
            textButton : "Continuar",
            redirect : ()=>{
              localStorage.setItem('uid', userId);
              this.router.navigate(['/photoProfile'])
            }
          }
        })
      });
    })
    .catch((e)=>{
      console.log(e);
    });
  }
  // dataAlert
  closeAlert(){
    this.dataAlert.classAlert = "hidde"
  }
  ngOnDestroy(){
    this.renderer.removeClass(document.body,"bodyWhite");
    this.subscription.unsubscribe();
  }
}
