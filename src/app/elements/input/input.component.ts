import { Component, Input } from '@angular/core';

@Component({
    selector: 'ph-input',
    styleUrls: ['./input.component.scss'],
    templateUrl: './input.component.html'
})
export class InputComponent  {

    @Input() public name: string = 'bla';
    @Input() public model: string = undefined;

    constructor() {}
}