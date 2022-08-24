import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule,
  ]
})
export class DashboardModule { }
