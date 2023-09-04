import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadComponent } from './squad.component';
import { PhElementsModule } from 'src/app/ph-elements/ph-elements.module';
import { SquadService } from './squad.service';
import { CreatePopupComponent } from './popups/create-popup/create-popup.component';



@NgModule({
  declarations: [
    SquadComponent,
    CreatePopupComponent
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
