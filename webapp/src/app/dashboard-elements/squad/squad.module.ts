import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadComponent } from './squad.component';
import { PhElementsModule } from 'src/app/ph-elements/ph-elements.module';



@NgModule({
  declarations: [
    SquadComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    SquadComponent
  ]
})
export class SquadModule { }
