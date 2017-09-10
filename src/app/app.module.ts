import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeroModule } from './hero/hero.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FooterModule,
        MenuModule,
        HeroModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
