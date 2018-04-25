import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeroComponent } from './hero.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HeroComponent, HeroImageComponent],
    exports: [HeroComponent],
})
export class HeroModule {}
