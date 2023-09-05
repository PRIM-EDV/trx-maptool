import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/gateway/app.gateway';
import { Request } from 'proto/maptool';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbSquad, DbSquadDocument } from 'src/schemas/squad.schema';
import { Squad } from 'proto/maptool.squad';

@Injectable()
export class SquadService {
    constructor(
        @InjectModel("DbSquad") private squadModel: Model<DbSquadDocument>, 
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
        console.log(dbSquad);
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
}