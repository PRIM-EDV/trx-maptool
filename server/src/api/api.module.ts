import { Module } from '@nestjs/common';
import { MapApiModule } from './map/map.api.module';
import { AuthApiModule } from './auth/auth.api.module';

@Module({
    imports: [
        AuthApiModule,
        MapApiModule
    ],
})
export class ApiModule {}