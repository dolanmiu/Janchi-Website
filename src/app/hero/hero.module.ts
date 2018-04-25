import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';
import { HeroImageComponent } from './hero-image/hero-image.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [HeroComponent, HeroImageComponent],
    exports: [
        HeroComponent,
    ],
})
export class HeroModule { }
