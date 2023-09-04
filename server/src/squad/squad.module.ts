import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbSquad, DbSquadSchema } from 'src/schemas/squad.schema';
import { SquadService } from './squad.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: DbSquad.name, schema: DbSquadSchema }])],
    exports: [],
    providers: [SquadService]
})
export class SquadModule {
}