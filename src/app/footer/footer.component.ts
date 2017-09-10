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

    constructor() { }

    public ngOnInit(): void {
    }

}
