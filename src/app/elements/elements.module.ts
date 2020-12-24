import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SliderComponent, DropdownComponent, GridComponent],
    exports: [SliderComponent, DropdownComponent, GridComponent],
})
export class ElementsModule {}
