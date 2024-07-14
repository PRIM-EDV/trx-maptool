import { Injectable } from '@nestjs/common';
import { Request } from 'proto/maptool';
import { MapEntity } from 'proto/maptool.map-entity';
import { InjectModel } from '@nestjs/mongoose';
import { DbMapEntity, DbMapEntityDocument} from 'src/schemas/map-entity.schema';
import { Model } from 'mongoose';
import { Tracker } from 'proto/rld-node';
import { AppGateway } from 'src/app.gateway';

@Injectable()
export class MapService {
    constructor(
        @InjectModel("DbMapEntity") private mapEntityModel: Model<DbMapEntityDocument>, 
        private readonly gateway: AppGateway) 
    {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));

    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.setMapEntity){
            this.setMapEntity(event.request.setMapEntity.entity);
            this.gateway.respond(event.clientId, event.msgId, {setMapEntity: {}});
            this.gateway.requestAllButOne(event.clientId, event.request);
        }
        if(event.request.getAllMapEntities){
            this.getAllMapEntities().then((entities) => {
                this.gateway.respond(event.clientId, event.msgId, {getAllMapEntities: {entities: entities}});
            });
        }
        if(event.request.deleteMapEntity){
            this.deleteMapEntity(event.request.deleteMapEntity.entity);
            this.gateway.respond(event.clientId, event.msgId, {deleteMapEntity: {}});
            this.gateway.requestAllButOne(event.clientId, event.request);
        }
    }

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

    public async setTracker(tracker: Tracker) {
        const entities = await this.mapEntityModel.find({"squad.trackerId": tracker.id}).exec();

        for(const entity of entities) {
            entity.position = tracker.postion;
            entity.save();

            const req: Request = {
                setMapEntity: { entity: DbMapEntity.toProto(entity)}
            };
            this.gateway.requestAll(req);
        }
    }

    public async getAllMapEntities() {
        const entities: MapEntity[] = [];

        for(const entity of await this.mapEntityModel.find().exec()) {
            entities.push(DbMapEntity.toProto(entity))
        }
        return entities;
    }
}
