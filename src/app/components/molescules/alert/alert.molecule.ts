import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.molecule.html',
  styleUrls: ['./alert.molecule.scss']
})
export class AlertMolecule {
  @Input() dataAlert = {
    classAlert : "",
    text : ""
  }
}
