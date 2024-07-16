import { Inject, Injectable } from "@nestjs/common";
import { ISquadRepository } from "./interfaces/squad.repository.interface";
import { Squad } from "proto/trx.squad";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { SquadPlacedEvent } from "../events/squad-placed.event";

const SquadRepository = () => Inject('SquadRepository');

@Injectable()
export class SquadService { 
    constructor(
        private readonly eventEmitter: EventEmitter2,
        @SquadRepository() private readonly squadRepository: ISquadRepository,
    ) {}

    public async place(squad: Squad): Promise<void> {
        await this.squadRepository.store(squad);
        this.eventEmitter.emit('squad.placed', new SquadPlacedEvent(squad));
    }

    public async remove(squad: Squad): Promise<void> {
        return await this.squadRepository.delete(squad);
    }

    public async getAll(): Promise<Squad[]> {
        return await this.squadRepository.get();
    }
}