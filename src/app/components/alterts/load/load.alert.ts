import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.alert.html',
  styleUrls: ['./load.alert.scss']
})
export class LoadAlert {
  @Input() classLoading = "hidde";
}
