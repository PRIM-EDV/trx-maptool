import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Response, Request } from 'proto/maptool';
import { MapEntity } from 'proto/maptool.map-entity';
import { MapEntityData, MapEntityType } from './rld-map/common/map-entity-data';

@Injectable({
    providedIn: 'root'
})
export class SituationMapService {

    constructor(private backend: BackendService) {

    }

    public async SetMapEntity(data: MapEntityData) {
        const req: Request = {
            setMapEntity: { entity: this.getMapEntityFromData(data) }
        }
        console.log(req)
        const res: Response = await this.backend.request(req);
    }

    public async GetAllMapEntities(): Promise<MapEntity[]>{
        const req: Request = {
            getAllMapEntities: {}
        }
    
        const res: Response = await this.backend.request(req);
        return res.getAllMapEntities!.entities!;
    }
    
    private getMapEntityFromData(data: MapEntityData) {
        const entity: MapEntity = {
            id: data.id,
            position: data.position,
            type: data.type
        }

        if (data.type == MapEntityType.TYPE_FRIEND) {
            entity.squad = {
                name: data.squad.name,
                callsign: data.squad.callsign,
                trackerId: Number(data.squad.trackerId),
                combattants: data.squad.combattants
            }
        }

        return entity
    }
}
