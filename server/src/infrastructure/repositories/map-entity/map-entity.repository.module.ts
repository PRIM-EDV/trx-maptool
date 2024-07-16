import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MapEntityRepository } from './map-entity.repository';
import { DbMapEntity, MapEntitySchema } from './schemas/map-entity.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: DbMapEntity.name, schema: MapEntitySchema }])],
    providers: [
        MapEntityRepository,
    ],
    exports: [
        MapEntityRepository
    ]
})
export class MapEntityRepositoryModule {
    
}