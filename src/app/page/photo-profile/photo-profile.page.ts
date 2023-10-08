import { Component, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { documentId } from 'firebase/firestore';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.page.html',
  styleUrls: ['./photo-profile.page.scss']
})
export class PhotoProfilePage {

  @ViewChild('fileInput') fileInput!: ElementRef;
  urlImg = "/assets/img/default.png";
  private idUser : any =  "";
  private field : any;

  constructor(
    private renderer :Renderer2,
    private userServices : UserService
  ){}


  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyWhite')
    this.idUser = localStorage.getItem('idUser');
    console.log(this.idUser);
  }

  onSubmit() {
    console.log(this.idUser);
    console.log(this.urlImg);
    // this.userServices.addItemDataUser(this.idUser, {urlImg : this.urlImg})
    // .then((response : any)=>{
    //   console.log(response);
    // })
    // .catch(error=>{console.error();
    // });

    // SE REPITE EL SERVICIO Y CREA UN BUCLE!!!!!!!!!!!!!!!!
    this.userServices.getUserData(this.idUser).subscribe((response:any)=>{
      console.log(response[0]);
      const data = {
        userName : response[0].userName,
        userEmail :response[0].userEmail,
        phoneNumber : response[0].phoneNumber,
        urlImg : this.urlImg
      }
      this.userServices.addDataUser(this.idUser, data);
    });
  }

  openSelectorField() {
    this.fileInput.nativeElement.click();
  }

  loadArchive(event: any) {
    this.field = event.target.files[0];
    console.log(this.field);
    this.userServices.setImage(this.field).then((downloadURL:any) => {
      console.log('URL de descarga del archivo:', downloadURL);
      this.urlImg = downloadURL;
    });;
  }
  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyWhite')
  }
}
