import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SliderComponent, DropdownComponent, GridComponent, ButtonComponent, TabComponent],
    exports: [SliderComponent, DropdownComponent, GridComponent, ButtonComponent, TabComponent],
})
export class ElementsModule {}
