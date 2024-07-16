import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbSquad, DbSquadSchema } from 'src/infrastructure/schemas/squad.schema';
import { SquadApiService } from './squad.api.service';
import { DbMapEntity, MapEntitySchema } from 'src/infrastructure/repositories/map-entity/schemas/map-entity.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: DbSquad.name, schema: DbSquadSchema }]),
        MongooseModule.forFeature([{ name: DbMapEntity.name, schema: MapEntitySchema }])
    ],
    exports: [],
    providers: [SquadApiService]
})
export class SquadApiModule {
}