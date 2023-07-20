import { Component } from '@angular/core';
import { ProductServicesService } from './services/product-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infinityindustry';
  constructor(
    private productService :ProductServicesService
  ){}
  ngOnInit(){
    this.productService.loginWithEmailPassword().then(response =>{console.log(response)}).catch(error =>{console.log(error)});;
  }
}
