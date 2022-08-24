import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationMapComponent } from './situation-map.component';
import { MapModule } from './rld-map/map.module';



@NgModule({
  declarations: [
    SituationMapComponent
  ],
  imports: [
    CommonModule,
    MapModule
  ],
  exports: [
    SituationMapComponent
  ]
})
export class SituationMapModule { }
