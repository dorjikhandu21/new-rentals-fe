import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import {LayoutModule} from "../../../layout/src/lib/layout.module";
import {RouterOutlet} from "@angular/router";

@NgModule({
  imports: [CommonModule, LayoutModule, RouterOutlet],
  declarations: [ShellComponent],
})
export class ShellModule {
  static forRoot() {
    return {
      ngModule: ShellModule
    };
  }
}
