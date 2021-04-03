import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ElementsModule } from '../elements/elements.module';

@NgModule({
    imports: [
        CommonModule,
        ElementsModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
})
export class LoginModule {}
