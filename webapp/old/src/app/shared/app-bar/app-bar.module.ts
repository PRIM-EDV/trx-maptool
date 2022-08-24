import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar.component';
import { ElementsModule } from 'src/app/elements/elements.module';


@NgModule({
    imports: [
        CommonModule,
        ElementsModule
    ],
    declarations: [AppBarComponent],
    exports: [AppBarComponent],
})
export class AppBarModule {}
