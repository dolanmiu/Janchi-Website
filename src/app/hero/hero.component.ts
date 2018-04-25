import { Component, OnInit } from '@angular/core';

import { IMAGES } from './images';

interface HeroImage {
    name: string;
    active?: boolean;
}

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
    public images: HeroImage[];

    constructor() {
        this.images = this.selectRandomImages(10);
        this.images[0].active = true;
    }

    public ngOnInit(): void {
    }

    private selectRandomImages(amount: number): HeroImage[] {
        const shuffled = IMAGES.sort(() => Math.random() - .5);
        const selected = shuffled.slice(0, amount);

        return selected;
    }

}
