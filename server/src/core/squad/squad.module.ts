import { Module } from '@nestjs/common';
import { SquadService } from './squad.service';
import { SquadRepositoryModule } from 'src/infrastructure/repositories/squad/squad.repository.module';

@Module({
    imports: [
        SquadRepositoryModule
    ],
    providers: [
        SquadService
    ],
    exports: [
        SquadService
    ]
})
export class SquadModule {}