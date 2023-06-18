import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-photos',
  templateUrl: './section-photos.organism.html',
  styleUrls: ['./section-photos.organism.scss']
})
export class SectionPhotosOrganism {
  @Input() dataSectionPhotos = {
    textTitle : "",
    urlImg1 : "",
    urlImg2 : "",
    urlImg3 : "",
    urlImg4 : "",

  }
}
