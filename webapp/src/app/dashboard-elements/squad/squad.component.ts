import { Component, OnInit } from '@angular/core';
import { Squad } from 'proto/maptool.squad';


@Component({
  selector: 'squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  public squads: Array<Squad> = [
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
