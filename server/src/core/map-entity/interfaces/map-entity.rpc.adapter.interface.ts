import { MapEntity } from "proto/trx.entity";

export interface IMapEntityRpcAdapter {
    delete(entity: MapEntity): Promise<void>;
    set(entity: MapEntity): Promise<void>;
}