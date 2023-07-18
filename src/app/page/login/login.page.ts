import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  ){
    this.formulario = new FormGroup({
      name : new FormControl(),
      password : new FormControl()
    })
  }

  ngOnInit(){
    this.productService.getUser().subscribe((response)=>{
      console.log(response);
      this.userName = response[0].userName;
      this.password = response[0].password;
    });

  }


  onSubmit(){
    console.log(this.formulario.value);
    console.log(this.userName);
    console.log(this.password);
    if (this.formulario.value.name == this.userName && this.formulario.value.password == this.password) {
      this.classForm = "";
      this.alertForm = "";
    }else{
      this.classForm = "error";
      this.alertForm = "Datos incorrectos";
      console.log("erorrrr");
    }
  }
}
