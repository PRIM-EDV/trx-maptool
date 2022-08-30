import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PhWindowComponent } from 'src/app/ph-elements/ph-window/ph-window.component';
import { MapEntityType } from '../../rld-map/common/map-entity';
import { MapEntityData } from '../../rld-map/common/map-entity-data';
import { SituationMapEntity } from '../../common/situation-map-entity';


@Component({
  selector: 'create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['../popup.component.scss']
})
export class CreatePopupComponent implements AfterViewInit {
  
    MapEntityType = MapEntityType;

    @ViewChild(PhWindowComponent) window!: PhWindowComponent;

    @Output() create = new EventEmitter<SituationMapEntity>();

    public type?: MapEntityType;
    public entity: SituationMapEntity = new SituationMapEntity();
  
    constructor() { }

    ngAfterViewInit(): void {
        this.window.hide();
    }


    public apply() {
        this.entity.type = this.type!;
        console.log(this.entity)
        this.create.next(this.entity);
        this.window.hide();
    } 

    public open(cursorPosition: {x: number, y: number}, mapPosition: {x: number, y: number}) {
        this.window.ref.nativeElement.style.top = `${cursorPosition.y}px`;
        this.window.ref.nativeElement.style.left = `${cursorPosition.x}px`;

        this.entity = new SituationMapEntity();
        this.entity.position = mapPosition;

        this.window.show();
    }

    public close() {

    }

    public cancel() {

    }
}
