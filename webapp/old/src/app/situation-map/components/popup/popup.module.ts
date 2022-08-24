import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupFriendComponent } from './popup-friend/popup-friend.component';
import { ElementsModule } from 'src/app/elements/elements.module';

@NgModule({
    imports: [
        CommonModule,
        ElementsModule
    ],
    declarations: [PopupComponent, PopupFriendComponent],
    exports: [PopupComponent],
})
export class PopupModule {}
