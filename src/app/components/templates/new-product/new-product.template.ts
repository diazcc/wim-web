import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { collection, onSnapshot, query, where , DocumentSnapshot, addDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';

@Component({
  selector: 'app-new-product-template',
  templateUrl: './new-product.template.html',
  styleUrls: ['./new-product.template.scss']
})
export class NewProductTemplate {



}
