import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Squad, SquadState } from 'proto/maptool.squad';
import { PhWindowComponent } from 'src/app/ph-elements/ph-window/ph-window.component';


@Component({
  selector: 'squad-create-popup',
  templateUrl: './create-popup.component.html',
})
export class CreatePopupComponent implements AfterViewInit {
  
    @ViewChild(PhWindowComponent) window!: PhWindowComponent;

    @Output() create = new EventEmitter<Squad>();

    public squad: Squad = {name: "", callsign: "", combattants: 0, state: SquadState.STATE_UNSTAGED, position: 0};
  
    constructor() { }

    ngAfterViewInit(): void {
        this.window.hide();
    }


    public apply() {
        this.create.next(this.squad);
        this.window.hide();
    } 

    public open(cursorPosition: {x: number, y: number}) {
        this.squad =  {name: "", callsign: "", combattants: 0, state: SquadState.STATE_UNSTAGED, position: 0};

        this.window.ref.nativeElement.style.top = `${cursorPosition.y}px`;
        this.window.ref.nativeElement.style.left = `${cursorPosition.x}px`;

        this.window.show();
    }

    public close() {
        console.log("close")
        this.window.hide();
    }

    public cancel() {
        this.close();
    }
}
