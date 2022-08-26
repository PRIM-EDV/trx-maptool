import { Component, OnInit, ViewChild } from '@angular/core';
import { MapEntityType } from '../../rld-map/common/map-entity';


@Component({
  selector: 'create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['../popup.component.scss']
})
export class CreatePopupComponent implements OnInit {
  
    MapEntityType = MapEntityType;

    public type?: MapEntityType;
  
    constructor() { }



  ngOnInit(): void {
  }


}
