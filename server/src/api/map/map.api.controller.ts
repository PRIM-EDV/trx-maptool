import { AppGateway } from 'src/app.gateway';
import { MapApiService } from './map.api.service';
import { Ws } from 'src/common/interfaces/ws';
import { DeleteMapEntity_Request, GetAllMapEntities, GetAllMapEntities_Response, SetMapEntity_Request } from 'proto/trx.entity';
import { RpcHandler, Rpc } from 'lib/rpc/decorators';
import { LoggingService } from 'src/infrastructure/logging/logging.service';

@RpcHandler(AppGateway)
export class MapApiController {
    constructor(
        private readonly log: LoggingService,
        private readonly service: MapApiService,
        private readonly gateway: AppGateway
    ) {}

    @Rpc()
    public async deleteMapEntity(client: Ws, req: DeleteMapEntity_Request) {
        await this.service.deleteMapEntity(req.entity);
        this.gateway.requestAllButOne(client.id, { deleteMapEntity: req }).then().catch(this.log.error);
    }

    @Rpc()
    public async getAllMapEntities(): Promise<GetAllMapEntities_Response> {
        const entities = await this.service.getAllMapEntities();
        return { entities: entities } ;
    }

    @Rpc()
    public async setMapEntity(client: Ws, req: SetMapEntity_Request) {
        await this.service.setMapEntity(req.entity);
        this.gateway.requestAllButOne(client.id, { setMapEntity: req }).then().catch(this.log.error);
    }
}