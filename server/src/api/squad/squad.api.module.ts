import { Module } from '@nestjs/common';
import { SquadApiService } from './squad.api.service';
import { SquadApiController } from './squad.api.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
    imports: [
        CoreModule
    ],
    exports: [],
    providers: [SquadApiService, SquadApiController]
})
export class SquadApiModule {
}