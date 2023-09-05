import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbSquad, DbSquadSchema } from 'src/schemas/squad.schema';
import { SquadService } from './squad.service';
import { DbMapEntity, MapEntitySchema } from 'src/schemas/map-entity.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: DbSquad.name, schema: DbSquadSchema }]),
        MongooseModule.forFeature([{ name: DbMapEntity.name, schema: MapEntitySchema }])
    ],
    exports: [],
    providers: [SquadService]
})
export class SquadModule {
}