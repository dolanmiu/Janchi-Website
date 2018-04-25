import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent, HeroImageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
