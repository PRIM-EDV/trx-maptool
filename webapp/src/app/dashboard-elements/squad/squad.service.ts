import { Injectable } from '@angular/core';
import { Response, Request } from 'proto/maptool';
import { Squad } from 'proto/maptool.squad';
import { BackendService } from 'src/app/backend/backend.service';

@Injectable()
export class SquadService {
    constructor(private backend: BackendService) {

    }

    public async deleteSquad(squad: Squad) {
        const req: Request = {
            deleteSquad: { squad: squad }
        }
        const res: Response = await this.backend.request(req);
    }

    public async setSquad(squad: Squad) {
        const req: Request = {
            setSquad: { squad: squad }
        }
        const res: Response = await this.backend.request(req);
    }

    public async getAllSquads(): Promise<Squad[]>{
        const req: Request = {
            getAllSquads: {}
        }
    
        const res: Response = await this.backend.request(req);
        return res.getAllSquads!.squads!;
    }
}