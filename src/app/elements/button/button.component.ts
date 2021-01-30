import { AfterContentInit, Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'ph-button',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html'
})
export class ButtonComponent implements AfterContentInit {

    @Output() click = new EventEmitter();

    ngAfterContentInit() {

    }

}