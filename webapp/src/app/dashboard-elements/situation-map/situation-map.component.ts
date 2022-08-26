import { Component, OnInit, ViewChild } from '@angular/core';
import { PhContextMenuComponent } from 'src/app/ph-elements/ph-context-menu/ph-context-menu.component';

@Component({
  selector: 'situation-map',
  templateUrl: './situation-map.component.html',
  styleUrls: ['./situation-map.component.scss']
})
export class SituationMapComponent implements OnInit {

  @ViewChild("contextMenu") contextMenu!: PhContextMenuComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public openContextMenu(ev: {x: number, y: number}) {
    this.contextMenu.open(ev);
  }

  public openUnitEditMenu() {
    
  }

  blub(e: any) {
    console.log("?")
    e.preventDefault();
    return false
  }

  blub2(e: any) {
    console.log("??")
  }

}
