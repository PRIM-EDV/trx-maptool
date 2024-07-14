import * as WebSocket from 'ws';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { v4 as uuidv4 } from 'uuid';

import { Subject } from 'rxjs';
import { LoggingService } from './core/logging/logging.service';
import { TrxMessage, Request, Response } from 'proto/trx';
import { Ws } from './common/interfaces/ws';
@WebSocketGateway()
export class AppGateway {
  protected activeClients: Map<string, Ws> = new Map<string, Ws>();
  protected requests: Map<string, (value: Response) => void> = new Map<string, (value: Response) => void>();

  public onMessage: Subject<TrxMessage> = new Subject<TrxMessage>();
  public onRequest: Subject<{clientId: string, msgId: string, request: Request}> = new Subject<{clientId: string, msgId: string, request: Request}>();

  constructor(private readonly log: LoggingService) {
  }

  @WebSocketServer() server: WebSocket.Server;

  @SubscribeMessage('msg')
  handleMessage(client: Ws, payload: string): void {
    const msg = TrxMessage.fromJSON(JSON.parse(payload));

    if(msg.request) {
        this.onRequest.next({clientId: client.id, msgId: msg.id, request: msg.request});
    }

    if(msg.response) {
        if(this.requests.has(msg.id)) {
            this.requests.get(msg.id)!(msg.response);
            this.requests.delete(msg.id);
        }
    }
    this.onMessage.next(msg);
  }


  handleDisconnect(client: Ws) {
    this.activeClients.delete(client.id);
    this.log.info(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Ws, ...args: any[]) {
    const urlParams = new URLSearchParams(args[0].url.split('?')[1]);

    client.token = urlParams.get('token');
    client.id = uuidv4();
    
    this.activeClients.set(client.id, client);
    this.log.info(`Client connected: ${client.id}`);
  }

  public async request(clientId: string, req: Request): Promise<Response> {
    return new Promise((resolve, reject) => {
        const msg: TrxMessage = {
            id: uuidv4(),
            request: req
      }

      this.requests.set(msg.id, resolve.bind(this));
      setTimeout(this.rejectOnTimeout.bind(this, msg.id, reject), 5000);
      this.sendToClient(this.activeClients.get(clientId), msg);
    });
  }

  public async requestAll(req: Request) {
    const requests: Promise<Response>[] = [];
    for (const [id, activeClient] of this.activeClients) {
      requests.push(this.request(activeClient.id, req))
    }

    return Promise.allSettled(requests);
  }

  public async requestAllButOne(clientId: string, req: Request) {
    const requests: Promise<Response>[] = [];
    for (const [id, activeClient] of this.activeClients) {
      if (activeClient.id != clientId) {
        requests.push(this.request(activeClient.id, req))
      }
    }

    return Promise.allSettled(requests);
  }

  public respond(clientId: string, msgId: string, res: Response) {
    const msg: TrxMessage = {
        id: msgId,
        response: res
    }
    this.sendToClient(this.activeClients.get(clientId), msg);
  }

  protected rejectOnTimeout(id: string, reject: (reason?: any) => void) {
    if(this.requests.delete(id)) {
        reject();
    }
  }

  protected sendToAllClients(msg: TrxMessage) {
    for (const [id, client] of this.activeClients) {
      this.sendToClient(client, msg);
    }
  }

  protected sendToClient(client: Ws, msg: TrxMessage) {
    const buffer = {event: 'msg', data: JSON.stringify(TrxMessage.toJSON(msg))};
    client.send(JSON.stringify(buffer))
  }
}
