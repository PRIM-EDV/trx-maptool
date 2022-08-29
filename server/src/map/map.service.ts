import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/gateway/app.gateway';
import { Request } from 'proto/maptool';
import { MapEntity } from 'proto/maptool.map-entity';
import { InjectModel } from '@nestjs/mongoose';
import { DbMapEntity, DbMapEntityDocument} from 'src/schemas/map-entity.schema';
import { Model } from 'mongoose';

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
        }
        if(event.request.getAllMapEntities){
            this.getAllMapEntities().then((entities) => {
                this.gateway.respond(event.clientId, event.msgId, {getAllMapEntities: {entities: entities}});
            });
        }
    }

    public async setMapEntity(entity: MapEntity) {
        let dbMapEntity = await this.mapEntityModel.findOne({uuid: entity.id}).exec();

        if(dbMapEntity) {
            // dbMapEntity.updateFromProto(entity);
            // dbMapEntity.save();
        } else {
            dbMapEntity = new this.mapEntityModel(DbMapEntity.fromProto(entity));
            await dbMapEntity.save();
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
