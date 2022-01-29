import {Component} from '@angular/core';
import { MapObject } from 'src/app/core';
import { Popup } from '../common/popup';

@Component({
    selector: 'popup-friend',
    styleUrls: ['../common/popup.scss'],
    templateUrl: 'popup-friend.component.html',
})
export class PopupFriendComponent extends Popup{
    private _inputName: HTMLInputElement;
    private _mapObject: MapObject;

    private _nbCombatants: number = 0;
    private _nbWounded: number = 0;
    private _tickValues: Array<number> = [0, 30];

    private _squadnames: Array<string> = [];
    private _callsigns: Array<string> = [];
    private _medics: number = 0;
    private _technitians: number = 0;
    private _scientists: number = 0;

    private _squadname = "Paul"
    private _callsign = "1234"

    constructor() {
        super();
    }
}