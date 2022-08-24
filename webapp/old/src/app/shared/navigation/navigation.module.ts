import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ElementsModule } from 'src/app/elements/elements.module';
import { AppBarModule } from '../app-bar/app-bar.module';

@NgModule({
    imports: [
        AppBarModule,
        CommonModule,
        ElementsModule,
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
})
export class NavigationModule {}
