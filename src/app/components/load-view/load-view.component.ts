import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-view',
  templateUrl: './load-view.component.html',
  styleUrls: ['./load-view.component.scss']
})
export class LoadViewComponent {
  @Input() classLoading = "hidde";
}
