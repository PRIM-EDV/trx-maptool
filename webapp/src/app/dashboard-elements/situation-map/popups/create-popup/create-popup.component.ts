import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PhWindowComponent } from 'src/app/ph-elements/ph-window/ph-window.component';
import { v4 } from 'uuid';
import { MapEntityData, MapEntityType } from '../../rld-map/common/map-entity-data';


@Component({
  selector: 'create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['../popup.component.scss']
})
export class CreatePopupComponent implements OnInit {
  
    MapEntityType = MapEntityType;

    @ViewChild(PhWindowComponent) window!: PhWindowComponent;

    @Output() create = new EventEmitter<MapEntityData>();

    public type?: MapEntityType;
    public entity: MapEntityData = new MapEntityData;
  
    constructor() { }

    ngOnInit(): void {
    }

    public apply() {
        this.entity.type = this.type!;
        this.create.next(this.entity);
        this.window.hide();
    } 

    public open(cursorPosition: {x: number, y: number}, mapPosition: {x: number, y: number}) {
        this.window.ref.nativeElement.style.top = `${cursorPosition.y}px`;
        this.window.ref.nativeElement.style.left = `${cursorPosition.x}px`;

        this.entity = new MapEntityData();
        this.entity.id = v4();
        this.entity.position = mapPosition;

        this.window.show();
    }

    public close() {

    }

    public cancel() {

    }
}
