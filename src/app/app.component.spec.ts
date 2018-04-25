import { async, TestBed } from '@angular/core/testing';

import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { DeliveryModule } from './delivery/delivery.module';
import { FooterModule } from './footer/footer.module';
import { HeroModule } from './hero/hero.module';
import { InstagramModule } from './instagram/instagram.module';
import { MenuModule } from './menu/menu.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [FooterModule, MenuModule, HeroModule, InstagramModule, AboutModule, DeliveryModule],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
