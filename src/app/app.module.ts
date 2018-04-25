import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeroModule } from './hero/hero.module';
import { InstagramModule } from './instagram/instagram.module';
import { MenuModule } from './menu/menu.module';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
    declarations: [
        AppComponent,
        DeliveryComponent,
    ],
    imports: [
        BrowserModule,
        FooterModule,
        MenuModule,
        HeroModule,
        InstagramModule,
        AboutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
