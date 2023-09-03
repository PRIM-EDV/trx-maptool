import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbSquad, DbSquadSchema } from 'src/schemas/squad.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: DbSquad.name, schema: DbSquadSchema }])],
    exports: [],
    providers: []
})
export class SquadModule {
}