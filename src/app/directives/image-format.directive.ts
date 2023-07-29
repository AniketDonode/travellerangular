import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageFormat]'
})
export class ImageFormatDirective {

  constructor(private el : ElementRef) { }

  @HostListener('blur') onBlur(){
    let value : string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

}
