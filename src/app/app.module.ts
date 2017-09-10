import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FooterModule,
        MenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
