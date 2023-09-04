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

    public squad: Squad = {name: "", callsign: "", combattants: 0, state: SquadState.STATE_UNDEFINED};

    // public type?: MapEntityType;
    // public entity: SituationMapEntity = new SituationMapEntity();
  
    constructor() { }

    ngAfterViewInit(): void {
        this.window.hide();
    }


    public apply() {
        // this.entity.type = this.type!;
        // console.log(this.entity)
        // this.create.next(this.entity);
        this.window.hide();
    } 

    public open(cursorPosition: {x: number, y: number}) {
        this.window.ref.nativeElement.style.top = `${cursorPosition.y}px`;
        this.window.ref.nativeElement.style.left = `${cursorPosition.x}px`;

        // this.entity = new SituationMapEntity();
        // this.entity.position = mapPosition;
        console.log("show")
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
