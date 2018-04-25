import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DeliveryComponent } from './delivery.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DeliveryComponent],
    exports: [DeliveryComponent],
})
export class DeliveryModule {}
