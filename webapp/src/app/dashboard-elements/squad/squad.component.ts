import { AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Squad, SquadState } from 'proto/maptool.squad';
import { Response, Request } from 'proto/maptool';
import { PhDropListComponent } from 'src/app/ph-elements/ph-drop-list/ph-drop-list.component';
import { SquadService } from './squad.service';
import { CreatePopupComponent } from './popups/create-popup/create-popup.component';


@Component({
  selector: 'squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit, AfterViewInit {

  @ViewChild(CreatePopupComponent) createPopup!: CreatePopupComponent;
  @ViewChildren(PhDropListComponent) dropListComponents!: QueryList<PhDropListComponent>;

  public connectedLists: Array<PhDropListComponent> = [];
  public squads: Array<Squad> = [
    {name: "Angry Beards", callsign: "AB", combattants: 5, state: SquadState.STATE_UNSTAGED}
  ];

  //
  public SquadState = SquadState;

  constructor(private readonly backend: BackendService, private readonly squadService: SquadService) {
    this.backend.onOpen.subscribe(() => {
      this.squadService.getAllSquads().then((squads) => {this.squads = squads});
    })
    backend.onRequest.subscribe(this.handleRequest.bind(this));
  }

  ngOnInit(): void {
    if (this.backend.isConnected) {
      this.squadService.getAllSquads().then((squads) => {this.squads = squads});
    }
  }

  ngAfterViewInit() {
    for(const item of this.dropListComponents) {
        this.connectedLists.push(item);
      }
  }

  public openSquadCreatePopup(ev: MouseEvent) {
    const position ={x: window.innerWidth / 2 - 330, y: window.innerHeight / 2 - 70};
    this.createPopup.open(position);
  }

  public getSquadsByState(state: SquadState): Array<Squad> {
    return this.squads.filter((squad) => squad.state === state);
  }

  handleDrop(item: Squad, state: SquadState) {
    item.state = state;
    this.squadService.setSquad(item);
  }

  private handleRequest(e: {id: string, request: Request}) {
    if (e.request.setMapEntity) {

    }
  }
}
