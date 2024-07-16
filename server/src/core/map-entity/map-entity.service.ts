import { Inject, Injectable } from "@nestjs/common";
import { IMapEntityRepository } from "./interfaces/map-entity.repository.interface";
import { MapEntity } from "proto/trx.entity";

const MapEntityRepository = () => Inject('MapEntityRepository');

@Injectable()
export class MapEntityService {
    constructor(
        @MapEntityRepository() private readonly mapEntityRepository: IMapEntityRepository
    ) {}

    public async place(entity: MapEntity): Promise<void> {
        let dbMapEntity = await this.mapEntityModel.findOne({uuid: entity.id}).exec();
        if(dbMapEntity) {
            dbMapEntity.uuid = entity.id;
            dbMapEntity.position = entity.position;
            dbMapEntity.type = entity.type;
    
            if(entity.squad) {
                dbMapEntity.squad = entity.squad;
            }

            if(entity.enemy) {
                dbMapEntity.enemy = entity.enemy;
            }

            if(entity.objective) {
                dbMapEntity.objective = entity.objective;
            }
            
            dbMapEntity.save();
        } else {
            dbMapEntity = new this.mapEntityModel(DbMapEntity.fromProto(entity));
            await dbMapEntity.save();
        }
    }
}