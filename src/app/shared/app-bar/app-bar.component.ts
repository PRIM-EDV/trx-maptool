import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-bar',
  styleUrls: ['./app-bar.component.scss'],
  templateUrl: 'app-bar.component.html',
})
export class AppBarComponent {
    @ViewChild('sideMenu', {static: true}) sideMenu: ElementRef<HTMLDivElement>

    public title = 'rld-maptool';
    public nbFriends = 0;
    public nbFoes = 0;
    public nbObjects = 0;

    private _activeType: string = '';

    constructor() {
    //   this.backend.onSynchronise(() => {
    //       this._mapObjects = this.backend.getMapObjects();

    //       this.nbFriends = 0;
    //       this.nbFoes = 0;
    //       this.nbObjects = 0;

    //       this._mapObjects.forEach((mapObject) => {
    //           switch(mapObject.type){
    //               case "friend": {
    //                   this.nbFriends += 1;
    //                   break;
    //               }
    //               case "foe": {
    //                   this.nbFoes += 1;
    //                   break;
    //               }
    //               case "object": {
    //                   this.nbObjects += 1;
    //                   break;
    //               }
    //           }
    //       })

    //       if(this._activeType != '') {
    //         this._activeMapObjects = this._mapObjects.filter((mapObject) => {return mapObject.type == this._activeType});
    //       }
    //   })
    }

    ngAfterContentInit() {
        // this.sideMenu.nativeElement.addEventListener('wheel', (e: Event) => {
        //     e.stopPropagation();
        // })
    }

    private _onButtonClick(type: string) {
        // if(this._activeType == type) {
        //     this._activeType = '';
        // } else {
        //     this._activeType = type;
        //     this._activeMapObjects = this._mapObjects.filter((mapObject) => {return mapObject.type == type});
        // }
    }

    private _onMapObjectClick() {
        // this._mapService.map.centerToMapObject(mapObject);
    }

    private _onEdit(){
        // switch(mapObject.type) {
        //     case 'friend': {
        //         this._menuService.popupMenu.friendContext.open(this._mapService.map.getCenter(), mapObject);
        //         break;
        //     }
        //     case 'object': {
        //         this._menuService.popupMenu.objectContext.open(this._mapService.map.getCenter(), mapObject);
        //         break;
        //     }
        //     case 'foe': {
        //         this._menuService.popupMenu.foeContext.open(this._mapService.map.getCenter(), mapObject);
        //         break;
        //     }
        // }
    }

    private _onDelete() {
        // this.backend.deleteMapObject(mapObject.id).then();
    }
}
