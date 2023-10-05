import { Component, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { documentId } from 'firebase/firestore';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.page.html',
  styleUrls: ['./photo-profile.page.scss']
})
export class PhotoProfilePage {
  constructor(
    private renderer :Renderer2
  ){}

  ngOnInit(){
    this.renderer.addClass(document.body , 'bodyWhite');
  }
  @ViewChild('fileInput') fileInput!: ElementRef;

  abrirSelectorDeArchivo() {
    this.fileInput.nativeElement.click();
  }

  cargarArchivo(event: any) {
    const archivoSeleccionado = event.target.files[0];
    // Aquí puedes realizar las acciones que desees con el archivo seleccionado, como cargarlo o procesarlo.
  }
}
