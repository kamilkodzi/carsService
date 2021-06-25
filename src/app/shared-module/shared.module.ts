import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,SurnameShortcutPipe],
  declarations: [HeaderComponent, SurnameShortcutPipe]
})
export class SharedModule { }
