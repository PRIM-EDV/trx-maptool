import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SliderComponent } from './slider/slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { TabComponent } from './tab/tab.component';
import { PhWindowComponent } from './ph-window/ph-window.component';
import { PhInputComponent } from './ph-input/ph-input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [SliderComponent, DropdownComponent, GridComponent, ButtonComponent, TabComponent, PhInputComponent, PhWindowComponent, PhInputComponent],
    exports: [SliderComponent, DropdownComponent, GridComponent, ButtonComponent, TabComponent, PhInputComponent, PhWindowComponent],
})
export class ElementsModule {}
