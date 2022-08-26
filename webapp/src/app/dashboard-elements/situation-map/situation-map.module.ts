import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationMapComponent } from './situation-map.component';
import { MapModule } from './rld-map/map.module';
import { PhElementsModule } from 'src/app/ph-elements/ph-elements.module';
import { CreatePopupComponent } from './popups/create-popup/create-popup.component';



@NgModule({
  declarations: [
    SituationMapComponent,
    CreatePopupComponent
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
