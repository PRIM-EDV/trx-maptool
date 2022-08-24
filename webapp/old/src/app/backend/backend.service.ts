import { Injectable } from '@angular/core';
import { MapObject } from 'src/app/core/map-object';

export interface Squad {
  name: string;
}

export interface Operator {
  callsign: string;
  trackerId?: number;
}


@Injectable()
export abstract class BackendService {
  public type = 'default';

  protected _mapObjects: Array<MapObject> = [];
  protected _squads: Array<Squad> = [];
  protected _operators: Array<Operator> = [];

  public abstract deleteMapObject(id: string): Promise<any>;
  public abstract setMapObject(mapObject: MapObject): Promise<any>;
  public abstract getMapObject(id: string): MapObject;
  public abstract getMapObjects(): Array<MapObject>;

  public getSquads(): Array<Squad> { return this._squads; }
  public getOperators(): Array<Operator> {return this._operators; }
  public onSynchronise(callback) {return; }
}
