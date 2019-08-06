import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpBackendService } from '../map/backend/http-backend.service';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
import { MapObject } from '../map/backend/backend.service';
import { MapService } from '../map/map.service';
import { ContextMenuService } from '../map/context-menu/context-menu.service';


@Component({
  selector: 'app-bar',
  styleUrls: ['./app-bar.component.scss'],
  templateUrl: 'app-bar.component.html',
})
export class AppBarComponent {
    @ViewChild('sideMenu') sideMenu: ElementRef<HTMLDivElement>

    public title = 'rld-maptool';
    public nbFriends = 0;
    public nbFoes = 0;
    public nbObjects = 0;

    private _mapObjects: Array<MapObject> = [];
    private _activeMapObjects: Array<MapObject> = [];
    private _activeType: string = '';

    constructor(public backend: HttpBackendService, private _mapService: MapService, private _menuService: ContextMenuService) {
      this.backend.onSynchronise(() => {
          this._mapObjects = this.backend.getMapObjects();

          this.nbFriends = 0;
          this.nbFoes = 0;
          this.nbObjects = 0;

          this._mapObjects.forEach((mapObject) => {
              switch(mapObject.type){
                  case "friend": {
                      this.nbFriends += 1;
                      break;
                  }
                  case "foe": {
                      this.nbFoes += 1;
                      break;
                  }
                  case "object": {
                      this.nbObjects += 1;
                      break;
                  }
              }
          })

          if(this._activeType != '') {
            this._activeMapObjects = this._mapObjects.filter((mapObject) => {return mapObject.type == this._activeType});
          }
      })
    }

    ngAfterContentInit() {
        this.sideMenu.nativeElement.addEventListener('wheel', (e: Event) => {
            e.stopPropagation();
        })
    }

    private _onButtonClick(type: string) {
        if(this._activeType == type) {
            this._activeType = '';
        } else {
            this._activeType = type;
            this._activeMapObjects = this._mapObjects.filter((mapObject) => {return mapObject.type == type});
        }
    }

    private _onMapObjectClick(mapObject: MapObject) {
        this._mapService.map.centerToMapObject(mapObject);
    }

    private _onEdit(mapObject: MapObject){
        switch(mapObject.type) {
            case 'friend': {
                this._menuService.popupMenu.friendContext.open(this._mapService.map.getCenter(), mapObject);
                break;
            }
        }

    }
}
