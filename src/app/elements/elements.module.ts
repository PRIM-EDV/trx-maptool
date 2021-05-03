import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { PhWindowComponent } from './ph-window/ph-window.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SliderComponent, DropdownComponent, GridComponent, ButtonComponent, TabComponent, InputComponent, PhWindowComponent],
    exports: [SliderComponent, DropdownComponent, GridComponent, ButtonComponent, TabComponent, InputComponent, PhWindowComponent],
})
export class ElementsModule {}
