import { Module } from '@nestjs/common';
import { SquadRpcService } from './squad.rpc.service';

@Module({
    providers: [
        SquadRpcService
    ],
    exports: [
        SquadRpcService
    ]
})
export class SquadRpcModule {}