import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutsideDirective]'
})
export class ClickOutsideDirectiveDirective {
  constructor(private el: ElementRef) {}
  @Output() arrayDataChange = new EventEmitter<boolean[]>();
  arrayData: boolean[] = [];

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      const isOutside = true;
      this.arrayData.push(isOutside);
      event.stopPropagation();
    } else {
      const isInside = false;
      this.arrayData.push(isInside);
      event.stopPropagation();
    }
    if (this.arrayData.length > 2) {
      this.arrayData.splice(0, 2);
    }
    this.arrayDataChange.emit(this.arrayData);

  }

}
