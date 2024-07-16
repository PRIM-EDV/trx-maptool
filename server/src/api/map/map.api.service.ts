import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DbMapEntity, DbMapEntityDocument} from 'src/infrastructure/repositories/map-entity/schemas/map-entity.schema';
import { Model } from 'mongoose';
import { MapEntity } from 'proto/trx.entity';

@Injectable()
export class MapApiService {
    constructor(
        @InjectModel("DbMapEntity") private mapEntityModel: Model<DbMapEntityDocument>
    ) {}

    public async deleteMapEntity(entity: MapEntity) {
        await this.mapEntityModel.deleteOne({uuid: entity.id}).exec();
    }

    public async setMapEntity(entity: MapEntity) {
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

    public async setTracker(tracker: any) {
        const entities = await this.mapEntityModel.find({"squad.trackerId": tracker.id}).exec();

        // for(const entity of entities) {
        //     entity.position = tracker.postion;
        //     entity.save();

        //     const req: Request = {
        //         setMapEntity: { entity: DbMapEntity.toProto(entity)}
        //     };
        //     this.gateway.requestAll(req);
        // }
    }

    public async getAllMapEntities() {
        const entities: MapEntity[] = [];

        for(const entity of await this.mapEntityModel.find().exec()) {
            entities.push(DbMapEntity.toProto(entity))
        }
        return entities;
    }
}
