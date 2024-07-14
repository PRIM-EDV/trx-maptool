import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbMapEntity, MapEntitySchema } from 'src/schemas/map-entity.schema';
import { MapApiService } from './map.api.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: DbMapEntity.name, schema: MapEntitySchema }])],
    providers: [MapApiService],
    exports: [MapApiService]
})
export class MapApiModule {
}