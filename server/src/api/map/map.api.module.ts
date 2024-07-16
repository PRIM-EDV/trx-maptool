import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbMapEntity, MapEntitySchema } from 'src/infrastructure/repositories/map-entity/schemas/map-entity.schema';
import { MapApiService } from './map.api.service';
import { MapApiController } from './map.api.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: DbMapEntity.name, schema: MapEntitySchema }])],
    providers: [
        MapApiController,
        MapApiService
    ],
    exports: [MapApiService]
})
export class MapApiModule {
}