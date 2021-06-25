import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surnameShortcut'
})
export class SurnameShortcutPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(!value){
      return '';
    }
    return value.charAt(0) + '.';
  }

}
