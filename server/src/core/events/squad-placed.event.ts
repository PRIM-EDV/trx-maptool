import { Squad } from "proto/trx.squad";

export class SquadPlacedEvent {
    squad: Squad;

    constructor(squad: Squad) {
        this.squad = squad;
    }
}