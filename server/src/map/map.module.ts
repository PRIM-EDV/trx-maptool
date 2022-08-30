import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbMapEntity, MapEntitySchema } from 'src/schemas/map-entity.schema';
import { MapService } from './map.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: DbMapEntity.name, schema: MapEntitySchema }])],
    exports: [MapService],
    providers: [MapService]
})
export class MapModule {
}