import { v4 } from 'uuid';
import { MapEntityType } from "../rld-map/common/map-entity";
import { MapEntityData } from "../rld-map/common/map-entity-data";

export class SituationMapEntity {
    public id: string = v4();
    public position: {x: number, y: number} = {x: 0, y: 0};
    public type: MapEntityType = MapEntityType.TYPE_UNDEFINED;

    public squad: { name: string, callsign: string, trackerId: number | string, combattants: number } = { name: '', callsign: '', trackerId: -1, combattants: 1}
    public enemy: { combattants: number } = { combattants: 1}


    public getData(): MapEntityData {
        const data = new MapEntityData()

        data.id = this.id;
        data.position = this.position;
        data.type = this.type;
        
        if(this.type == MapEntityType.TYPE_FRIEND) {
            if (this.squad.combattants < 5) data.size = 1;
            if (this.squad.combattants >= 5 && this.squad.combattants < 10) data.size = 1;
            if (this.squad.combattants >= 10 && this.squad.combattants < 15) data.size = 2;
            if (this.squad.combattants >= 15 && this.squad.combattants < 20) data.size = 3;
            if (this.squad.combattants >= 20 && this.squad.combattants < 25) data.size = 4;
            if (this.squad.combattants >= 25 && this.squad.combattants < 30) data.size = 5;
            if ( this.squad.combattants >= 30) data.size = 6;

            data.text = this.squad.callsign;
        }

        if(this.type == MapEntityType.TYPE_FOE) {
            if (this.enemy.combattants < 5) data.size = 1;
            if (this.enemy.combattants >= 5 && this.enemy.combattants < 10) data.size = 1;
            if (this.enemy.combattants >= 10 && this.enemy.combattants < 15) data.size = 2;
            if (this.enemy.combattants >= 15 && this.enemy.combattants < 20) data.size = 3;
            if (this.enemy.combattants >= 20 && this.enemy.combattants < 25) data.size = 4;
            if (this.enemy.combattants >= 25 && this.enemy.combattants < 30) data.size = 5;
            if (this.enemy.combattants >= 30) data.size = 6;
        }


        return data;
    }

    public setData(data: MapEntityData): void {
        this.position = data.position;
        this.type = data.type;
    }
}