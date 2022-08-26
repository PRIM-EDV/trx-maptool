import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationMapComponent } from './situation-map.component';
import { MapModule } from './rld-map/map.module';
import { PhElementsModule } from 'src/app/ph-elements/ph-elements.module';



@NgModule({
  declarations: [
    SituationMapComponent
  ],
  imports: [
    CommonModule,
    MapModule,
    PhElementsModule
  ],
  exports: [
    SituationMapComponent
  ]
})
export class SituationMapModule { }
