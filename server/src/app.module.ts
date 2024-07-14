import { join } from 'path';
import { Global, Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MapApiModule } from './api/map/map.api.module';
import { SquadModule } from './squad/squad.module';
import { ApiModule } from './api/api.module';
import { AppGateway } from './app.gateway';
import { LoggingModule } from './core/logging/logging.module';

const MONGO_DB_HOST = process.env.MONGO_DB_HOST ? process.env.MONGO_DB_HOST : 'localhost'

@Global()
@Module({
  imports: [
    ApiModule,
    LoggingModule,
    MongooseModule.forRoot(`mongodb://database/prim`),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MapApiModule,
    SquadModule,
  ],
  controllers: [AppController],
  providers: [AppGateway, AppService],
  exports: [AppGateway]
})
export class AppModule {

}
