import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCWs6BX1iYtsTvTsgAt3aXaMmDj4eo_Ryo',
        }),
    ],
    declarations: [
        FooterComponent,
    ],
    exports: [
        FooterComponent,
    ],
})
export class FooterModule { }
