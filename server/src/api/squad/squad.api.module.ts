import { Module } from '@nestjs/common';
import { SquadApiService } from './squad.api.service';
import { SquadModule } from 'src/core/squad/squad.module';
import { SquadApiController } from './squad.api.controller';

@Module({
    imports: [
       SquadModule
    ],
    exports: [],
    providers: [SquadApiService, SquadApiController]
})
export class SquadApiModule {
}