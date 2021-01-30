import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationMapComponent } from './situation-map.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SituationMapComponent],
    exports: [SituationMapComponent],
})
export class SituationMapModule {}
