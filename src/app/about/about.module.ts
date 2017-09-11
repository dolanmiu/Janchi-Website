import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [AboutComponent],
    exports: [
        AboutComponent,
    ],
})
export class AboutModule { }
