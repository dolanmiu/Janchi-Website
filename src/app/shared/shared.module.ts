import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HrComponent } from './hr/hr.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HrComponent],
    exports: [HrComponent],
})
export class SharedModule {}
