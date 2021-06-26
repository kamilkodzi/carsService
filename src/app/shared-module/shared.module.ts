import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,SurnameShortcutPipe,ImportantDirective],
  declarations: [HeaderComponent, SurnameShortcutPipe, ImportantDirective]
})
export class SharedModule { }
