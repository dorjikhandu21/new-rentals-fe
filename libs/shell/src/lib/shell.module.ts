import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import {LayoutModule} from "@new-rentals/layout";
import {RouterOutlet} from "@angular/router";

@NgModule({
  imports: [CommonModule, LayoutModule, RouterOutlet],
  declarations: [ShellComponent],
})
export class ShellModule {}
