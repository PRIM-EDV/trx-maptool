import { Module } from '@nestjs/common';
import { MapApiModule } from './map/map.api.module';

@Module({
    imports: [
        MapApiModule
    ],
})
export class ApiModule {}