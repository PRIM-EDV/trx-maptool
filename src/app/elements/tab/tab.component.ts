import { AfterContentInit, Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'ph-tab',
    styleUrls: ['./tab.component.scss'],
    templateUrl: './tab.component.html'
})
export class TabComponent implements AfterContentInit {

    @Input() subString: string = '';
    @Output() click = new EventEmitter();

    ngAfterContentInit() {

    }

}