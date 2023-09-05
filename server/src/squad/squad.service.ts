import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/gateway/app.gateway';
import { Request } from 'proto/maptool';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbSquad, DbSquadDocument } from 'src/schemas/squad.schema';
import { Squad } from 'proto/maptool.squad';
import { DbMapEntity, DbMapEntityDocument } from 'src/schemas/map-entity.schema';

@Injectable()
export class SquadService {
    constructor(
        @InjectModel("DbSquad") private squadModel: Model<DbSquadDocument>,
        @InjectModel("DbMapEntity") private mapEntityModel: Model<DbMapEntityDocument>, 
        private readonly gateway: AppGateway) 
    {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));

    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if (event.request.setSquad) {
            this.setSquad(event.request.setSquad.squad);
            this.gateway.respond(event.clientId, event.msgId, {setSquad: {}});
            this.gateway.requestAll(event.request);
        }

        if(event.request.getAllSquads){
            this.getAllSquads().then((squads) => {
                this.gateway.respond(event.clientId, event.msgId, {getAllSquads: {squads: squads}});
            });
        }

        if(event.request.deleteSquad){
            this.deleteSquad(event.request.deleteSquad.squad).then(() => {
                this.gateway.respond(event.clientId, event.msgId, {deleteSquad: {}});
                this.gateway.requestAll(event.request);        
            });
        }
    }

    public async deleteMapEntity(entity: DbMapEntity) {
        await this.mapEntityModel.deleteOne({uuid: entity.uuid}).exec();
    }

    public async getAllSquads() {
        const squads: Squad[] = [];

        for(const squad of await this.squadModel.find().exec()) {
            squads.push(DbSquad.toProto(squad))
        }
        return squads;
    }

    public async setSquad(squad: Squad) {
        let dbSquad = await this.squadModel.findOne({name: squad.name}).exec();
        if(dbSquad) {
            dbSquad.state = squad.state ? squad.state : dbSquad.state;
            dbSquad.combattants = squad.combattants ? squad.combattants : dbSquad.combattants;
            dbSquad.callsign = squad.callsign ? squad.callsign : dbSquad.callsign
            
            await dbSquad.save();
        } else {
            dbSquad = new this.squadModel(DbSquad.fromProto(squad));
            await dbSquad.save();
        }
    }

    public async deleteSquad(squad: Squad) {
        await this.squadModel.deleteOne({name: squad.name}).exec();

        const mapEntity = await this.mapEntityModel.findOne({"squad.name": squad.name});

        if (mapEntity) {
            const req: Request = {
                deleteMapEntity: {entity: DbMapEntity.toProto(mapEntity)}
            }
            await this.deleteMapEntity(mapEntity);
            await this.gateway.requestAll(req);
        }
    }
}