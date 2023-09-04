import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoggingModule } from './logging/logging.module';
import { GatewayModule } from './gateway/gateway.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MapModule } from './map/map.module';
import { TrackerModule } from './tracker/tracker.module';
import { SquadModule } from './squad/squad.module';

const MONGO_DB_HOST = process.env.MONGO_DB_HOST ? process.env.MONGO_DB_HOST : 'localhost'

@Module({
  imports: [
    AuthModule,
    GatewayModule,
    LoggingModule,
    MongooseModule.forRoot(`mongodb://database/prim`),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MapModule,
    TrackerModule,
    SquadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
