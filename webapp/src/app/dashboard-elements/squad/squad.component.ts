import { AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Squad, SquadState } from 'proto/maptool.squad';
import { PhDropListComponent } from 'src/app/ph-elements/ph-drop-list/ph-drop-list.component';


@Component({
  selector: 'squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit, AfterViewInit {

  @ViewChildren(PhDropListComponent) dropListComponents!: QueryList<PhDropListComponent>;

  public connectedLists: Array<PhDropListComponent> = [];
  public squads: Array<Squad> = [
    {name: "Angry Beards", callsign: "AB", combattants: 5, state: SquadState.STATE_UNSTAGED}
  ];

  //
  public SquadState = SquadState;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    for(const item of this.dropListComponents) {
        this.connectedLists.push(item);
      }
  }

  public getSquadsByState(state: SquadState): Array<Squad> {
    return this.squads.filter((squad) => squad.state === state);
  }

  handleDrop(item: Squad, state: SquadState) {
    item.state = state;
  }

}
