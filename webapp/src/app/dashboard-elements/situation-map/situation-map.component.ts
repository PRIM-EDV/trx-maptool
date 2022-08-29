import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapEntity } from 'proto/maptool.map-entity';
import { BackendService } from 'src/app/backend/backend.service';
import { PhContextMenuComponent } from 'src/app/ph-elements/ph-context-menu/ph-context-menu.component';
import { PhWindowComponent } from 'src/app/ph-elements/ph-window/ph-window.component';
import { CreatePopupComponent } from './popups/create-popup/create-popup.component';
import { MapEntityData, MapEntityType } from './rld-map/common/map-entity-data';
import { MapComponent } from './rld-map/map.component';
import { SituationMapService } from './situation-map.service';

@Component({
  selector: 'situation-map',
  templateUrl: './situation-map.component.html',
  styleUrls: ['./situation-map.component.scss']
})
export class SituationMapComponent implements OnInit, AfterViewInit {

    @ViewChild(MapComponent) map!: MapComponent;
    @ViewChild("contextMenu") contextMenu!: PhContextMenuComponent;
    @ViewChild(CreatePopupComponent) createPopup!: CreatePopupComponent;

    @ViewChild("editPopup") editPopup!: PhWindowComponent;

    private position = {x: 0, y: 0};  
    private mapPosition = {x:0, y:0};

    constructor(private readonly backend: BackendService, private readonly sitationMapService: SituationMapService) {
        this.backend.onOpen.subscribe(() => {
            this.sitationMapService.GetAllMapEntities().then(this.setLocalMapEntities.bind(this));
        })
     }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.createPopup.close();
        this.editPopup.hide();
        this.contextMenu.close();
    }

    public onMapEntityCreate(data: MapEntityData) {

        this.sitationMapService.SetMapEntity(data);
        this.map.createMapEntity(data);
    }

    public openContextMenu(ev: {cursorPosition: {x: number, y: number}, mapPosition: {x: number, y: number}}) {
        this.position = ev.cursorPosition;
        this.mapPosition = ev.mapPosition;
        this.contextMenu.open(this.position);
    }

    public openUnitCreateMenu() {
        this.contextMenu.close();
        this.createPopup.open(this.position, this.mapPosition);
    }

    public openUnitEditMenu() {
        
    }

    private setLocalMapEntities(entities: MapEntity[]) {
        for(const entity of entities) {
            this.setLocalMapEntity(entity);
        }
    }

    private setLocalMapEntity(entity: MapEntity) {
        const data: MapEntityData = new MapEntityData();

        data.id = entity.id;
        data.position = entity.position!;
        data.type = entity.type as MapEntityType;

        this.map.createOrUpdateMapEntity(data);
    }

}
