import { Component } from '@angular/core';
import { FormGroup, FormControl, UntypedFormArray } from '@angular/forms';
import {  Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ProductServicesService } from 'src/app/services/product-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  formulario: FormGroup;
  alertForm = "";
  classForm = "";
  private userName : string ="";
  private password : string ="";
  constructor(
    private productService : ProductServicesService,
    private adminService : AdminService,
    private router : Router
  ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      password : new FormControl()
    })
  }

  ngOnInit(){

  }


  onSubmit(){
    console.log(this.formulario.value);
    console.log(this.userName);
    console.log(this.password);
    if (this.formulario.value.name == null  && this.formulario.value.password == null) {
      this.classForm = "error";
      this.alertForm = "Datos incorrectos";
      console.log("erorrrr");
    }else{
      this.validateUser();
      this.classForm = "";
      this.alertForm = "";
    }
  }

  validateUser(){
    this.adminService.loginAdmin(this.formulario.value.name,this.formulario.value.password).then(response=>{
      this.router.navigate(['/admHome']);
      console.log(response);
    }).catch(error=>{
      this.classForm = "error";
      this.alertForm = "Datos incorrectos";
      console.log(error);
    });
  }

}
