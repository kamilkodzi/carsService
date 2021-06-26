import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[csImportant]'
})
export class ImportantDirective {

  constructor(private el:ElementRef ) { 
    el.nativeElement.style.fontWeight=700;
    el.nativeElement.style.color="#295089";
  }


}
