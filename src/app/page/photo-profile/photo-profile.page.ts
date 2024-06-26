import { Component, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { documentId } from 'firebase/firestore';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.page.html',
  styleUrls: ['./photo-profile.page.scss']
})
export class PhotoProfilePage {

  @ViewChild('fileInput') fileInput!: ElementRef;
  classLoading = "hidde";
  private subscriptions : Subscription = new Subscription();

  urlImg = "/assets/img/default.png";
  private userId : any =  "";
  private field : any;

  constructor(
    private renderer :Renderer2,
    private userServices : UserService,
    private router : Router
  ){}


  ngOnInit(){
    this.renderer.addClass(document.body, 'bodyWhite')
    this.userId = localStorage.getItem('uid');
    console.log(this.userId);
  }

  onSubmit() {
    this.classLoading = "show";
    console.log(this.userId);
    console.log(this.urlImg);
    const userDataSubs = this.userServices.getUserData(this.userId).subscribe((response:any)=>{
      this.subscriptions.add(userDataSubs);
      console.log(response[0]);
      const data = response[0];
      data['urlImg'] = this.urlImg;
      console.log(data);
      this.userServices.addDataUser(this.userId, data)
      .then(()=>{
        this.classLoading ="hidde";
        this.subscriptions.unsubscribe();
        this.router.navigate(['/description']);
      })
      .catch(error=>console.log(error));
    });
  }

  openSelectorField() {
    this.fileInput.nativeElement.click();
  }

  loadArchive(event: any) {
    this.classLoading = "show";
    this.field = event.target.files[0];
    console.log(this.field);
    this.userServices.setImage(this.field).then((downloadURL:any) => {
      console.log('URL de descarga del archivo:', downloadURL);
      this.urlImg = downloadURL;
      this.classLoading="hidde";
    });;
  }
  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'bodyWhite')
    this.subscriptions.unsubscribe();
  }
}
