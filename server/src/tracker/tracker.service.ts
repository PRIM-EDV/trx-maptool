import { Injectable } from '@nestjs/common';
import { TrackerGateway } from './tracker.gateway';
import { Request } from 'proto/rld-node';
import { MapService } from 'src/map/map.service';

@Injectable()
export class TrackerService {
    constructor(private readonly gateway: TrackerGateway, private readonly mapService: MapService) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if (event.request.setTracker) {
            this.mapService.setTracker(event.request.setTracker.tracker);
            this.gateway.respond(event.clientId, event.msgId, {setTracker: {}});
        }
    }
}
