import { Component, OnInit, ViewChild } from '@angular/core';
import { MapEntityType } from '../../rld-map/common/map-entity';


@Component({
  selector: 'edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['../popup.component.scss']
})
export class EditPopupComponent implements OnInit {
  
    MapEntityType = MapEntityType;

    public type?: MapEntityType;
  
    constructor() { }



  ngOnInit(): void {
  }


}
