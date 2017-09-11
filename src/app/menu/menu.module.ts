import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
      MenuComponent,
  ],
  exports: [
      MenuComponent,
  ],
})
export class MenuModule { }
