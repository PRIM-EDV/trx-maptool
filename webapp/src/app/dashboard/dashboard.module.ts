import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { SituationMapModule } from '../dashboard-elements/situation-map/situation-map.module';
import { SquadModule } from '../dashboard-elements/squad/squad.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SituationMapModule,
    PhElementsModule,
    SquadModule
  ]
})
export class DashboardModule { }
