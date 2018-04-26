import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    public lat = 51.593136;
    public lng = -0.2614707;
    public scrollWheel = false;
    public zoomLevel = 16;
    public disableDoubleClickZoom = true;
    public minZoom = 10;
    public maxZoom = 17;
    public streetViewControl = false;

    constructor() {}

    public ngOnInit(): void {}

    public navToGoogleMaps(): void {
        // tslint:disable-next-line:max-line-length
        const url = 'maps.google.com/maps/place/Bang+Bang+Oriental+Foodhall/@51.593471,-0.2616917,17z/data=!3m1!4b1!4m5!3m4!1s0x48761149e2555555:0x37bd9c588894d04f!8m2!3d51.593471!4d-0.259503';

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
