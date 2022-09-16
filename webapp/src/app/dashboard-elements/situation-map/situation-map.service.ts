import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { Response, Request } from 'proto/maptool';
import { MapEntity, MapEntityType } from 'proto/maptool.map-entity';
import { SituationMapEntity } from './common/situation-map-entity';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SituationMapService {

    public onSetMapEntity: Subject<MapEntity> = new Subject<MapEntity>();
    public onDeleteMapEntity: Subject<MapEntity> = new Subject<MapEntity>();

    constructor(private backend: BackendService) {
        backend.onRequest.subscribe(this.handleRequest.bind(this));
    }

    public async deleteMapEntity(entity: SituationMapEntity) {
        const req: Request = {
            deleteMapEntity: { entity: this.getProtoMapEntityFromData(entity) }
        }
        const res: Response = await this.backend.request(req);
    }

    public async setMapEntity(data: SituationMapEntity) {
        const req: Request = {
            setMapEntity: { entity: this.getProtoMapEntityFromData(data) }
        }
        const res: Response = await this.backend.request(req);
    }

    public async getAllMapEntities(): Promise<MapEntity[]>{
        const req: Request = {
            getAllMapEntities: {}
        }
    
        const res: Response = await this.backend.request(req);
        return res.getAllMapEntities!.entities!;
    }
    
    private getProtoMapEntityFromData(data: SituationMapEntity) {
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

        if (data.type == MapEntityType.TYPE_FOE) {
            entity.enemy = {
                combattants: data.enemy.combattants
            }
        }

        if (data.type == MapEntityType.TYPE_OBJECT) {
            entity.objective = {
                name: data.objective.name,
                description: data.objective.description
            }
        }

        return entity
    }

    private handleRequest(e: {id: string, request: Request}) {
        if(e.request.setMapEntity) {
            this.onSetMapEntity.next(e.request.setMapEntity.entity!);
        }
        if(e.request.deleteMapEntity) {
            this.onDeleteMapEntity.next(e.request.deleteMapEntity.entity!);
        }
    }
}
