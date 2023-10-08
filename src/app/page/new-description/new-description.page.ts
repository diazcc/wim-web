import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-description',
  templateUrl: './new-description.page.html',
  styleUrls: ['./new-description.page.scss']
})
export class NewDescriptionPage {

  descriptionForm : FormGroup ;
  classLoading = "hidde";
  constructor(
    private renderer : Renderer2,
    private router :  Router,
    private userServices : UserService
  ){
    this.descriptionForm = new FormGroup({
      textDescription : new FormControl()
    })
  }
  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyWhite')
  }
  onSubmit(){
    this.classLoading = "show";
    console.log(this.descriptionForm.value);
    const dataPresentation = this.descriptionForm.value;
    console.log(localStorage.getItem('idUser'));
    this.userServices.setDataPresentation(localStorage.getItem('idUser'),dataPresentation)
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
