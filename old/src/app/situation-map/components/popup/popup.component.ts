import {Component, AfterContentInit, Input, ViewChild, ElementRef} from '@angular/core';
import { PopupService } from './popup.service';

@Component({
    selector: 'popup',
    styleUrls: ['./popup.component.scss'],
    templateUrl: 'popup.component.html',
})
export class PopupComponent {

    constructor(private readonly _popupService: PopupService) {
        _popupService.componentRef = this;
    }
}