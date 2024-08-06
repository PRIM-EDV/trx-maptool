import { Inject, Injectable } from "@nestjs/common";
import { IMapEntityRepository } from "./interfaces/map-entity.repository.interface";
import { OnEvent } from "@nestjs/event-emitter";
import { SquadPlacedEvent } from "../events/squad-placed.event";
import { v4 as uuidv4 } from 'uuid';
import { IMapEntityRpcAdapter } from "./interfaces/map-entity.rpc.adapter.interface";
import { MapEntity, MapEntityStatus, MapEntityType } from "proto/trx/trx.entity";
import { SquadState } from "proto/trx/trx.squad";

const MapEntityRepository = () => Inject('MapEntityRepository');
const MapRpcAdapter = () => Inject('MapEntityRpcAdapter');


@Injectable()
export class MapEntityService {
    constructor(
        @MapEntityRepository() private readonly mapEntityRepository: IMapEntityRepository,
        @MapRpcAdapter() private readonly mapEntityRpcAdapter: IMapEntityRpcAdapter
    ) {}

    public async place(entity: MapEntity): Promise<void> {
        return await this.mapEntityRepository.store(entity);
    }

    public async remove(entity: MapEntity): Promise<void> {
        return await this.mapEntityRepository.delete(entity);
    }

    public async getAll(): Promise<MapEntity[]> {
        return await this.mapEntityRepository.get();
    }

    @OnEvent('squad.placed')
    async handleSquadPlacedEvent(event: SquadPlacedEvent) {
        const squad = event.squad;
        const repoMapEntity = await this.mapEntityRepository.getBySquadName(event.squad.name);

        if (squad.state == SquadState.SQUAD_STATE_IN_FIELD && !repoMapEntity) {
            const mapEntity: MapEntity = {
                id: uuidv4(),
                type: MapEntityType.TYPE_FRIEND,
                position: {x: 300, y: 1090},
                squad: {
                    name: squad.name,
                    callsign: squad.callsign,
                    trackerId: -1,
                    combattants: squad.combattants,
                    status: MapEntityStatus.ENTITY_STATUS_REGULAR
                }
            }

            await this.place(mapEntity);
            await this.mapEntityRpcAdapter.set(mapEntity);
        }

        if (squad.state != SquadState.SQUAD_STATE_IN_FIELD && repoMapEntity) {
            await this.remove(repoMapEntity);
            await this.mapEntityRpcAdapter.delete(repoMapEntity);
        }     
    }
}
