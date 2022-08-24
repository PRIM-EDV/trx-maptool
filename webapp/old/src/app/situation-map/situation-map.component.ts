import { Component } from '@angular/core';
import { StateService } from '../shared/state/state.service';


@Component({
    selector: 'ph-situation-map',
    styleUrls: ['./situation-map.component.scss'],
    templateUrl: './situation-map.component.html'
})
export class SituationMapComponent {

    constructor(public stateService: StateService) {
        this.stateService.showNavigation = true;
    }
}