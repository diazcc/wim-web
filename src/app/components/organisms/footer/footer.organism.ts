import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.organism.html',
  styleUrls: ['./footer.organism.scss']
})
export class FooterOrganism {
  @Input() dataFooter = {
    linkWhatsapp : "",
    linkFacebook : "",
    linkInstagram : "",
    urlTC : ""
  }
}
