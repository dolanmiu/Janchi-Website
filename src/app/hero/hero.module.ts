import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [HeroComponent],
    exports: [
        HeroComponent,
    ],
})
export class HeroModule { }