import { AfterContentInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'ph-tab',
    styleUrls: ['./tab.component.scss'],
    templateUrl: './tab.component.html'
})
export class TabComponent {

    public uuid = uuidv4();

    @Input() subString: string = '';
    @Output() click = new EventEmitter();

    constructor() {

    }

}