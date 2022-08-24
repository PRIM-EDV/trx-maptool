import { ViewChild, Component, ElementRef } from '@angular/core';

@Component({
    selector: 'popup-window',
    styleUrls: ['./popup-window.component.scss'],
    templateUrl: 'popup-window.component.html',
})
export class PopupWindowComponent {
    @ViewChild('popup-window', {static: true})
    private _window: ElementRef<HTMLDivElement>;
    
    constructor() {}

}