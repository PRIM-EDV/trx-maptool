import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbSquad, DbSquadDocument } from 'src/infrastructure/repositories/squad/schemas/squad.schema';
import { DbMapEntity, DbMapEntityDocument } from 'src/infrastructure/repositories/map-entity/schemas/map-entity.schema';
import { Request, Response } from 'proto/trx';

import { v4 as uuidv4 } from 'uuid';
import { AppGateway } from 'src/app.gateway';
import { MapEntity, MapEntityType } from 'proto/trx.entity';
import { Squad, SquadState } from 'proto/trx.squad';

@Injectable()
export class SquadApiService {
    constructor(
        @InjectModel("DbSquad") private squadModel: Model<DbSquadDocument>,
        @InjectModel("DbMapEntity") private mapEntityModel: Model<DbMapEntityDocument>, 
        private readonly gateway: AppGateway) 
    {

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
            if ((dbSquad.state != SquadState.SQUAD_STATE_IN_FIELD && squad.state ==  SquadState.SQUAD_STATE_IN_FIELD) ||
                (dbSquad.state == SquadState.SQUAD_STATE_IN_FIELD && squad.state !=  SquadState.SQUAD_STATE_IN_FIELD)
            ) {
                await this.updateMapEntity(squad);
            }
        
            dbSquad.state = squad.state ? squad.state : dbSquad.state;
            dbSquad.combattants = squad.combattants ? squad.combattants : dbSquad.combattants;
            dbSquad.callsign = squad.callsign ? squad.callsign : dbSquad.callsign
            dbSquad.position = squad.position ? squad.position : dbSquad.position
            
            await dbSquad.save();
        } else {
            if (squad.state ==  SquadState.SQUAD_STATE_IN_FIELD) {
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

    private async deleteMapEntity(entity: DbMapEntity) {
        await this.mapEntityModel.deleteOne({uuid: entity.uuid}).exec();
    }

    private async updateMapEntity(squad: Squad) {
        const dbMapEntity =  await this.mapEntityModel.findOne({"squad.name": squad.name});
        if (squad.state == SquadState.SQUAD_STATE_IN_FIELD && !dbMapEntity) {
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

        if (squad.state != SquadState.SQUAD_STATE_IN_FIELD && dbMapEntity) {
            const req: Request = {
                deleteMapEntity: {entity: DbMapEntity.toProto(dbMapEntity)}
            }

            await this.deleteMapEntity(dbMapEntity);
            await this.gateway.requestAll(req);
        }
    }
}