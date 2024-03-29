import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/gateway/app.gateway';
import { Request } from 'proto/maptool';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbSquad, DbSquadDocument } from 'src/schemas/squad.schema';
import { Squad, SquadState } from 'proto/maptool.squad';
import { DbMapEntity, DbMapEntityDocument } from 'src/schemas/map-entity.schema';
import { MapEntity, MapEntityType } from 'proto/maptool.map-entity';

import { v4 as uuidv4 } from 'uuid';

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
            this.setSquad(event.request.setSquad.squad).then(() => {
                this.gateway.respond(event.clientId, event.msgId, {setSquad: {}});
                this.gateway.requestAll(event.request);
            }).catch((err) => {console.log(err)});
            this.gateway.requestAll(event.request);
        }

        if(event.request.getAllSquads){
            this.getAllSquads().then((squads) => {
                this.gateway.respond(event.clientId, event.msgId, {getAllSquads: {squads: squads}});
            }).catch((err) => {console.log(err)});
        }

        if(event.request.deleteSquad){
            this.deleteSquad(event.request.deleteSquad.squad).then(() => {
                this.gateway.respond(event.clientId, event.msgId, {deleteSquad: {}});
                this.gateway.requestAll(event.request);        
            }).catch((err) => {console.log(err)});
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
            if ((dbSquad.state != SquadState.STATE_IN_FIELD && squad.state ==  SquadState.STATE_IN_FIELD) ||
                (dbSquad.state == SquadState.STATE_IN_FIELD && squad.state !=  SquadState.STATE_IN_FIELD)
            ) {
                await this.updateMapEntity(squad);
            }
        
            dbSquad.state = squad.state ? squad.state : dbSquad.state;
            dbSquad.combattants = squad.combattants ? squad.combattants : dbSquad.combattants;
            dbSquad.callsign = squad.callsign ? squad.callsign : dbSquad.callsign
            dbSquad.position = squad.position ? squad.position : dbSquad.position
            
            await dbSquad.save();
        } else {
            if (squad.state ==  SquadState.STATE_IN_FIELD) {
                await this.updateMapEntity(squad);
            }
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

    private async updateMapEntity(squad: Squad) {
        const dbMapEntity =  await this.mapEntityModel.findOne({"squad.name": squad.name});
        if (squad.state == SquadState.STATE_IN_FIELD && !dbMapEntity) {
            const mapEntity: MapEntity = {
                id: uuidv4(),
                type: MapEntityType.TYPE_FRIEND,
                position: {x: 300, y: 1090},
                squad: {
                    name: squad.name,
                    callsign: squad.callsign,
                    trackerId: -1,
                    combattants: squad.combattants
                }
            }

            const req: Request = {
                setMapEntity: {
                    entity: mapEntity
                }
            }
            await (new this.mapEntityModel(DbMapEntity.fromProto(mapEntity))).save();
            await this.gateway.requestAll(req);
        }

        if (squad.state != SquadState.STATE_IN_FIELD && dbMapEntity) {
            const req: Request = {
                deleteMapEntity: {entity: DbMapEntity.toProto(dbMapEntity)}
            }

            await this.deleteMapEntity(dbMapEntity);
            await this.gateway.requestAll(req);
        }
    }
}