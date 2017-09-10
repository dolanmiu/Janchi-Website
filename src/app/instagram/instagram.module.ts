import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InstagramComponent } from './instagram.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [InstagramComponent],
    exports: [
        InstagramComponent,
    ],
})
export class InstagramModule { }
