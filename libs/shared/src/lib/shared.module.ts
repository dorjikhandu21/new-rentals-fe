import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedFilterComponent } from './components/advanced-filter/advanced-filter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdvancedFilterComponent, NavBarComponent],
})
export class SharedModule {}
