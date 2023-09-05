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
  public squads: Array<Squad> = [];

  //
  public SquadState = SquadState;

  constructor(private readonly backend: BackendService, public readonly squadService: SquadService) {
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
    let squads = this.squads.filter((squad) => squad.state === state);
    return squads.sort((a, b) => a.position - b.position);
  }

  handleDrop(item: Squad, state: SquadState) {
    item.state = state;
    this.squadService.setSquad(item);
  }

  private handleRequest(e: {id: string, request: Request}) {
    if (e.request.setSquad) {
      this.handleSetSquad(e.request.setSquad.squad!);
    }
  }

  private handleSetSquad(squad: Squad) {
    this.fixPosition (squad.position, squad.state, squad.name);
    const existing = this.squads.find((item) => item.name == squad.name);
    console.log(squad);
    if (existing) {
      existing.callsign = squad.callsign;
      existing.combattants = squad.combattants;
      existing.state = squad.state;
      existing.position = squad.position;
    }else {
      this.squads.push(squad);
    }
  }

  // SUPER HACKY, PLEASE REMOVE ME
  private fixPosition (position: number, state: SquadState, name: string) {
    for (let squad of this.squads) {
      if (squad.position >= position && squad.name != name && squad.state == state) {
        squad.position += 1;
      }
    }

    const squads = this.squads.filter((a) => a.state == state).sort((a,b) => a.position - b.position);
    for (let i = 0; i < squads.length; i++) {
      const ref = this.squads.find((s) => s.name == squads[i].name);
      ref!.position = i;
    }
  }
}
