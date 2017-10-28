import { Component, OnInit } from '@angular/core';

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
        this.images = [{
            name: 'Beef noodles',
        }, {
            name: 'Beef Sushi',
        }, {
            name: 'Chicken Sushi',
        }, {
            name: 'Chicken02',
        }, {
            name: 'Fried chicken01',
        }, {
            name: 'Range',
        }, {
            name: 'Rice',
        }, {
            name: 'Rice02',
        }, {
            name: 'Salmon Sushi',
        }, {
            name: 'Seafood pancake01',
        }, {
            name: 'Spicy pasta',
        }, {
            name: 'Spicy soup with rice',
        }, {
            name: 'Stone rice_01',
        }, {
            name: 'Veg Sushi',
        }];

        const index = Math.floor(Math.random() * this.images.length);

        this.images[index].active = true;
    }

    public ngOnInit(): void {
    }

}
