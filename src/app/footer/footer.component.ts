import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    public lat = 51.593471;
    public lng = -0.2605973;
    public scrollWheel = false;
    public zoomLevel = 16;
    public disableDoubleClickZoom = true;
    public minZoom = 10;
    public maxZoom = 17;
    public streetViewControl = false;

    constructor() {}

    public ngOnInit(): void {}

    public navToGoogleMaps(): void {
        const url = `maps.google.com/maps?daddr=${this.lat},${this.lng}&amp;ll=`;

        if (
            navigator.platform.indexOf('iPhone') !== -1 ||
            navigator.platform.indexOf('iPod') !== -1 ||
            navigator.platform.indexOf('iPad') !== -1
        ) {
            window.open(`maps://${url}`);
        } else {
            window.open(`http://${url}`);
        }
    }
}
