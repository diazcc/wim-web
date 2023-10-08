import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user-description',
  templateUrl: './new-user-description.page.html',
  styleUrls: ['./new-user-description.page.scss']
})
export class NewUserDescriptionPage {
  descriptionForm : FormGroup;
  classLoading = "hidde";
  constructor(
    private renderer : Renderer2,
    private router :  Router,
    private userServices : UserService
  ){
    this.descriptionForm = new FormGroup({
      age : new FormControl(),
      hobbies : new FormControl(),
      locate : new FormControl(),
      skills : new FormControl(),
    })
  }
  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyWhite')
  }
  onSubmit(){
    this.classLoading = "show";
    console.log(this.descriptionForm.value);
    const dataDescription = this.descriptionForm.value;
    console.log(localStorage.getItem('idUser'));
    this.userServices.setDataDescription(localStorage.getItem('idUser'),dataDescription)
    .then((response:any)=>{
      console.log(response);
      this.classLoading = "hidde";
      this.router.navigate(['/profileUser']);
    });
  }
  redirect(){
    this.router.navigate(['/profileUser']);
  }
  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyWhite')
  }
}
